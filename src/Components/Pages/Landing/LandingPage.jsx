import React, { useRef } from "react";
import Features from "./Features";
import About from "./About";
import Works from "./Works";
import Clients from "./Clients";
import KeyFeatures from "./KeyFeatures";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import FooterPage from "../Footer/Footer";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const LandingPage = () => {
  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const worksRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    const top = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <LandingContainer ref={homeRef}>
        <HeaderHolder ref={headerRef}>
          <Header>
            <div className="Logo">
              <img
                src="https://res.cloudinary.com/dp75oveuw/image/upload/v1761207428/Group_1_lnfxe0.png"
                alt=""
              />
            </div>
            <div className="Menu">
              <ul>
                <li onClick={() => scrollToRef(homeRef)}>Home</li>
                <li onClick={() => scrollToRef(aboutRef)}>About</li>
                <li onClick={() => scrollToRef(worksRef)}>How it works</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="login">
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </Header>
        </HeaderHolder>
        <ContentWrapper>
          <Text>
            <h1>Smart Queue Management System For Modern Enterprise</h1>
            <p>
              KwikQ helps businesses manage queues effortlessly by allowing
              staff to add and track customers in real time.
            </p>
          </Text>
          <ButtonHolder>
            <button>Get Started</button>
            <button className="Onboard">
              Onboard Your Business <MdKeyboardArrowRight />
            </button>
          </ButtonHolder>
        </ContentWrapper>
        <DesignHolder></DesignHolder>
      </LandingContainer>

      <Features />
      <div ref={worksRef}>
        <Works />
      </div>
      <KeyFeatures />
      <div ref={aboutRef}>
        <About />
      </div>
      <Clients />
      <Faq />
      <GetStarted />
      <FooterPage />
    </>
  );
};

export default LandingPage;

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

  @media (max-width: 768px) {
    padding-top: 90px;
    min-height: 100vh;
    height: auto;
  }

  @media (max-width: 480px) {
    padding-top: 70px;
    min-height: 100vh;
    height: auto;
    justify-content: space-between;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding-top: 40px;
  }
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
    width: 30%;
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
    width: 50%;
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
    width: 17%;
    min-height: 100%;
    display: flex;
    align-items: center;
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
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-weight: 700;
    font-size: 61px;
    line-height: 140%;
    color: #ffffff;
    text-align: center;
    width: 900px;
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    width: 40%;
    text-align: center;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    min-height: 35vh;

    h1 {
      font-size: 48px;
      width: 90%;
    }

    p {
      font-size: 18px;
      width: 60%;
    }
  }

  @media (max-width: 480px) {
    min-height: 30vh;

    h1 {
      font-size: 28px;
      width: 95%;
      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
      width: 90%;
    }
  }
`;

const ButtonHolder = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;

  button {
    width: 247px;
    height: 63px;
    border-radius: 33px;
    border: 1px solid #ffffff;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    line-height: 200%;
    color: #ffffff;
  }

  .Onboard {
    width: 381px;
    height: 62px;
    border-radius: 33px;
    border: 1px solid #ffffff;
    color: #ffffff;
    background-color: #303bff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 73px;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-right: 73px;
    gap: 2px;
  }

  @media (max-width: 768px) {
    min-height: 12vh;
    gap: 20px;

    button {
      width: 220px;
      height: 58px;
      font-size: 18px;
    }

    .Onboard {
      width: 350px;
      height: 58px;
      padding: 10px 60px;
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    min-height: 10vh;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 20px;

    button {
      width: 200px;
      height: 45px;
      font-size: 16px;
    }

    .Onboard {
      width: 200px;
      height: 45px;
      padding: 10px 10px;
      font-size: 14px;
    }
  }
`;

