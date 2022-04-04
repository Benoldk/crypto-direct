// app-tests.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// import { should } from "chai"

describe('home-page-tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('home page contains 10 elements for exchanges', () => {
        cy.get('.exchange').should('have.length', 10)
    })

    it('each exchange contains logo', () => {
        cy.get('.exchange')
        .each(($el, index, $list) => {
            $el.get('exchange-logo')
        })
    })

    it('each exchange contains name', () => {
        cy.get('.exchange')
        .each(($el, index, $list) => {
            $el.get('exchange-name')
        })
    })

    it('each exchange contains  country', () => {
        cy.get('.exchange')
        .each(($el, index, $list) => {
            $el.get('exchange-country')
        })
    })

    it('each exchange contains URL', () => {
        cy.get('.exchange')
        .each(($el, index, $list) => {
            $el.get('exchange-url')
        })
    })

    it('each exchange contains trust rank', () => {
        cy.get('.exchange')
        .each(($el, index, $list) => {
            $el.get('exchange-rank')
        })
    })
})

describe('exchangedetail-page-tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/exchange/binance')
    })

    it('should have logo', () => {
        cy.get('.exchange-detail-logo')
    })

    it('should have name', () => {
        cy.get('.exchange-detail-name')
    })

    it('should have country', () => {
        cy.get('.exchange-detail-country')
    })

    it('should have year established', () => {
        cy.get('.exchange-detail-est')
    })

    it('should have trust score rank', () => {
        cy.get('.exchange-detail-rank')
    })

    it('should have description', () => {
        cy.get('.exchange-detail-desc')
    })

    it('should have social media', () => {
        cy.get('.exchange-detail-socials')
    })

    it('should contain a back button', () => {
        cy.get('button')
        .should('have.text', 'BACK')
    })

    it('back button should have link to home page', () => {
        cy.get('button')
        .parent()
        .should('have.attr', 'href')
        .should('eq', '/')
    })
})