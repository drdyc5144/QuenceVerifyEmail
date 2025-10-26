import React from "react";
import styled from "styled-components";
import { PlanCards } from "./PlanCard";

const KeyFeatures = () => {
  return (
    <PlandBody>
      <PlanWraper>
        <HeaderText>
          <h1>What's Included in Every Plan</h1>
          <p>
            All plans include essential features to manage your queue
            effectively
          </p>
        </HeaderText>
        <PlanHolder>
          {PlanCards?.map((item) => (
            <div className="cards" key={item.id}>
              <div className="Icon_holder">{item?.Icon}</div>
              <div className="Text_holder">
                <h3>{item?.title}</h3>
                <p>{item?.details}</p>
              </div>
            </div>
          ))}
        </PlanHolder>
      </PlanWraper>
    </PlandBody>
  );
};

export default KeyFeatures;

const PlandBody = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 30px 0;
  }
`;

const PlanWraper = styled.div`
  width: 93%;
  height: auto;
  background-color: #f4f4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
  flex-direction: column;
  gap: 43px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 30px 20px;
    gap: 35px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 25px 15px;
    gap: 30px;
  }
`;

const HeaderText = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 39px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #4a5565;

    @media (max-width: 768px) {
      font-size: 15px;
      text-align: center;
      padding: 0 20px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 0 15px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    gap: 12px;
  }
`;

const PlanHolder = styled.div`
  width: 100%;
  max-width: 967px;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;

  h1 {
    font-weight: 600;
    font-size: 45px;
    color: #222222;
    line-height: 200%;

    span {
      color: #303bff;
    }

    @media (max-width: 768px) {
      font-size: 38px;
      text-align: center;
      line-height: 180%;
    }

    @media (max-width: 480px) {
      font-size: 32px;
      line-height: 160%;
    }
  }

  .cards {
    width: 384px;
    min-height: 262px;
    background-color: #ffffff;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 31.99px;
    padding-top: 31.99px;
    padding-bottom: 31.99px;
    border: 1.25px solid #e5e7eb;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    gap: 20px;

    .Icon_holder {
      width: 47.99px;
      height: 43.98px;
      border-radius: 14px;
      background-color: #303bff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 23px;
      color: #ffffff;

      @media (max-width: 768px) {
        width: 45px;
        height: 45px;
        font-size: 21px;
      }

      @media (max-width: 480px) {
        width: 42px;
        height: 42px;
        font-size: 20px;
      }
    }

    .Text_holder {
      display: flex;
      flex-direction: column;
      width: 317.52px;
      gap: 10px;

      h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 300%;
        color: #101828;

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 250%;
        }

        @media (max-width: 480px) {
          font-size: 17px;
          line-height: 220%;
        }
      }

      p {
        width: 250px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        @media (max-width: 768px) {
          width: 100%;
          font-size: 15px;
          line-height: 22px;
        }

        @media (max-width: 480px) {
          font-size: 14px;
          line-height: 20px;
        }
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 400px;
      min-height: 240px;
      padding: 25px;
      gap: 18px;
    }

    @media (max-width: 480px) {
      width: 100%;
      min-height: 220px;
      padding: 20px;
      gap: 15px;
      border-radius: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 5px;
  }
`;
