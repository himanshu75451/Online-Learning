import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";
import apiData from "../fixtures/apiData.json";
import { male, female } from "../fixtures/filtered.json";
describe("Test", function () {
  let acc_score = 1;

  function CheckCard(data, selector = "", index) {
    cy.get(selector).eq(index).contains(data.name);
    cy.get(selector).eq(index).contains(data.salary);
    cy.get(selector).eq(index).contains(data.gender);
    cy.get(selector).eq(index).contains(data.department);
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
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`,
          (req) => {
            req.reply({
              body: apiData,
            });
          }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then((data) => {
          acc_score += 2;
        });
      }); // 2
      it(`Student is able to loop through the data and append in the dom`, () => {
        cy.get("#employees")
          .children("div")
          .should("have.length", apiData.data.length);
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it(`Check the css of the cards`, () => {
        cy.get("#employees").should("have.css", "display", "grid");
        cy.then(() => (acc_score += 1));
      }); // 1

      it(`Check the basic structure of the Employee Cards`, () => {
        for (let i = 0; i < apiData.data.length; i++) {
          CheckCard(apiData.data[i], "#employees>div", i);
        }
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it(`Check if the Filter Part is working or not`, () => {
        cy.get("#filter").select("male");
        cy.get("#employees>div").should("have.length", male.length);
        cy.get("#filter").select("female");
        cy.get("#employees>div").should("have.length", female.length);
        cy.then(() => {
          acc_score += 2;
        });
      }); //2

      it(`Add To Employee of the month`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`,
          (req) => {
            req.reply({
              body: apiData,
            });
          }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then(() => {
          expect(localStorage.getItem("employees-ls")).eq(null);
        });
        cy.get("#employees>div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("employees-ls")).length).eq(
              1
            );
          });
        cy.get("#employees>div")
          .eq(1)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("employees-ls")).length).eq(
              2
            );
          });

        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it(`Check the Employee of the month Page`, () => {
        cy.visit(`${url}employeeOfMonth.html`);
        cy.get("#employees").children("div").should("have.length", 2);
        CheckCard(apiData.data[0], "#employees>div", 0);
        CheckCard(apiData.data[1], "#employees>div", 1);
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it(`Check the Delete part`, () => {
        expect(JSON.parse(localStorage.getItem("employees-ls")).length).eq(2);
        cy.get("#employees>div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("employees-ls")).length).eq(
              1
            );
          });
        cy.get("#employees>div").should("have.length", 1);

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
