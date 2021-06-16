const TOP_BAR_SELECTOR = '.header';
const TRYBEWARTS_LOGO_SELECTOR = 'img.trybewarts-header-logo';
const TRYBEWARTS_HEADER_TITLE = 'h1#trybewarts-header-title';
const TRYBEWARTS_LOGIN_FORM_SELECTOR = 'form.trybewarts-login';
const EVALUATION_FORM = 'form#evaluation-form'
const USER_NAME_INPUT_SELECTOR = 'input#input-name';
const USER_LASTNAME_INPUT_SELECTOR = 'input#input-lastname';
const USER_EMAIL_INPUT_SELECTOR = 'input#input-email';
const TRYBEWARTS_LOGO_FORMS_SELECTOR = 'img#trybewarts-forms-logo';
const HOUSE = [
  'Gitnória',
  'Reactpuff',
  'Corvinode',
  'Pytherina',
];
const LABEL_FAMILY_TEXT = 'Qual sua família?';
const LABEL_CONTENT_TEXT = 'Qual conteúdo você está com mais vontade de aprender?';
const LABEL_RATE_TEXT = 'Como você avalia a Trybewarts?';
const LABEL_TEXTAREA = 'Deixe seu comentário:';

const checkPlaceholder = (elements, placeholder) => (
  elements.some((element) => Cypress.$(element).attr('placeholder') === placeholder)
);

const isEqualTo = (elementA, elementB) => {
  return (elementA === elementB);
};

const evaluateOffset = (doc, selector, offsetType) => doc.querySelector(selector).getBoundingClientRect()[`${offsetType}`];

const checkIsRightOf = (elementLeftSelector, elementRightSelector) => {
  cy.document().then((doc) => {
    const elementLeft = {
      left: evaluateOffset(doc, elementLeftSelector, 'left'),
      width: evaluateOffset(doc, elementLeftSelector, 'width'),
    };

    const elementRight = {
      left: evaluateOffset(doc, elementRightSelector, 'left'),
    };

    expect(elementRight.left >= elementLeft.left + elementLeft.width).to.be.true;
  });
};

const checkIsBelowOf = (elementAboveSelector, elementBelowSelector) => {
  cy.document().then((doc) => {
    const elementAbove = {
      top: evaluateOffset(doc, elementAboveSelector, 'top'),
      height: evaluateOffset(doc, elementAboveSelector, 'height'),
    };

    const elementBelow = {
      top: evaluateOffset(doc, elementBelowSelector, 'top'),
      height: evaluateOffset(doc, elementBelowSelector, 'height'),
    };

    expect(elementBelow.top >= elementAbove.top + elementAbove.height).to.be.true;
  });
};

