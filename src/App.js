import React, { useState } from 'react'
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';
// import MenuIcon from '@mui/icons-material/Menu';
import {Menu } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function App() {

  const [toggle,setToggle] = useState(false)

  return (
    <div className='app'>
      <Sidebar navToggle={toggle} setNav={setToggle}/>

      <div className="menu">
        <IconButton onClick={()=> setToggle(!toggle)}>
         <Menu />
        </IconButton>
      </div>

      <MainContentStyled>

        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          {/* <Route exact path='/about'>
            <AboutPage/>
          </Route> */}
          <Route exact path='/resume'>
            <ResumePage/>
          </Route>
          <Route exact path='/projects'>
            <ProjectPage/>
          </Route>
          <Route exact path='/contact'>
            <ContactPage/>
          </Route>
        </Switch>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  /* background-color: lightgray; */
  @media screen and (max-width:1200px){
    margin-left: 0px;
  }

  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;


    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }

  }
`;

export default App;
