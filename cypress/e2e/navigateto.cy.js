describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.internetbrands.com/')
    cy.scrollTo('bottom')
    cy.get('.text-holder > .btn').click()
  })
})