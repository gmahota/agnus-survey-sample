import React, { Component } from "react";
import "./App.css";
import "survey-react/survey.css";
import * as Survey from "survey-react";

import bankjson from  "./template/bank-survey.v1.json"
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

    console.log(this.state.data)
  };
  
  render() {
    var json = bankjson;
    Survey.StylesManager.applyTheme("darkblue");
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
        
        <h1>
        Muito Obrigado por participar ,as suas respostas sao muito importantes para nos.
        </h1>
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
