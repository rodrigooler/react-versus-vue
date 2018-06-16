import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 350px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  background: #ffffff;
`;

function Card({ title, data }) {
  const { stars, forks, watchers } = data;

  return (
    <Wrapper>
      <p>{title}</p>
      <p>Stars: {stars}</p>
      <p>Forks: {forks}</p>
      <p>Watchers: {watchers}</p>
    </Wrapper>
  );
}

export default Card;
