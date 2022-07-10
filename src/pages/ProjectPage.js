import { GitHub, Web } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import crypto from "../img/Crypto.png";
import netflix from "../img/netflix-clone.png";
import whatsapp from "../img/whatsapp.PNG";
import amazon from "../img/amazonclone1.PNG";
import chatJS from "../img/chatJS.PNG";
import socialMedia from "../img/Social-Media.png";
import shopNgo from "../img/shopNgo.PNG";

function ProjectPage() {
  return (
    <Container>
      <Projects>
        <Project>
          <Thumbnail>
            <Image src={shopNgo} />
          </Thumbnail>
          <Description>
            <Title>ShopN Go Ecommerce</Title>
            <Desc>
              MERN application where users can create an account and shop through the products to add to their cart and checkout. Product data is retrieved from MongoDB with Axios. Redux toolkit is used to manage the user and cart state. JWT and Crypto.js is used to assign a unique token and encrypt
              the user's password.
            </Desc>
            <Links>
              <LinkIcon>
                <Web />
                <a href="https://shopn-go.herokuapp.com/" target="_blank" rel="noreferrer">
                  Site Link
                </a>
              </LinkIcon>

              <LinkIcon>
                <GitHub />
                <a href="https://github.com/Jeremy2052/ShopN-Go" target="_blank" rel="noreferrer">
                  Github Link
                </a>
              </LinkIcon>
            </Links>
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={chatJS} />
          </Thumbnail>
          <Description>
            <Title>Project-0</Title>
            <Desc>
              React/Redux application is an all in one application involving a chat messenger, movie list and weather app. The application uses Firebase authentication with google sign in for registration/login. Each chat is stored with Firebase database and handled with Redux by keeping track of
              the users id and fetching all chat rooms associated with it. Both the movie list and weather app fetch an api and displays information for the user.
            </Desc>
            <Links>
              <LinkIcon>
                <Web />
                <a href="https://first--project-22f41.firebaseapp.com/" target="_blank" rel="noreferrer">
                  Site Link
                </a>
              </LinkIcon>

              <LinkIcon>
                <GitHub />
                <a href="https://github.com/Jeremy2052/React_Project/tree/main" target="_blank" rel="noreferrer">
                  Github Link
                </a>
              </LinkIcon>
            </Links>
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={socialMedia} />
          </Thumbnail>
          <Description>
            <Title>Social World Media</Title>
            <Desc>
              A social media MERN application that lets users to register/login with an account with MongoDB along with Bcrypt library for password encryption. Functionalities include making posts, following/unfollowing users and messaging other users in chat. Redux is used to manage what current
              user is signed in to retrieve all related data with that user.
            </Desc>
            <Links>
              <LinkIcon>
                <Web />
                <a href="https://social-world-media.herokuapp.com/" target="_blank" rel="noreferrer">
                  Site Link
                </a>
              </LinkIcon>

              <LinkIcon>
                <GitHub />
                <a href="https://github.com/Jeremy2052/Social-world-media" target="_blank" rel="noreferrer">
                  Github Link
                </a>
              </LinkIcon>
            </Links>
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={crypto} />
          </Thumbnail>
          <Description>
            <Title>Crypto Tracker</Title>
            <Desc>
              React application fetches a variety of different existing crypto currencies with a crypto API from CoinGecko. A user is able to use the search bar to filter and find certain crypto currencies. The crypo page renders and display certain descriptions of each crypto with its logo, name,
              symbol, current price, market cap and price descrepancy, shown green for positive and red for negative.
            </Desc>
            <Links>
              <LinkIcon>
                <Web />
                <a href="https://serene-volhard-10cc9e.netlify.app/" target="_blank" rel="noreferrer">
                  Site Link
                </a>
              </LinkIcon>

              <LinkIcon>
                <GitHub />
                <a href="https://github.com/Jeremy2052/Crypto_tracker" target="_blank" rel="noreferrer">
                  Github Link
                </a>
              </LinkIcon>
            </Links>
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={netflix} />
          </Thumbnail>
          <Description>
            <Title>Netflix Frontend</Title>
            <Desc>A react application to replicate the front-end design of Netflix. The project involves fetching a movie API from TMDB (The Movie Database) with the use of axios. Application displays the movies image and sorted by categories.</Desc>
            <Links>
              <LinkIcon>
                <Web />
                <a href="https://serene-volhard-10cc9e.netlify.app/" target="_blank" rel="noreferrer">
                  Site Link
                </a>
              </LinkIcon>

              <LinkIcon>
                <GitHub />
                <a href="https://github.com/Jeremy2052/netflix-clone/tree/master" target="_blank" rel="noreferrer">
                  Github Link
                </a>
              </LinkIcon>
            </Links>
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={whatsapp} />
          </Thumbnail>
          <Description>
            <Title>WhatsApp Clone</Title>
            <Desc>
              React project that is a frontend clone of the cross platform messenger app WhatsApp. Users are able to sign in with a Google account and interact with chat rooms to exchange messages or create a new chat room. Project involves using firebase authorization with google authorization.
              Each user is handled and managed with context API to separate each chat rooms to that specific user. These chat rooms are stored using Firebase's Firestore database.
            </Desc>
            <Links>
              <LinkIcon>
                <Web />
                <a href="https://whatsapp-clone-68030.web.app/" target="_blank" rel="noreferrer">
                  Site Link
                </a>
              </LinkIcon>

              <LinkIcon>
                <GitHub />
                <a href="https://github.com/Jeremy2052/whatsapp-clone" target="_blank" rel="noreferrer">
                  Github Link
                </a>
              </LinkIcon>
            </Links>
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={amazon} />
          </Thumbnail>
          <Description>
            <Title>Amazon Frontend Clone</Title>
            <Desc>
              A React frontend project to replicate Amazons e-comerce website. Users are able to create an account with an email and password which is then handled and managed with Firebase's built in authorization. Users are presented with products on the home page and are able to add those
              products to the cart where the products and prices are displayed. The unique users and basket is handled and managed with Context API.
            </Desc>
            <Links>
              <LinkIcon>
                <Web />
                <a href="https://clone-95354.web.app/" target="_blank" rel="noreferrer">
                  Site Link
                </a>
              </LinkIcon>

              <LinkIcon>
                <GitHub />
                <a href="https://github.com/Jeremy2052/Amazon-clone" target="_blank" rel="noreferrer">
                  Github Link
                </a>
              </LinkIcon>
            </Links>
          </Description>
        </Project>
      </Projects>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;
const Projects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
  width: 100%;
`;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 400px;
  margin: 20px;
  background-color: #353535;
  transition: 0.4s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: -1px 29px 46px 3px rgba(0, 0, 0, 0.9);
    -webkit-box-shadow: -1px 29px 46px 3px rgba(0, 0, 0, 0.9);
    -moz-box-shadow: -1px 29px 46px 3px rgba(0, 0, 0, 0.9);
  }
`;
const Thumbnail = styled.div`
  width: 100%;
  height: 50%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Description = styled.div`
  display: flex;

  padding: 10px;
  flex-flow: column nowrap;

  a {
    /* margin-top: 10px; */
    margin-left: 10px;
    font-size: 16px;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
`;
const Desc = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  /* text-align: center; */
  margin-top: 10px;

  &:hover {
    background-color: var(--primary-color);
  }
`;

export default ProjectPage;