describe('Trybewarts', () => {
  beforeEach(() => {
    cy.visit('./index.html');
  });


  describe('1 - Crie uma barra verde na parte superior da página', () => {
    it('Esta barra deve possuir a classe `header`', () => {
      cy.get(TOP_BAR_SELECTOR).should('exist');
    });

    it('A classe `header` deve determinar que o elemento é um flex container', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'display', 'flex');
    });

    it('A classe header deve possuir a propriedade `background-color: rgb(50, 167, 145)`', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'background-color', 'rgb(50, 167, 145)');
    });
  });

  describe('2 - Adicione o logotipo da Trybewarts com a classe `trybewarts-header-logo` no canto esquerdo da barra superior', () => {
    it('Deve existir um elemento img com a classe `trybewarts-header-logo`', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('exist');
    });

    it('O logotipo deve estar alinhado à esquerda dentro da barra verde', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('be.leftAligned', TOP_BAR_SELECTOR);
    });

    it('O atributo src do logotipo deve apontar para images/trybewarts-header-logo.svg', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('have.attr', 'src').should('equal', 'images/trybewarts-header-logo.svg');
    });
  });

  describe('3 - Acrescente um formulário de autenticação no canto direito da barra superior contendo os inputs de login, de senha e um botão de entrar', () => {
    it('Existe um formulário com a classe trybewarts-login', () => {
      cy.get(TRYBEWARTS_LOGIN_FORM_SELECTOR).should('exist');
    });

    it('O formulário deve estar alinhado à direita dentro da barra verde', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'justify-content', 'space-between');
    });

    it('Existem dois inputs e um botão dentro do formulário', () => {
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} input`).should(($input) => {
        expect($input).to.have.length(2);
      });
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} button`).should('exist');
    });

    it('Os inputs deverão conter placeholders com as palavras "Login" e "Senha", respectivamente', () => {
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} input`).should(($input) => {
        expect($input[0].placeholder).to.match(/Login/);
        expect($input[1].placeholder).to.match(/Senha/);
      });
    });

    it('O formulário deve ser um flex container', () => {
      cy.get(TRYBEWARTS_LOGIN_FORM_SELECTOR).should('have.css', 'display', 'flex');
    });

    it('Ao clicar no botão com login ou senha inválidos, emite um alerta contendo o texto "Login ou senha inválidos."', () => {
      const stub = cy.stub()
      cy.on('window:alert', stub);
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} button`).click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Login ou senha inválidos.')
        })
    });

    it('Ao clicar no botão com login ou senha válidos, emite um alerta contendo o texto "Olá, Tryber!"', () => {
      const stub = cy.stub()
      cy.on('window:alert', stub);
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} input:nth-child(1)`).type('tryber@teste.com');
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} input:nth-child(2)`).type('123456');
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} button`).click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Olá, Tryber!')
        })
    });
  });

  describe("4 - Crie um título com o texto 'Trybewarts' centralizado dentro do 'Header'", () => {
    it('Deve existir um elemento h1 com o id trybewarts-header-title', () => {
      cy.get(TRYBEWARTS_HEADER_TITLE).should('exist');
    });

    it('O elemento deve possuir o texto "Trybewarts"', () => {
      cy.get(TRYBEWARTS_HEADER_TITLE).should('have.text', 'Trybewarts');
    });

    it('O header deve ter exatamente três elementos filhos', () => {
      cy.get(TOP_BAR_SELECTOR).children().should('have.length', 3)
    });

    it('O filho do meio deve ser o título', () => {
      cy.get(TOP_BAR_SELECTOR).children().eq(1).should('match', TRYBEWARTS_HEADER_TITLE);

    });
  });

  describe('5 - Adicione um formulário no corpo da página, posicionado ao lado esquerdo', () => {
    it('Deve existir um formulário com o id `evaluation-form`', () => {
      cy.get(EVALUATION_FORM).should('exist');
    });

    it('O formulário deve estar inserido na tag `main` do HTML', () => {
      cy.get('main').children().eq(0).should('match', EVALUATION_FORM);
    });

    it('Tanto o formulário quanto o `main` devem ser flex containers', () => {
      cy.get('main').should('have.css', 'display', 'flex');
      cy.get(EVALUATION_FORM).should('have.css', 'display', 'flex');
    });

    it('O formulário deve ter uma largura de 675px', () => {
      cy.get(EVALUATION_FORM).should('have.css', 'width', '675px');
    });
  });

  describe('6 - Crie um id para o formulário do requisito 5', () => {
    it('Esse id deverá se chamar `evaluation-form`', () => {
      cy.get('#evaluation-form').should('exist');
    });

    it('Esse id deverá possuir a propriedade `display: flex`', () => {
      cy.get('#evaluation-form')
        .should('have.css', 'display', 'flex');
    });

    it('Alinhe o eixo principal dessa classe para ser o eixo vertical', () => {
      cy.get('#evaluation-form').should('have.css', 'flex-direction', 'column');
    });
  });

  describe('7 - Adicione a logo da Trybewarts no lado direito da página', () => {
    it('Deve possuir o id trybewarts-forms-logo', () => {
      cy.get(TRYBEWARTS_LOGO_FORMS_SELECTOR).should('exist');
    });

    it('O atributo `src` do logotipo deve apontar para `images/trybewarts-colored.svg`', () => {
      cy.get(TRYBEWARTS_LOGO_FORMS_SELECTOR).should('have.attr', 'src').should('equal', 'images/trybewarts-colored.svg');
    });
  });

  describe("8 - Acrescente no formulário os inputs de 'Nome:', 'Sobrenome:' e 'Email:'", () => {
    it('Inputs de Nome, Sobrenome e Email deverão ser criados', () => {
      cy.get(USER_NAME_INPUT_SELECTOR).should('exist');
      cy.get(USER_LASTNAME_INPUT_SELECTOR).should('exist');
      cy.get(USER_EMAIL_INPUT_SELECTOR).should('exist');
    });

    it('Os inputs deverão conter um placeholder com Nome, Sobrenome e Email em seus respectivos campos', () => {
      cy.get(USER_NAME_INPUT_SELECTOR)
        .should('have.attr', 'placeholder', 'Nome');
      cy.get(USER_LASTNAME_INPUT_SELECTOR)
        .should('have.attr', 'placeholder', 'Sobrenome');
      cy.get(USER_EMAIL_INPUT_SELECTOR)
        .should('have.attr', 'placeholder', 'Email');
    });
  });

  describe("9 - Crie um select 'Casa' contendo quatro options", () => {
    it('Deverá conter a opção `Gitnória`', () => {
      cy.get("#gitnoria-house").should('exist');
    });
    it('Deverá conter a opção `Reactpuff`', () => {
      cy.get("#reactpuff-house").should('exist');
    });
    it('Deverá conter a opção ``Corvinode``', () => {
      cy.get("#corvinode-house").should('exist');
    });
    it('Deverá conter a opção ``Pytherina``', () => {
      cy.get("#pytherina-house").should('exist');
    })
  });

  describe("10 - Alinhe os campos de 'Nome' e 'Sobrenome' para que fiquem em linha", () => {
    it('Os campos de Nome e Sobrenome devem estar lado a lado', () => {
      cy.get(USER_NAME_INPUT_SELECTOR)
      cy.get(USER_LASTNAME_INPUT_SELECTOR)
      checkIsRightOf(USER_NAME_INPUT_SELECTOR, USER_LASTNAME_INPUT_SELECTOR)
    });
  });

  describe("11 - Alinhe os campos de 'Email' e 'Casa' para que fiquem em linha", () => {
    it('Os campos de Email e Casa devem estar lado a lado', () => {
      checkIsRightOf('#input-email', '#house');
    });
  });

  describe("12 - Crie um campo de entrada para qual família a pessoa estudante se identifica", () => {
    it('Um elemento com o id "label-family" e o texto "Qual sua família?" deverá ser criado', () => {
      cy.get('#label-family').contains(LABEL_FAMILY_TEXT);
    });

    it('O campo deve ser formado por três radio buttons com os valores "Frontend", "Backend" e "FullStack" - Frontend', () => {
      cy.get('input[value="Frontend"]').should('exist');
    });
    it('O campo deve ser formado por três radio buttons com os valores "Frontend", "Backend" e "FullStack" - Backend', () => {
      cy.get('input[value="Backend"]').should('exist');
    });
    it('O campo deve ser formado por três radio buttons com os valores "Frontend", "Backend" e "FullStack" - FullStack', () => {
      cy.get('input[value="FullStack"]').should('exist');
    });

    it('Os radio buttons devem ter o atributo name com o valor "family"', () => {
      cy.get('input[name="family"]').then((arr) => expect(arr.length).to.equal(3));
    });

    it('Posicione os radio buttons para ficar abaixo um do outro', () => {
      checkIsBelowOf('input[value="Frontend"]', 'input[value="Backend"]');
      checkIsBelowOf('input[value="Backend"]', 'input[value="FullStack"]');
    });

    it('Posicione os radio buttons abaixo do label', () => {
      checkIsBelowOf('#label-family', 'input[value="Frontend"]');
    });
  });

  describe("13 - Crie campos de entrada do tipo 'checkbox' contendo seis opções", () => {

    it('Um elemento com o id "label-content" e o texto "Qual conteúdo você está com mais vontade de aprender?" deverá ser criado', () => {
      cy.get('#label-content').contains(LABEL_CONTENT_TEXT);
    });

    it('Campo HoFs', () => {
      cy.get('input[value="HoFs"]').should('exist');
    });

    it('Campo Jest', () => {
      cy.get('input[value="Jest"]').should('exist');
    });

    it('Campo Promises', () => {
      cy.get('input[value="Promises"]').should('exist');
    });

    it('Campo React', () => {
      cy.get('input[value="React"]').should('exist');
    });

    it('Campo SQL', () => {
      cy.get('input[value="SQL"]').should('exist');
    });

    it('Campo Python', () => {
      cy.get('input[value="Python"]').should('exist');
    });

    it('Posicione os checkbox abaixo do label', () => {
      checkIsBelowOf('#label-content', 'input[value="HoFs"]');
    });
  });

  describe("14 - Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts", () => {
    it('Um elemento com o id label-rate e o texto "Como você avalia a Trybewarts?" deverá ser criado', () => {
      cy.get('#label-rate').contains(LABEL_RATE_TEXT);
    });

    it('O campo deve ser formado por dez radio buttons, contendo as opções de 1 a 10', () => {
      cy.get('input[name="rate"]')
      .its('length')
      .should('be.gt', 9);
    });

    it('Posicione os radio buttons à direita do label', () => {
      checkIsRightOf('#label-rate', 'input[value="1"]');
    });
  });

  describe("15 - Crie uma textarea com o id 'textarea' e uma label com a classe 'textarea' contendo o número máximo de caracteres igual à 500", () => {
    it('Uma label com a classe textarea e o texto "Deixe seu comentário:" deverá ser criado" ', () => {
      cy.get('.textarea').contains(LABEL_TEXTAREA);
    });

    it('O campo textarea deverá ter o máximo de 500 caracteres', () => {
      cy.get('textarea').type('text'.repeat(200));
      cy.get('textarea').invoke('val').should((value) => {
        expect(value).to.match(/^[a-z]{500}$/)
      });
    });
  });


  describe("16 - Crie um campo de entrada do tipo 'checkbox' com o id 'agreement' para validar as informações", () => {
    it('Uma label com o id "label-infos" deve possuir o texto "Você concorda com o uso das informações acima?"', () => {
      cy.get("label#label-infos")
        .should('exist')
        .contains('Você concorda com o uso das informações acima?');
    });

    it('Um input do tipo checkbox deve existir e deve possuir o id "agreement"', () => {
      cy.get('input#agreement[type="checkbox"]')
        .should('exist');
    });
  });

  describe('17 - Crie um botão de Enviar para submeter o formulário', () => {
    it('Deve existir um botão com o id "submit-btn" e o texto "Enviar"', () => {
      cy.get('button#submit-btn[type="submit"]')
        .should('exist')
        .should('have.text', 'Enviar');
    });
  });

  describe("18 - Faça com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada", () => {
    it('O botão deve inicialmente estar desabilitado', () => {
      cy.get('button#submit-btn')
        .should('be.disabled');
    });

    it('Ao marcar o campo de confirmação, o botão de Enviar deve ser habilitado', () => {
      cy.get('input#agreement')
        .check();
      cy.get('button#submit-btn')
        .should('not.be.disabled');
    });
  });

  describe('19 - Crie um rodapé no final da página', () => {
    it('O rodapé deve conter o texto "Direitos reservados à Trybewarts©"', () => {
      cy.get('footer')
        .should('exist')
        .contains('Direitos reservados à Trybewarts©')
    });
  });

  describe("20 - Crie um contador com o ID 'counter' contendo o número de caracteres disponíveis no textarea, variando de 500 até 0, que deverá ser atualizado a medida que algo for digitado na textarea", () => {
    it('Deve existir um contador com o ID "counter"', () => {
      cy.get('#counter').should('exist');
    });

    it('O contador de caracteres deve ser atualizado conforme o conteúdo do textarea muda.', () => {
      cy.get("#counter").contains('500');
      cy.get("#textarea").type('Salve salve família');
      cy.get("#counter").contains('481');
      cy.get('#textarea').clear();
      cy.get("#counter").should('contain', '500');
      cy.get('#textarea').type('Salve salve');
      cy.get("#counter").should('contain', '489');
    });
  });

  describe("21 - Faça com que ao clicar no botão 'Enviar', o conteúdo do formulário seja substituído pelas informações preenchidas", () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'johndoe@trybe.com';
    const house = 'Reactpuff';
    const family = 'Backend';
    const rate = '10';
    const observation = 'Maaaaravilhoso';

    function fillForm() {
      cy.visit('./index.html');
      cy.get('#input-name').then(($tag) => {
        cy.wrap($tag).type(firstName);
      });
      cy.get('#input-lastname').then(($tag) => {
        cy.wrap($tag).type(lastName);
      });
      cy.get('#input-email').then(($tag) => {
        cy.wrap($tag).type(email);
      });
      cy.get('#house').then(($tag) => {
        cy.wrap($tag).select(house);
      });
      cy.get('input[name="family"]').then(($tag) => {
        cy.wrap($tag).check(family);
      });
      cy.get('.subject').then(($tag) => {
        cy.wrap($tag).check('React');
      });
      cy.get('.subject').then(($tag) => {
        cy.wrap($tag).check('Jest');
      });
      cy.get('.subject').then(($tag) => {
        cy.wrap($tag).check('SQL');
      });
      cy.get('input[name="rate"]').then(($tag) => {
        cy.wrap($tag).check(rate);
      });
      cy.get('#textarea').then(($tag) => {
        cy.wrap($tag).type(observation);
      });
    }

    beforeEach(() => {
      fillForm();
      cy.get('input#agreement').check();
      cy.get('button#submit-btn').then(($btn) => {
        $btn.click();
      });
    });

    it('Deve haver um texto no modelo "Nome: John Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)', () => {
      cy.get('#evaluation-form')
        .contains(`Nome: ${firstName} ${lastName}`);
    });

    it('Deve haver um texto no modelo "Email: alguem@email.com"', () => {
      cy.get('#evaluation-form')
        .contains(`Email: ${email}`);
    });

    it('Deve haver um texto no modelo "Casa: -Casa marcada-"', () => {
      cy.get('#evaluation-form')
        .contains(`Casa: ${house}`);
    });

    it('Deve haver um texto no modelo "Família: -Família marcada-"', () => {
      cy.get('#evaluation-form')
        .contains(`Família: ${family}`);
    });

    it('Deve haver um texto no modelo "Matérias: -Matérias marcadas-"', () => {
      cy.get('#evaluation-form')
        .contains('Matérias: Jest, React, SQL');
    });

    it('Deve haver um texto no modelo "Avaliação: -Nota marcada-"', () => {
      cy.get('#evaluation-form')
        .contains(`Avaliação: ${rate}`);
    });

    it('Deve haver um texto no modelo "Observações: -Texto preenchido-"', () => {
      cy.get('#evaluation-form')
        .contains(`Observações: ${observation}`);
    });
  });
});
