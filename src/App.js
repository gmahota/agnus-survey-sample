import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "survey-react/survey.css";
import * as Survey from "survey-react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent = (result) => {
    this.setState({
      isComplete: true,
      data:JSON.stringify(result.data, null, 3)
    });
  };
  render() {
    var json = {
      title: "Inquerito do Atendimento 😃",
      description: "Porfavor preencha os dados do inquerito com dados reais",
      logo: "https://mahotaservicos.com/videodownload/logo.png",
      logoWidth: 100,
      logoHeight: 100,
      completedHtml:
        "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
      completedHtmlOnCondition: [
        {
          expression: "{nps_score} > 8",
          html:
            "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>",
        },
        {
          expression: "{nps_score} < 7",
          html:
            "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>",
        },
      ],
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "text",
              name: "nome",
              
              title: "Preencha no nome:",
              placeHolder: "Jon Snow",
              isRequired: false,
            },
            {
              type: "rating",
              name: "atendimento_score",
              title: "Como foi o atendimento?",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Insatisfeito)",
              maxRateDescription: "(Muito Satisfeito)",
            },
            {
              type: "checkbox",
              name: "pontos_chamaramatencao",
              visibleIf: "{nps_score} >= 9",
              title: "Quais são os pontos que mais chamaram atenção?",
              isRequired: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please select two features maximum.",
                  maxCount: 2,
                },
              ],
              hasOther: true,
              choices: [
                "Cortezia",
                "Compresão das suas necessidades",
                "Prontidão do serviço",
                "Rapidez na resolução",
              ],
              otherText: "Outro:",
              colCount: 2,
            },
            {
              type: "comment",
              name: "atendimento_medio_motivo",
              visibleIf: "{nps_score} > 6  and {nps_score} < 9",
              title: "O que o motiva a fazer a escolha dessa pontuação?",
            },
            {
              type: "comment",
              name: "atendimento_baixo_motivo",
              visibleIf: "{nps_score} notempty",
              title: "Quais são os pontos negativos?",
            },
          ],
        },
        {
          name: "page2",
          questions: [
            {
              type: "rating",
              name: "tempo_espera",
              startWithNewLine: false,
              title: "Tempo de Espera?",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Insatisfeito)",
              maxRateDescription: "(Muito Satisfeito)",
            },
            {
              type: "rating",
              name: "cortezia",
              startWithNewLine: false,
              title: "Grau de Satisfação Cortezia da Casa?",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Insatisfeito)",
              maxRateDescription: "(Muito Satisfeito)",
            },
            {
              type: "rating",
              name: "atendimento",
              startWithNewLine: false,
              title: "Grau de Satisfação Eficacia no Atendimento?",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Insatisfeito)",
              maxRateDescription: "(Muito Satisfeito)",
            },
            {
              type: "rating",
              name: "capacidade",
              startWithNewLine: false,
              title: "Capacidade do pessoal?",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Insatisfeito)",
              maxRateDescription: "(Muito Satisfeito)",
            },
          ],
        },
        {
          questions: [
            {
              type: "matrix",
              name: "preco_banco",
              title:
                "Grau satisfação em relação ao:",
              columns: [
                {
                  value: 1,
                  text: "Insatisfeito",
                },
                {
                  value: 2,
                  text: "Não Concordo",
                },
                {
                  value: 3,
                  text: "Neutro",
                },
                {
                  value: 4,
                  text: "Concordo",
                },
                {
                  value: 5,
                  text: "Satisfeito",
                },
              ],
              rows: [
                {
                  value: "preco",
                  text: "Preço estabelecido pelo banco",
                },
                {
                  value: "formas_pagamento",
                  text: "Formas de Pagamento",
                },
                {
                  value: "capacidade_pessoal",
                  text: "Capacidade do Pessoal",
                },
                {
                  value: "capacidade_adaptacao",
                  text: "Capacidade de Adaptação",
                },
              ],
            },
            {
              type: "rating",
              name: "estacionamento",
              title: "Grau de satisfação em relação ao estaciomamento",
              isRequired: false,
              mininumRateDescription: "Not Satisfied",
              maximumRateDescription: "Completely satisfied",
            },
            {
              type: "rating",
              name: "recommend friends",
              visibleIf: "{satisfaction} > 3",
              title:
                "How likely are you to recommend the Product to a friend or co-worker?",
              mininumRateDescription: "Will not recommend",
              maximumRateDescription: "I will recommend",
            },
            {
              type: "comment",
              name: "suggestions",
              title: "What would make you more satisfied with the Product?",
            },
          ],
        },
        {
          questions: [
            {
              type: "radiogroup",
              name: "personalizacao",
              title: "Grau Satisfacao Personalização",
              choices: [
                "Insatisfeito",
                "Satisfeito",
                "Muito Satisfeito"
              ],
            }
          ],
        },
        {
          questions: [
            {
              type: "text",
              name: "email",
              title:
                "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button.",
            },
          ],
        },
      ],
      showQuestionNumbers: "off",
    };
    Survey.StylesManager.applyTheme("boostrap");
    var survey = new Survey.Model(json);

    var surveyRender = !this.state.isComplete ? (
      <Survey.Survey
        json={json}
        model={survey}
        onComplete={this.onCompleteComponent}
      />
    ) : null;

    var onSurveyCompletion = this.state.isComplete ? (
      <div>
        
        <p>Muito obrigado por preencher este inquerito. :) 
          Dados a serem enviados a base de dados
        </p>
        <div>
          <p>{this.state.data}</p>
        </div>
      </div>
    ) : null;
    return (
      <div className="App">
        <div>
          {surveyRender}
          {onSurveyCompletion}
        </div>
      </div>
    );
  }
}

export default App;
