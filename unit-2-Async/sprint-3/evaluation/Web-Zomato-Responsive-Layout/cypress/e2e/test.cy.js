import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

data.forEach((ele) => {
  describe("Test", () => {
    let url = ele.submission_link;
    let acc_score = 1;
    if (url && url.trim().length) {
      it("The Navbar has been built with flex", () => {
        cy.visit(url);
        cy.get(".nav").should("have.css", "display", "flex");
        cy.get(".nav h1");
        cy.get(".nav button");
        cy.get(".nav>div p");

        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1
      it("Top part has display flex & the basic structure", () => {
        cy.visit(url);
        cy.get(".top div").should("have.css", "display", "flex");
        cy.get(".top>div").should("have.css", "flex-direction", "row");
        cy.get(".top>div").children("div").should("have.length", 3);
        cy.get(".top>div>div img");
        cy.get(".top>div>div h3");
        cy.get(".top>div>div p");
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Mid Part has display grid and the basic structure", () => {
        cy.visit(url);
        cy.get(".mid>div").should("have.css", "display", "grid");

        cy.get(".mid>div").children("div").should("have.length", 6);

        cy.get(".mid>div>div img");
        cy.get(".mid>div>div button");
        cy.get(".mid>div>div h3");

        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Bottom part has display flex and the basic structure", () => {
        cy.get(".bottom>div").children("div").should("have.length", 3);

        cy.get(".bottom>div").should("have.css", "flex-direction", "row");
        cy.get(".bottom>div>div p").should("have.length", 6);
        cy.get(".bottom>div>div h3");
        cy.get(".bottom>div>div img");
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1
      it(`Check the responsiveness of the Navbar`, () => {
        cy.viewport(700, 800);
        cy.get(".nav>div")
          .should("not.be.visible")
          .then(() => {
            acc_score += 1;
          });
      }); // 1

      it(`Check the responsiveness of the top parts`, () => {
        cy.viewport(700, 800);
        cy.get(".top>div").should("have.css", "flex-direction", "column");
        cy.then(() => {
          acc_score += 2;
        });
      }); //2

      it(`Check the responsiveness of the bottom part`, () => {
        cy.viewport(400, 800);
        cy.get(".bottom>div").should("have.css", "flex-direction", "column");
        cy.then(() => {
          acc_score += 2;
        });
      }); //2
    }
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id: ele.id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
