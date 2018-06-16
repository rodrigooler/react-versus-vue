import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";

const VUE =
  "https://api.github.com/repos/vuejs/vue";
const REACT = "https://api.github.com/repos/facebook/react";

injectGlobal`
  body {	
    margin: 0;	
    padding: 0;	
    font-family: sans-serif;	
  }
`;

const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  padding: 8px;
  margin: 0;
  color: white;
  background-color: black;
  border: 0;
  border-radius: 4px;
  appearance: none;
  &:hover {
    background-color: black;
  }
`;

class App extends Component {
  state = {
    reactStargazersCount: 0,
    vueStargazersCount: 0
  };

  getGithubStars = async () => {
    // Vue
    const responseVue = await fetch(VUE);
    const resultVue = await responseVue.json();

    // React
    const responseReact = await fetch(REACT);
    const resultReact = await responseReact.json();

    this.setState({
      reactStargazersCount: resultReact.stargazers_count,
      vueStargazersCount: resultVue.stargazers_count
    }) 
  };

  render() {
    const {reactStargazersCount, vueStargazersCount} = this.state;

    return (
      <div>
        <p>REACT: {reactStargazersCount}</p>
        <p>VUE: {vueStargazersCount}</p>
        <Button onClick={this.getGithubStars}>CLICK HERE!</Button>
      </div>
    );
  }
}

export default App;
