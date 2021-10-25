import React from 'react'
import styled from 'styled-components';
import Particle from '../components/Particle';

function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particle/>
      </div>
      <div className="typography">
        <h1>Hello, I'm <span>Jeremy Evans</span></h1>
        <p>
          A developer with goals and the will to learn.
        </p>
      </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js{
    position: absolute;
    /* top: 0;
    left: 0; */
  }

  .typography{
    position: absolute;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%);
    text-align: center;
    width: 80%;

    h1{
      font-weight: 300;
    }
  }

`;

export default HomePage
