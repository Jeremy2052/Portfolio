import { GitHub, Web } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import crypto from '../img/Crypto.png';
import netflix from '../img/netflix-clone.png';
import whatsapp from '../img/whatsapp.PNG';
import amazon from '../img/amazonclone1.PNG'

function ProjectPage() {
  return (
    <Container>
      <Projects>
        <Project>
          <Thumbnail>
            <Image src={crypto}/>
          </Thumbnail>
          <Description>
            <Title>Crypto Tracker</Title>
            <Desc>React application fetches a variety of different existing crypto currencies with a crypto API from CoinGecko. 
              A user is able to use the search bar to filter and find certain crypto currencies. 
              The crypo page renders and display certain descriptions of each crypto with its logo, name, symbol, current price, 
              market cap and price descrepancy, shown green 
              for positive and red for negative.
            </Desc>
            <Links>
              <LinkIcon>
                <Web/>
                <a href="https://serene-volhard-10cc9e.netlify.app/" target="_blank" rel="noreferrer">Site Link</a>
              </LinkIcon>
              
              <LinkIcon>
                <GitHub/>
                <a href="https://github.com/Jeremy2052/Crypto_tracker" target="_blank" rel="noreferrer">Github Link</a>
              </LinkIcon>  
            </Links>
            
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={netflix}/>
          </Thumbnail>
          <Description>
            <Title>Netflix Frontend</Title>
            <Desc>A react application to replicate the front-end design of Netflix. 
              The project involves fetching a movie API from TMDB (The Movie Database) with the use
              of axios. Application displays the movies image and sorted by categories.
            </Desc>
            <Links>
              <LinkIcon>
                <Web/>
                <a href="https://serene-volhard-10cc9e.netlify.app/" target="_blank" rel="noreferrer">Site Link</a>
              </LinkIcon>
              
              <LinkIcon>
                <GitHub/>
                <a href="https://github.com/Jeremy2052/netflix-clone/tree/master" target="_blank" rel="noreferrer">Github Link</a>
              </LinkIcon>
              
            </Links>           
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={whatsapp}/>
          </Thumbnail>
          <Description>
            <Title>WhatsApp Clone</Title>
            <Desc>React project that is a frontend clone of the cross platform messenger app WhatsApp.
            Users are able to sign in with a Google account and interact with chat rooms to exchange messages or create a new chat room.
             Project involves using firebase authorization with google authorization. Each user is handled and managed with context API to 
             separate each chat rooms to that specific user. These chat rooms are stored using Firebase's Firestore database.
            </Desc>
            <Links>
              <LinkIcon>
                <Web/>
                <a href="https://whatsapp-clone-68030.web.app/" target="_blank" rel="noreferrer">Site Link</a>
              </LinkIcon>
              
              <LinkIcon>
                <GitHub/>
                <a href="https://github.com/Jeremy2052/whatsapp-clone" target="_blank" rel="noreferrer">Github Link</a>
              </LinkIcon>
              
            </Links>          
          </Description>
        </Project>

        <Project>
          <Thumbnail>
            <Image src={amazon}/>
          </Thumbnail>
          <Description>
            <Title>Amazon Frontend Clone</Title>
            <Desc>A React frontend project to replicate Amazons e-comerce website. Users are able to create an account with an
            email and password which is then handled and managed with Firebase's built in authorization. Users are presented
            with products on the home page and are able to add those products to the cart where the products and prices are displayed. 
            The unique users and basket is handled and managed with Context API.
            </Desc>
            <Links>
              <LinkIcon>
                <Web/>
                <a href="https://clone-95354.web.app/" target="_blank" rel="noreferrer">Site Link</a>
              </LinkIcon>
              
              <LinkIcon>
                <GitHub/>
                <a href="https://github.com/Jeremy2052/Amazon-clone" target="_blank" rel="noreferrer">Github Link</a>
              </LinkIcon>
              
            </Links>          
          </Description>
        </Project>
        
      </Projects>
    </Container>
  )
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
  transition: .4s ease;

  &:hover{
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
  height:100%;
  object-fit:cover
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  a{
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
const Links =styled.div`
  display: flex;
  flex-direction: column;

`;

const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  /* text-align: center; */
  margin-top: 10px;

  &:hover{
      background-color: var(--primary-color);
    }
`;

export default ProjectPage
