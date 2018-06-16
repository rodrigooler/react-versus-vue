import React, { Component } from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Card from "./components/Card";

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-around;
`; 

const Column = styled.div`
  flex-direction: column;
`;

const Title = styled.h1`
  color: #ffffff;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VUE = "https://api.github.com/repos/vuejs/vue";
const REACT = "https://api.github.com/repos/facebook/react";

class App extends Component {
  state = {
    reactStargazersCount: 0,
    vueStargazersCount: 0,
    updatedDate: new Date()
  };

  componentDidMount() {
    this.getStars();

    setInterval(() => this.getStars(), 3000);
  }

  getStars = async () => {
    // Vue
    const responseVue = await fetch(VUE);
    const resultVue = await responseVue.json();

    // React
    const responseReact = await fetch(REACT);
    const resultReact = await responseReact.json();

    this.setState({
      reactStargazersCount: resultReact.stargazers_count,
      vueStargazersCount: resultVue.stargazers_count,
      updatedDate: new Date()
    });
  };

  render() {
    const {
      reactStargazersCount,
      vueStargazersCount,
      updatedDate
    } = this.state;

    return (
      <Wrapper>
        <Column>
        <Row>
        <Title>React vs Vue 2018</Title>
        </Row>
          <Row>
            <Card>
              <p>REACT: {reactStargazersCount}</p>
            </Card>
            <Card>
              <p>VUE: {vueStargazersCount}</p>
            </Card>
          </Row>
        </Column>
      </Wrapper>
    );
  }
}

export default App;
