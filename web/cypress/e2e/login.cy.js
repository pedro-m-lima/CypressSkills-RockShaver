describe('Pré-Cadastro', () => {

  beforeEach(()=>{
    cy.visit('/')
  })


  it('Realizar pré-cadastro com sucesso', () => {
    
    //arrange
    const dadosLogin = {
      nameUser: 'Pedro Teste',
      emailUser: 'pedro@skills.com.br',
    }
    
    //Act
    cy.get('header nav div a[href="pre-cadastro"]')
      .click()   

    cy.get('form h2')
      .should('be.visible')
      .should('have.text', 'Seus dados')
    cy.get('form input[name="nome"]')
      .type(dadosLogin.nameUser)
      .should('have.value', dadosLogin.nameUser)
    cy.get('form input[name="email"]')
      .type(dadosLogin.emailUser)
      .should('have.value', dadosLogin.emailUser)
    cy.contains('form div button', 'Continuar')
      .click()
    cy.wait(100)

    //Assert
    cy.get('.user-name')
      .should('be.visible')
      .should('have.text', dadosLogin.nameUser)
    cy.get('.user-email')
    .should('be.visible')
    .should('have.text', dadosLogin.emailUser)
  })
})