import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "survey-react/survey.css";
import * as Survey from "survey-react";

import fmxjson from  "./template/fmx-survey.json"
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
    var json = fmxjson;
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
