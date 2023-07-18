describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('.login_logo')
    cy.scrollTo('bottom')
    cy.get('[data-test="username"]')
    cy.get('[data-test="password"]')
    cy.get('#login-button')
    cy.contains('LOGIN').click()
    cy.get('[data-test="error"]')

  })
})