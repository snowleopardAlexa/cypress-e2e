// calling html tag is not the best way
// using HTML tag is not the right way to test in cypress
// OTHER WAYS --> using indexes and specifying that you want to use second 
// span on the webpage is not a good approach either
// Selecting elments by CSS classes --> still not the best solution
// Selecting IDs of CSS --> it is better than selecting elements by classes, but still not the best 
// solution. IDs change very rarely, classes change very often. 
// Selecting by text they contain --> safe but it can still break
// RECOMMENDED BY CYPRRESS --> use special data attribute on the elements we want to test.

describe('Heading text', () => {
    it('contains the correct title', () => {
        cy.visit('http://localhost:3000/example-1')

        cy.get('h1')
           .invoke('text')
           .should('equal', 'My Awesome Web Application')
    })
})
