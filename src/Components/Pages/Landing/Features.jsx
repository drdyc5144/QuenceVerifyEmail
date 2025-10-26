import React from "react";
import styled from "styled-components";
import { CardsDisplay } from "./FeaturesCards";

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesWrapper>
        <div className="main">
          <h4>Key Features Of Our Queue System</h4>
          <p>
            Explore the powerful features of KwikQ Queue Management system
            designed to streamline operations, improve service speed, and
            enhance customer satisfaction
          </p>
        </div>

        <CardHolder>
          {CardsDisplay?.map((item) => (
            <div className="Cards" key={item?.id}>
              <div
                className="icon"
                style={{ background: item.backgroundcolor }}
              >
                {item.icons}
              </div>
              <div className="text">
                <h3>{item?.Title}</h3>
                <p>{item?.Description}</p>
              </div>
            </div>
          ))}
        </CardHolder>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;

const FeaturesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaedff;

  @media (max-width: 768px) {
    height: auto;
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 20px 0;
  }
`;

const FeaturesWrapper = styled.div`
  width: 90%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .main {
    width: 843px;
    height: 154px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;

    h4 {
      font-weight: 700;
      font-size: 45px;
      color: #222222;
    }

    p {
      font-size: 20px;
      font-weight: 500;
      width: 80%;
      line-height: 140%;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    gap: 30px;

    .main {
      width: 100%;
      height: auto;
      gap: 15px;

      h4 {
        font-size: 36px;
      }

      p {
        font-size: 16px;
        width: 90%;
        line-height: 130%;
      }
    }
  }

  @media (max-width: 480px) {
    height: auto;
    gap: 20px;

    .main {
      width: 100%;
      height: auto;
      gap: 10px;

      h4 {
        font-size: 28px;
      }

      p {
        font-size: 14px;
        width: 95%;
        line-height: 120%;
      }
    }
  }
`;
const CardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: nowrap;
  padding: 40px 0;
  background-color: #eef1ff;

  .Cards {
    width: 260px;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px 20px;
    border-radius: 21.67px;
    gap: 25px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    .icon {
      width: 50px;
      height: 50px;
      border-radius: 14.45px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      color: white;
      background-color: #009688;
      margin-bottom: 10px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;

      h3 {
        font-weight: 600;
        font-size: 17px;
        line-height: 130%;
        color: #14196b;
        margin: 0;
      }

      p {
        font-size: 15px;
        font-weight: 400;
        line-height: 150%;
        color: #333;
        /* margin: 0; */
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0;

    .Cards {
      width: calc(50% - 10px);
      height: auto;
      min-height: 300px;
      padding: 20px 15px;

      .icon {
        align-self: flex-start;
      }

      .text {
        gap: 15px;

        h3 {
          font-size: 17px;
          width: 100%;
          text-align: left;
        }

        p {
          font-size: 15px;
          width: 100%;
          text-align: left;
        }
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
    padding: 20px 0;

    .Cards {
      width: 100%;
      max-width: 350px;
      min-height: 250px;
      padding: 20px 15px;

      .icon {
        align-self: flex-start;
      }

      .text {
        gap: 12px;

        h3 {
          font-size: 16px;
          text-align: left;
        }

        p {
          font-size: 14px;
          text-align: left;
          line-height: 140%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    gap: 20px;
    padding: 20px 0;

    .Cards {
      width: calc(50% - 10px);
      height: auto;
      min-height: 300px;
      padding: 20px 15px;

      .icon {
        margin-left: 0;
        align-self: flex-start;
      }

      .text {
        gap: 15px;

        h3 {
          font-size: 17px;
          width: 100%;
          text-align: left;
        }

        p {
          font-size: 15px;
          width: 100%;
          text-align: left;
        }
      }
    }
  }

  @media (max-width: 480px) {
    height: auto;
    gap: 15px;
    padding: 20px 0;
    flex-direction: column;

    .Cards {
      width: 100%;
      max-width: 350px;
      height: auto;
      min-height: 250px;
      padding: 20px 15px;

      .icon {
        margin-left: 0;
        align-self: flex-start;
      }

      .text {
        gap: 12px;

        h3 {
          font-size: 16px;
          width: 100%;
          text-align: left;
        }

        p {
          font-size: 14px;
          width: 100%;
          text-align: left;
          line-height: 140%;
        }
      }
    }
  }
`;
