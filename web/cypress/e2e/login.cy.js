describe('Login', () => {

  beforeEach(()=>{
    cy.visit('/')
  })


  it('Realizar login com sucesso', () => {
    
    //arrange
    const dadosLogin = {
      nameUser: 'Pedro Teste',
      emailUser: 'pedro@skills.com.br',
      whatsUser: '14999999999'
    }
    
    //Act
    cy.get('header nav div a[href="entrar"]')
      .click()   

    cy.get('form h2')
      .should('be.visible')
      .should('have.text', 'Seus dados')
    cy.get('form input[placeholder="Nome"]')
      .type(dadosLogin.nameUser)
      .should('have.value', dadosLogin.nameUser)
    cy.get('form input[placeholder="E-mail"]')
      .type(dadosLogin.emailUser)
      .should('have.value', dadosLogin.emailUser)
    cy.get('form input[placeholder="Whatsapp"]')
      .type(dadosLogin.whatsUser)
      .should('have.value', `(${dadosLogin.whatsUser.substring(0,2)}) ${dadosLogin.whatsUser.substring(2,7)}-${dadosLogin.whatsUser.substring(7,11)}`)
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