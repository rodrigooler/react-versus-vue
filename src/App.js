import React, { Component } from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Title from "./components/Title";
import Column from "./components/Column";

import {getRepositoryData} from './utils';

const VUE = "vuejs/vue";
const REACT = "facebook/react";

const initialState = {
  stars: 0,
  forks: 0,
  watchers: 0, 
}

class App extends Component {
  state = {
    react: initialState,
    vue: initialState,
    updatedDate: new Date()
  };

  componentDidMount() {
    this.getStars();

    setInterval(() => this.getStars(), 3000);
  }

  getStars = async () => {
    const react = await getRepositoryData(REACT);
    const vue = await getRepositoryData(VUE);

    this.setState({
      react,
      vue,
      updatedDate: new Date()
    });
  };

  render() {
    const {
      react,
      vue,
      updatedDate
    } = this.state;

    return (
      <Wrapper>
        <Column>
          <Row>
            <Column>
              <Title>React vs Vue 2018</Title>
              <Title>Update: {format(updatedDate, "YYYY-MM-DD hh:mm:ss")}</Title>
            </Column>
          </Row>
          <Row> 
            <Card title={REACT} data={react} />
            <Card title={VUE} data={vue} />
          </Row>
        </Column>
      </Wrapper>
    );
  }
}

export default App;
