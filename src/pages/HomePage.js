import React from "react";
import styled from "styled-components";
import crypto from "../img/Crypto.png";
import netflix from "../img/netflix-clone.png";
import amazon from "../img/amazonclone1.PNG";
import chatJS from "../img/chatJS.PNG";
import socialMedia from "../img/Social-Media.png";
import shopNgo from "../img/shopNgo.PNG";

function HomePage() {
  return (
    <HomePageStyled>
      <img className="crypto" src={crypto} alt="" />
      <img className="netflix" src={netflix} alt="" />
      <img className="shopNgo" src={shopNgo} alt="" />
      <img className="chatJS" src={chatJS} alt="" />
      <img className="amazon" src={amazon} alt="" />
      <img className="socialMedia" src={socialMedia} alt="" />

      <div className="typography">
        <div className="name">
          <h4>Hello, I'm </h4>
          <span>Jeremy Evans</span>
        </div>
        <p>
          I am a developer with goals and the will to progress. I enjoy learning and progressing with the framework and languages I use to become a more skillful developer especially when there are challenges. I managed my free time to take online courses and tutorials to learn and improve on what I
          enjoy doing. I also enjoy working aside others in teams and am not afraid to ask questions or help if needed in order to solve problems and progress.{" "}
        </p>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .p-particles-js {
    position: absolute;
    /* top: 0;
    left: 0; */
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 10%;
    /* transition: ease 1s; */
    /* transform: translate(-50%, -50%); */
    text-align: center;
    /* z-index: 999; */
    width: 80%;

    .name {
      display: flex;
      justify-content: center;
    }

    h1 {
      font-weight: 200;
    }
    h4 {
      color: white;
      font-size: 40px;
    }

    p {
      color: #fdfdfd;
      font-size: 20px;
    }

    span {
      font-weight: 700;
      font-size: 80px;
    }
  }
  img {
    height: 500px;
    width: 300px;
    object-fit: cover;
    position: absolute;
    -webkit-box-shadow: 0px 0px 17px 7px #000000;
    box-shadow: 0px 0px 17px 7px #000000;
  }
  .shopNgo {
    top: 10%;
    left: 70%;
  }

  .socialMedia {
    top: 70%;
    left: 70%;
  }
  .netflix {
    top: 5%;
    left: 38%;
  }
  .chatJS {
    top: 70%;
    left: 5%;
  }
  .crypto {
    top: 10%;
    left: 5%;
  }
  .amazon {
    top: 70%;
    left: 38%;
  }

  @media only screen and (max-width: 800px) {
    .chatJS,
    .amazon,
    .socialMedia {
      display: none;
    }
  }

  @media only screen and (max-width: 980px) {
    .chatJS,
    .amazon,
    .socialMedia {
      top: 80%;
    }
  }
`;

export default HomePage;
