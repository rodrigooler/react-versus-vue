import React, { Component } from "react";
import styled from "styled-components";

const URL =
  "https://api.github.com/search/repositories?q=more+react+facebook+vue";

const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  padding: 8px;
  margin: 0;
  color: white;
  background-color: white-blue;
  border: 0;
  border-radius: 4px;
  appearance: none;
  &:hover {
    background-color: black;
  }
`;

class App extends Component {
  state = {
    react: 0,
    vue: 0
  };

  getGithubStars = async () => {
    const response = await fetch(URL);
    const result = await response.json();

    console.log(result);
  };

  render() {
    return (
      <div>
        <Button onClick={this.getGithubStars} />
      </div>
    );
  }
}

export default App;
