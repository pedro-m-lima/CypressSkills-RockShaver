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
    cy.get('form input[name="full-name"]')
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
      .should('have.text', `Olá, ${dadosLogin.nameUser.split(' ')[0]}`)
    cy.get('.user-email')
    .should('be.visible')
    .should('have.text', dadosLogin.emailUser)
  })

  it('campos obrigatórios', ()=>{
    cy.get('header nav div a[href="pre-cadastro"]')
      .click()
      cy.contains('form div button', 'Continuar')
      .click()


      //Utilizando recursos do cypress para chegar em um elemento especifico (Simulando Xpath)
      //Nesse trecho vemos um codigo onde encontra um texto especifico dentro do alert, porem esse alert contem mais texto, não sendo um xpath 100% confiavel
      //cy.get('.alert-msg')
      //  .should('be.visible')
      //  .and('include.text', 'O campo nome é obrigatório')
      //utilizando o xpath padrão para encontrar o elemento alert especifico
      ////label[text()="Nome Completo"]/..//div[contains(@class, "alert-msg")]
      //No xpath acima, buscamos a label cnome completo e em seguida passamos .. para entrar o pai dela
      //Em seguida utilizamos o // para encontrar dentro do pai, o filho div que contem a classe alert
      //No cypress ficaria assim
      cy.contains('label',"Nome Completo") //Encontra a label nome
        .parent() //encontra o elemento pai
        .find('.alert-msg') //Apenas dentro do elemento pai, passo o find buscando a classe alert
        .should('be.visible') //Verifica se o alerta esta visivel
        .and('have.text', 'O campo nome é obrigatório.') //Valida o texto que é exibido em alert
    
        cy.contains('label',"E-mail")
        .parent() 
        .find('.alert-msg')
        .should('be.visible') 
        .and('have.text', 'O campo e-mail é obrigatório.') 
  })

  it('Não deve fazer pre cadastro apenas com o primeiro nome', () => {
    
    //arrange
    const dadosLogin = {
      nameUser: 'Pedro',
      emailUser: 'pedro@skills.com.br',
    }
    
    //Act
    cy.get('header nav div a[href="pre-cadastro"]')
      .click()   

    cy.get('form h2')
      .should('be.visible')
      .should('have.text', 'Seus dados')
    cy.get('form input[name="full-name"]')
      .type(dadosLogin.nameUser)
      .should('have.value', dadosLogin.nameUser)
    cy.get('form input[name="email"]')
      .type(dadosLogin.emailUser)
      .should('have.value', dadosLogin.emailUser)
    cy.contains('form div button', 'Continuar')
      .click()
    cy.wait(100)

    //Assert
    cy.contains('label',"Nome Completo")
        .parent() 
        .find('.alert-msg')
        .should('be.visible') 
        .and('have.text', 'Informe seu nome completo.') 
  })

  it('Não deve fazer pre cadastro com email fora do padrão', () => {
    
    //arrange
    const dadosLogin = {
      nameUser: 'Pedro Lima',
      emailUser: 'pedroskills.com.br',
    }
    
    //Act
    cy.get('header nav div a[href="pre-cadastro"]')
      .click()   

    cy.get('form h2')
      .should('be.visible')
      .should('have.text', 'Seus dados')
    cy.get('form input[name="full-name"]')
      .type(dadosLogin.nameUser)
      .should('have.value', dadosLogin.nameUser)
    cy.get('form input[name="email"]')
      .type(dadosLogin.emailUser)
      .should('have.value', dadosLogin.emailUser)
    cy.contains('form div button', 'Continuar')
      .click()
    cy.wait(100)

    //Assert
    cy.contains('label',"E-mail")
        .parent() 
        .find('.alert-msg')
        .should('be.visible') 
        .and('have.text', 'O e-mail inserido é inválido.') 
  })

})