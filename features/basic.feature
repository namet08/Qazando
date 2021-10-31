Feature: Login
      Eu como usuario
      Gostaria de fazer login
      Para acessar o sistema

        Scenario: Login with sucess
          Given I fill email
          And I fill password
          When I tap on Entrar
          Then I see the salvar button