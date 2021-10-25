import { createGlobalStyle} from "styled-components";

const GlobalStyled = createGlobalStyle`
  :root{
    --border-color:#2db3db;
    --primary-color:#4b4e50;
    --secondary-color:#6c757d;
    --background-dark-color:#232324;
    --background-light-color:#F1F1F1;
    --white-color:#FFF;
    --font-light-color:#2db3db;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --Sidebar-dark-color:#27292c;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    list-style:none;
    text-decoration: none;
    font-family: "Urbanist", sans-serif;
    font-size: 1.2rem;
  }

  body{
    background-color: var(--background-dark-color);
    color:var(--font-light-color);
  }

  a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
  }

  h1{
    color: white;
    font-size: 4rem;
    span{
      font-size: 4rem;
      color: var(--font-light-color);
    }
  }

  p{
    color: white;
  }

  
    .menu{
      position: absolute;
      right: 5%;
      top:0;
      z-index:4;
      
      svg{
        font-size: 40px;
        color: white;
      }  
  }

  .nav-toggle{
      transform:translateX(0);
      z-index:1;
      -webkit-box-shadow: 17px 3px 22px -6px rgba(0,0,0,0.8); 
      box-shadow: 17px 3px 22px -6px rgba(0,0,0,0.8);
    }
  
`;

export default GlobalStyled