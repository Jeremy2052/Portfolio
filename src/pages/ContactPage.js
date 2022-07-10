import { Email, LocalPhone, Person } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import mailImg from "../img/mailArt.png";

function ContactPage() {
  return (
    <Container>
      <Contact>
        <img src={mailImg} alt="" />
        <h6>Have any questions?</h6>
        <p>
          <a href="mailto:jeremy93214@hotmail.com">Send a quick email</a>
        </p>
      </Contact>

      <ContactInfo>
        <ContactIcon>
          <Person />
          <div className="icon-container">
            <h1>Name</h1>
            <h3>Jeremy Evans</h3>
          </div>
        </ContactIcon>
        <ContactIcon>
          <LocalPhone />
          <div className="icon-container">
            <h1>Phone</h1>
            <h3>682-208-6837</h3>
          </div>
        </ContactIcon>
        <ContactIcon>
          <Email />
          <div className="icon-container">
            <h1>Email</h1>
            <h3>jeremy93214@hotmail.com</h3>
          </div>
        </ContactIcon>
      </ContactInfo>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  /* height: 100vh; */
  color: white;

  h6 {
    text-align: center;
    width: 400px;
    font-weight: 40;
  }

  p {
    text-align: center;
    margin-top: 20px;
    padding: 10px;
    /* border: 0.5px solid lightgray; */
    width: 400px;
    background-color: #1d1d1d;
  }
`;

const Contact = styled.div`
  flex: 2;
  /* padding: 20px; */
  /* justify-content: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    /* height: 300px; */
  }
  .form {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */

    .form-field {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 100;
        font-size: 30px;
      }

      input {
        /* width: 50%; */
        background-color: transparent;
        border: none;
        border-bottom: 1px solid gray;
        outline: none;
        margin-bottom: 40px;
        color: white;
        font-size: 20px;
        padding: 10px 0;
        font-weight: 200;
      }
    }

    .text-area {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 100;
        font-size: 30px;
      }

      textarea {
        margin: 10px 0;
        background: transparent;
        color: white;
        padding: 10px;
        font-weight: 200;
        font-size: 18px;
      }
    }

    .send {
      /* width: 80%; */
      background-color: transparent;
      outline: none;
      border: 0.5px solid white;
      color: white;
      padding: 10px;
      font-weight: 200;
    }

    .send:hover {
      cursor: pointer;
      background-color: #eeeeee;
      color: #111111;
    }
  }
`;

const ContactInfo = styled.div`
  flex: 2;
  height: 40%;
  width: 400px;
  /* border: 1px solid var(--border-color); */
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  flex-direction: column;
  /* margin-left: 30px; */
`;

const ContactIcon = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  margin: 20px;
  padding: 15px;
  height: 120px;
  /* justify-content: center; */
  background-color: #1d1d1d;
  transition: 1s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: -1px 29px 46px 3px rgba(0, 0, 0, 0.9);
    -webkit-box-shadow: -1px 29px 46px 3px rgba(0, 0, 0, 0.9);
    -moz-box-shadow: -1px 29px 46px 3px rgba(0, 0, 0, 0.9);
  }

  svg {
    margin: 15px;
    font-size: 40px;
    color: #808080;
  }

  .icon-container {
    margin-left: 20px;
    h3 {
      font-size: 16px;
      font-weight: 500;
      color: white;
    }

    h1 {
      font-size: 20px;
      font-weight: 200;
    }
  }
`;

export default ContactPage;
