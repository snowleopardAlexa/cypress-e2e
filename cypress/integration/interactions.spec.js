describe('Basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4')
    });

    it('sets the header text to the item\'s name when double clicked', () => {
        cy.get('[data-cy=box-1-selected-name] > :nth-child(2)')
        dblclick()
        
        cy.get('[data-cy=]')
          .invoke('text')
          .should('equal', 'Option Two')
    })

    it('displays the correct count for the number of selected checkboxes', () => {
        cy.get('[data-cy=box-2-checkboxes] > nth-child(1) input')
          .check()
    })
})