const DesignHolder = styled.div`
  width: 100%;
  min-height: 20vh;
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

// import React from "react";
// import styled from "styled-components";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { GoPeople } from "react-icons/go";
// import {
//   MdOutlineCancel,
//   MdPersonOutline,
//   MdOutlineMailOutline,
//   MdOutlineEventNote,
// } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import { CiCircleAlert } from "react-icons/ci";

// const JoinQuenceM = () => {
//   return (
//     <JoinQuenceBody>
//       <JoinQuenceHolder>
//         <TopHolder>
//           <div className="delete">
//             <MdOutlineCancel style={{ cursor: "pointer" }} />
//           </div>
//           <div className="Icons">
//             <IoMdCheckmarkCircleOutline />
//           </div>
//           <h3>Successfully Added to Queue!</h3>
//           <small>
//             You've been added to the queue. Please keep this ticket number for
//             reference.
//           </small>
//         </TopHolder>

//         <BottomMiddle>
//           <div className="Quence">
//             <p>Your Queue Number</p>
//             <span>T-544</span>
//           </div>

//           <div className="Position">
//             <p>
//               <GoPeople
//                 style={{
//                   marginRight: "6px",
//                   color: "#5EA500",
//                 }}
//               />
//               Queue position
//             </p>
//             <span>#8</span>
//           </div>

//           <div className="infor">
//             <h4>Your information</h4>
//             <p>
//               <MdPersonOutline
//                 style={{
//                   marginRight: "10px",
//                   color: "#009689",
//                 }}
//               />
//               Jacob Henry Chukwudi
//             </p>

//             <p>
//               <IoCallOutline
//                 style={{
//                   marginRight: "10px",
//                   color: "#009689",
//                 }}
//               />
//               09096929156
//             </p>

//             <p>
//               <MdOutlineMailOutline
//                 style={{
//                   marginRight: "10px",
//                   color: "#009689",
//                 }}
//               />
//               Jacobhenry56@gmail.com
//             </p>

//             <p>
//               <MdOutlineEventNote
//                 style={{
//                   marginRight: "10px",
//                   color: "#009689",
//                 }}
//               />
//               Loan Inquiry
//             </p>
//           </div>

//           <div className="notice">
//             <h4>
//               <CiCircleAlert
//                 style={{ color: "#155dfc", marginRight: "10px" }}
//               />
//               Stay Notified
//             </h4>
//             <p>We'll send you SMS updates when your turn is approaching</p>
//           </div>
//         </BottomMiddle>

//         <BottomHolder>
//           <button>Done</button>
//         </BottomHolder>
//       </JoinQuenceHolder>
//     </JoinQuenceBody>
//   );
// };

// export default JoinQuenceM;

// const JoinQuenceBody = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: transparent;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const JoinQuenceHolder = styled.div`
//   width: 35.6%;
//   min-height: max-content;
//   background-color: white;
//   border-radius: 7.35px;
//   border: 0.74px solid #000000;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 8px;
//   padding: 20px 0;

//   @media (max-width: 768px) {
//     width: 80%;
//   }

//   @media (max-width: 360px) {
//     width: 90%;
//     padding: 15px 0;
//     gap: 12px;
//   }
// `;

// const TopHolder = styled.div`
//   width: 457.24px;
//   min-height: 116.68px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 7px;

//   .delete {
//     width: 100%;
//     color: #0a0a0a;
//     display: flex;
//     justify-content: flex-end;
//   }

//   h3 {
//     font-weight: 600;
//     font-size: 16px;
//     line-height: 140%;
//     color: #101828;
//     text-align: center;
//   }

//   small {
//     color: #717182;
//     font-weight: 400;
//     font-size: 13px;
//     text-align: center;
//   }

//   .Icons {
//     width: 47.05px;
//     min-height: 47.05px;
//     border-radius: 50%;
//     background-color: #303bff;
//     color: white;
//     display: flex;
//     font-size: 23px;
//     justify-content: center;
//     align-items: center;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     padding: 0 15px;
//   }

//   @media (max-width: 360px) {
//     width: 100%;
//     padding: 0 10px;
//     h3 {
//       font-size: 14px;
//     }
//     small {
//       font-size: 12px;
//     }
//   }
// `;

// const BottomMiddle = styled.div`
//   width: 457px;
//   height: auto;
//   border-top: 0.74px solid #e5e7eb;
//   display: flex;
//   flex-direction: column;
//   gap: 17.64px;
//   padding-top: 17px;

//   .Quence,
//   .Position,
//   .infor,
//   .notice {
//     width: 100%;
//   }

//   .Quence {
//     border-radius: 11.76px;
//     background-color: #eaf1da;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     gap: 5.88px;
//     padding: 10px 0;
//   }

//   .Position {
//     border-radius: 10.29px;
//     border: 1.47px solid #e5e7eb;
//     background-color: #ffffff;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     gap: 5.88px;
//     padding: 10px 0;
//   }

//   .infor {
//     background-color: #f9fafb;
//     border-radius: 10.29px;
//     display: flex;
//     flex-direction: column;
//     padding: 10px 17.64px;
//     gap: 6px;
//   }

//   .notice {
//     background-color: #eff6ff;
//     border: 0.74px solid #bedbff;
//     border-radius: 10.29px;
//     padding: 12px;
//     gap: 5px;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     padding: 15px;
//   }

//   @media (max-width: 360px) {
//     width: 100%;
//     padding: 10px;
//     gap: 12px;

//     .Quence,
//     .Position,
//     .infor,
//     .notice {
//       padding: 10px;
//     }

//     p,
//     h4,
//     span {
//       font-size: 13px;
//       /* text-align: center; */
//     }
//   }
// `;

// const BottomHolder = styled.div`
//   width: 457.24px;
//   height: auto;
//   display: flex;
//   justify-content: center;
//   padding: 10px;

//   button {
//     background-color: #303bff;
//     border-radius: 5.88px;
//     width: 100%;
//     color: white;
//     border: none;
//     cursor: pointer;
//     padding: 10px;
//     font-size: 15px;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//   }

//   @media (max-width: 360px) {
//     width: 100%;
//     padding: 8px;

//     button {
//       font-size: 14px;
//       padding: 8px;
//     }
//   }
// `;
