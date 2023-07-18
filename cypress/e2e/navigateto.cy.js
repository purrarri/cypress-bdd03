describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.scrollTo('bottom')
    cy.get('.text-holder > .btn').click()
  })
})