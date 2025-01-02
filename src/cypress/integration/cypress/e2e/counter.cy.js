// to run cypress comment other compenets from index.js and run command npx cypress open.
describe('Counter Component', () => {
  beforeEach(() => {
    // Visit the page where the Counter component is rendered
    cy.visit('http://localhost:3000'); // Adjust to your local server URL
  });

  it('should display the initial count passed in props', () => {
    // Ensure the initial value is set correctly
    cy.get('p').should('have.text', 'Value: 0'); // Assuming the initial value is 0
  });

  it('should increment the counter when the "Increment" button is clicked', () => {
    // Click the "Increment" button
    cy.get('button').contains('Increment').click();

    // Ensure the count increased by 1
    cy.get('p').should('have.text', 'Value: 1');
  });

  it('should decrement the counter when the "Decrement" button is clicked', () => {
    // First increment the count by 1
    cy.get('button').contains('Increment').click();
    cy.get('p').should('have.text', 'Value: 1');

    // Click the "Decrement" button
    cy.get('button').contains('Decrement').click();

    // Ensure the count decreased by 1
    cy.get('p').should('have.text', 'Value: 0');
  });

  it('should increment and decrement the counter correctly with multiple clicks', () => {
    // Increment count by 3
    cy.get('button').contains('Increment').click().click().click();

    // Ensure the count is 3
    cy.get('p').should('have.text', 'Value: 3');

    // Decrement count by 2
    cy.get('button').contains('Decrement').click().click();

    // Ensure the count is 1
    cy.get('p').should('have.text', 'Value: 1');
  });
});
