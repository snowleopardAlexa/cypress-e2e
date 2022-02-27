describe('Text box with max characters', () => {
    beforeEach(() => {
     cy.visit('http: //localhost: 3000/example-2');

     cy.get('[data-cy="last-name-chars-left-count"]')
        .as('charsLeftSpan')

     cy.get('[data-cy="input-last-name"]').type('hello')
        .as('@charInput')

     cy.get('@charsLeftSpan')
        .then($charsLeftSpan => {
            expect($charsLeftSpan.text().to.equal('15'))
      })
    })

    it('displays the appropriate remaining characters count', () => {

     cy.get('@charInput').type(' my friend')

     cy.get('@charsLeftSpan')
        .invoke('text')
        .should('equal', '0')
   })

   it('prevents the user from typing more characters once max is exceeded', () => {
       cy.get('@charInput')
          .should('have.attr', 'value', 'abcdefghijklmno')
   })
})