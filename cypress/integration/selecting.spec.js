// this a correct way of writing test in cypress
// using DOM elements is not a good approach because we can have duplicate elements
// in the entire application. We can have 5 spans, and calling span Dom element will
// crash cypress since the tool will not know which one we want to test
// OTHER WAYS --> using indexes and specifying that you want to use second 
// span on the webpage is not a good approach either
// Selecting elments by CSS classes --> still not the best solution
// Selecting IDs of CSS --> it is better than selecting elements by classes, but still not the best 
// solution. IDs change very rarely, classes change very often. 
// Selecting by text they contain --> safe but it can still break
// RECOMMENDED BY CYPRRESS --> use special data attribute on the elements we want to test.
// --> data.cy


describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
     cy.visit('http: //localhost: 3000/example-2');

     cy.get('[data-cy="last-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '15')

     cy.get('[data-cy="last-name-chars-left-count"]').type('hello')

     cy.get('[data-cy="last-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '10')

     cy.get('[data-cy="last-name-chars-left-count"]').type(' my friend')

     cy.get('[data-cy="last-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '0')
   })

   it('prevents the user from typing more characters once max is exceeded', () => {
       cy.visit('http://localhost:3000/example-2')

       cy.get('[data-cy="last-name-chars-left-count"]').type('abcdefghijklmnoprstuvwxyz')

       cy.get('[data-cy="last-name-chars-left-count"]')
          .should('have.attr', 'value', 'abcdefghijklmno')
   })
})



