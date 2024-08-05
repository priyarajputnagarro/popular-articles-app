/// <reference types="cypress" />

import { articles_mock } from "../../src/__mocks__/mock";

describe("Most Popular Articles Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*",
      {
        statusCode: 200,
        body: { results: [articles_mock] },
      }
    ).as("getArticles");

    cy.visit("http://localhost:3000");
  });

  it("should display articles list correctly", () => {
    cy.contains("Most Popular Articles").should("be.visible");

    cy.wait("@getArticles");

    cy.contains("Test Article").should("be.visible");
    cy.contains("Test Author").should("be.visible");
    cy.contains("Published on: 2024-07-31").should("be.visible");
  });

  it("should handle READ MORE action correctly", () => {
    cy.contains("READ MORE").first().click();
    cy.url().should("include", `/article/${articles_mock.id}`);
  });
});
