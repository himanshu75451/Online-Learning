import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";
import apiData from "../fixtures/apiData.json";
import { filter1, filter2 } from "../fixtures/filtered.json";
describe("Test", function () {
  let acc_score = 1;

  function CheckCard(data, selector = "", index) {
    cy.get(selector).eq(index).contains(data.name);
    cy.get(selector).eq(index).contains(data.price);
    cy.get(selector).eq(index).contains("button", "Buy");
  }
  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Check if the api call made`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-vouchers`,
          (req) => {
            req.reply({
              body: apiData,
            });
          }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then((data) => {
          acc_score += 1;
        });
      }); // 1
      it(`Student is able to loop through the data and append in the dom`, () => {
        cy.visit(url);
        cy.get("#voucher-container")
          .children("div")
          .should("have.length", apiData.data[0].vouchers.length);
        cy.get("#voucher-container").should("have.css", "display", "grid");

        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it(`Check the basic structure of the Voucher Cards`, () => {
        for (let i = 0; i < apiData.data[0].vouchers.length; i++) {
          CheckCard(apiData.data[0].vouchers[i], "#voucher-container>div", i);
        }

        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it(`Check if the Filter Part is working or not`, () => {
        cy.get("#filter>#lower").clear().type(100);
        cy.get("#filter>#upper").clear().type(300);
        cy.get("#filter-btn").click();
        cy.get("#voucher-container")
          .children("div")
          .should("have.length", filter1.length);
        for (let i = 0; i < filter1.length; i++) {
          CheckCard(filter1[i], "#voucher-container>div", i);
        }

        cy.get("#filter>#lower").clear().type(200);
        cy.get("#filter>#upper").clear().type(800);
        cy.get("#filter-btn").click();
        cy.get("#voucher-container")
          .children("div")
          .should("have.length", filter2.length);
        for (let i = 0; i < filter2.length; i++) {
          CheckCard(filter2[i], "#voucher-container>div", i);
        }

        cy.then(() => {
          acc_score += 2;
        });
      }); //2

      it(`Check the alert after wrong filter values`, () => {
        cy.visit(url);
        cy.get("#filter>#lower").clear().type(500);
        cy.get("#filter>#upper").clear().type(300);
        cy.get("#filter-btn").click();

        cy.on("window:alert", (str) => {
          expect(str).to.equal(`Please Enter a valid Range`);
        });

        cy.get("#voucher-container")
          .children("div")
          .should("have.length", apiData.data[0].vouchers.length);
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it(`Buy Vouchers`, () => {
        cy.visit(url).then(() => {
          expect(localStorage.getItem("vouchers")).eq(null);
        });
        cy.get("#voucher-container>div")
          .eq(0)
          .contains("button", "Buy")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("vouchers")).length).eq(1);
          });

        cy.get("#voucher-container>div")
          .eq(1)
          .contains("button", "Buy")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("vouchers")).length).eq(2);
          });

        cy.get("#voucher-container>div")
          .eq(2)
          .contains("button", "Buy")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("vouchers")).length).eq(3);
          });

        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it(`Check the Vouchers Page`, () => {
        cy.visit(`${url}my-voucher.html`);
        cy.get("#voucher-container").children("div").should("have.length", 3);

        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it(`Check the total of Voucher Page`, () => {
        cy.get("#order-total").should("have.text", 697);
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it(`Apply Cupon Code`, () => {
        cy.get("#cupon > input").clear().type("mas");
        cy.get("#cupon > button").click();
        cy.get("#order-total").contains(Math.floor(697));
        cy.get("#cupon > input").clear().type("Masai30");
        cy.get("#cupon > button").click();
        cy.get("#order-total").contains(Math.floor(Math.floor(697 * 0.7)));

        cy.then(() => {
          acc_score += 1;
        });
      }); //1

      it(`Check the Delete part`, () => {
        cy.get("#voucher-container>div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("vouchers")).length).eq(2);
          });
        cy.get("#voucher-container>div").should("have.length", 2);

        cy.then(() => {
          acc_score += 2;
        });
      }); //2
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
