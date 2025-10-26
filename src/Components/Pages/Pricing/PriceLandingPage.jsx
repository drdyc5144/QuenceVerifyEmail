import React, { useRef } from "react";
import Monthly from "./MonthlyPrice";
import Clients from "./Clients";
import Plans from "./Plan";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import styled from "styled-components";
import Footer from "../Footer/Footer";

const PriceLandingPage = () => {
  return (
    <>
      <LandingContainer>
        <HeaderHolder>
          <Header>
            <div className="Logo">
              <img
                src="https://res.cloudinary.com/dp75oveuw/image/upload/v1761207428/Group_1_lnfxe0.png"
                alt=""
              />
            </div>
            <div className="Menu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>How it works</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="login">
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </Header>
        </HeaderHolder>
        <Text>
          <h1>Enterprise-Ready Plans Built for Every Business Need</h1>
          <h3>
            Whether you're scaling across locations or optimizing a single
            branch, KwikQ offers flexible, cost-effective plans that grow with
            you.
          </h3>
          <button>Start Your Free Trial</button>
          <p>Choose the Perfect Plan for your business</p>
        </Text>
        <DesignHolder></DesignHolder>
      </LandingContainer>
      <Monthly />
      <Clients />
      <Plans />
      <Faq />
      <GetStarted />
      <Footer />
    </>
  );
};

export default PriceLandingPage;

const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  background-image: url(https://i.postimg.cc/ZKgTqRjG/background.png);
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 100px;
  position: relative;
`;

const HeaderHolder = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 1000;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 15px;
  }

  @media (max-width: 480px) {
    top: 10px;
    min-height: 10vh;
  }
`;

const Header = styled.div`
  width: min(1039px, 95%);
  height: 69px;
  border-radius: 60px;
  background: linear-gradient(to right, #303bff, #96f7e4);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  margin-top: 15px;

  .Logo {
    width: 27%;
    height: 70%;
    display: flex;
    align-items: center;

    img {
      width: 35%;
      height: 70%;
      object-fit: cover;
      color: white;
      margin-right: auto;
    }

    @media (max-width: 768px) and (min-width: 481px) {
      width: 25%;

      img {
        width: 50%;
        height: 75%;
        object-fit: contain;
      }
    }
  }

  .Menu {
    width: 47%;
    min-height: 100%;
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      gap: 20px;

      li {
        color: #ffffff;
        line-height: 150%;
        font-weight: 600;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) and (min-width: 481px) {
      width: 55%;

      ul {
        gap: 15px;

        li {
          font-size: 14px;
        }
      }
    }
  }

  .login {
    width: 20%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 18px;

    p {
      font-weight: 600;
      cursor: pointer;
      color: #ffffff;
    }

    button {
      width: 109px;
      height: 34px;
      background-color: #303bff;
      border-radius: 40px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      outline: none;
      color: #ffffff;
      line-height: 150%;
    }
    button:hover {
      background-color: #ffffff;
      color: #303bff;
    }

    @media (max-width: 768px) and (min-width: 481px) {
      width: 20%;
      gap: 15px;

      p {
        font-size: 14px;
      }

      button {
        width: 95px;
        height: 32px;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    height: 62px;
  }

  @media (max-width: 480px) {
    height: 50px;
    justify-content: space-between;
    padding: 0 15px;
    margin-top: 10px;

    .Logo {
      width: 50%;

      img {
        width: 50%;
      }
    }

    .Menu {
      display: none;
    }

    .login {
      width: 50%;
      justify-content: flex-end;
      gap: 12px;

      p {
        font-size: 14px;
      }

      button {
        width: 80px;
        height: 30px;
        font-size: 12px;
      }
    }
  }
`;

const Text = styled.div`
  width: 90%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 27px;
  padding-top: 35px;

  h1 {
    font-weight: 700;
    font-size: 50px;
    line-height: 130%;
    color: #ffffff;
    text-align: center;
    width: 792px;
  }

  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    width: 60%;
    text-align: center;
    color: #ffffff;
  }

  button {
    width: 224.66px;
    height: 41.98px;
    border-radius: 33px;
    border: 1.25px solid #ffffff;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    color: #222222;
  }

  p {
    font-size: 16px;
    color: #ffffff;
    font-weight: 400;
    line-height: 24px;
  }
`;

const DesignHolder = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  background-image: url(https://i.postimg.cc/bJNFLbND/mm-1-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    min-height: 15vh;
  }

  @media (max-width: 480px) {
    min-height: 15vh;
    margin-top: auto;
  }
`;
