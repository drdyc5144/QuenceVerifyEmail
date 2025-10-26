import React from "react";
import styled from "styled-components";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import {
  MdOutlineCancel,
  MdPersonOutline,
  MdOutlineMailOutline,
  MdOutlineEventNote,
} from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiCircleAlert } from "react-icons/ci";

const JoinQuence = () => {
  return (
    <JoinQuenceBody>
      <JoinQuenceHolder>
        <TopHolder>
          <div className="delete">
            <MdOutlineCancel style={{ cursor: "pointer" }} />
          </div>
          <div className="Icons">
            <IoMdCheckmarkCircleOutline />
          </div>
          <h3>Successfully Added to Queue!</h3>
          <small>
            You've been added to the queue. Please keep this ticket number for
            reference.
          </small>
        </TopHolder>
        <BottomMiddle>
          <div className="Quence">
            <p>Your Queue Number</p>
            <span>T-544</span>
          </div>

          <div className="Position">
            <p>
              <GoPeople
                style={{
                  marginRight: "6px",
                  color: "#5EA500",
                }}
              />
              Queue position
            </p>
            <span>#8</span>
          </div>

          <div className="infor">
            <h4>Your information</h4>
            <p>
              <MdPersonOutline
                style={{
                  marginRight: "10px",
                  color: "#009689",
                }}
              />
              Jacob Henry Chukwudi
            </p>

            <p>
              <IoCallOutline
                style={{
                  marginRight: "10px",
                  color: "#009689",
                }}
              />
              09096929156
            </p>

            <p>
              <MdOutlineMailOutline
                style={{
                  marginRight: "10px",
                  color: "#009689",
                }}
              />
              Jacobhenry56@gmail.com
            </p>

            <p>
              <MdOutlineEventNote
                style={{
                  marginRight: "10px",
                  color: "#009689",
                }}
              />
              Loan Inquiry
            </p>
          </div>
          <div className="notice">
            <h4>
              <CiCircleAlert
                style={{ color: "#155dfc", marginRight: "10px" }}
              />
              Stay Notifield
            </h4>
            <p>We'll send you SMS updates when your turn is appro</p>
          </div>
        </BottomMiddle>
        <BottomHolder>
          <button>Done</button>
        </BottomHolder>
      </JoinQuenceHolder>
    </JoinQuenceBody>
  );
};

export default JoinQuenceModal;

const JoinQuenceBody = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinQuenceHolder = styled.div`
  width: 32.6%;
  height: 100vh;
  background-color: white;
  border-radius: 7.35px;
  border: 0.74px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  min-height: 100vh;
  min-height: max-content;
`;
const TopHolder = styled.div`
  width: 457.24px;
  min-height: 116.68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;

  .delete {
    width: 100%;
    min-height: 15px;
    color: #0a0a0a;
    display: flex;
    justify-content: flex-end;
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #101828;
  }

  small {
    color: #717182;
    font-weight: 400;
    font-size: 12px;
  }

  .Icons {
    width: 47.05px;
    min-height: 47.05px;
    border-radius: 50%;
    background-color: #303bff;
    color: white;
    display: flex;
    font-size: 23px;
    justify-content: center;
    align-items: center;
  }
`;

const BottomMiddle = styled.div`
  width: 457px;
  height: 474.89px;
  border-top: 0.74px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 17.64px;
  padding-top: 17px;

  .Quence {
    width: 457.24px;
    min-height: 76.45px;
    border-radius: 11.76px;
    background-color: #eaf1da;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5.88px;

    p {
      font-weight: 600;
      color: #4a5565;
      line-height: 100%;
    }

    span {
      color: #009689;
      font-weight: 600;
      font-size: 13px;
      line-height: 200%;
    }
  }

  .Position {
    width: 457.24px;
    min-height: 76.63px;
    border-radius: 10.29px;
    border: 1.47px solid #e5e7eb;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 15px;
    gap: 5.88px;

    p {
      font-weight: 600;
      color: #4a5565;
      line-height: 200%;
    }
  }

  .infor {
    width: 457.24px;
    min-height: 161.73px;
    background-color: #f9fafb;
    border-radius: 10.29px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* padding-top: 5px; */
    padding-left: 17.64px;
    padding-right: 17.64px;
    gap: 6px;

    h4 {
      color: #101828;
      font-size: 16px;
      line-height: 200%;
      font-weight: 600;
    }

    p {
      color: #4a5565;
      font-size: 14px;
      line-height: 17.64px;
      font-weight: 400;
    }
  }
  .notice {
    width: 457.24px;
    min-height: 80.86px;
    background-color: #eff6ff;
    border: 0.74px solid #bedbff;
    display: flex;
    flex-direction: column;
    border-radius: 10.29px;
    padding-left: 12.5px;
    padding-top: 12.5px;
    padding-bottom: 0.74px;
    padding-right: 12.5px;
    gap: 5px;

    h4 {
      font-size: 14px;
      color: #1c398e;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: #1447e6;
    }
  }
`;

const BottomHolder = styled.div`
  width: 457.24px;
  height: 44.84px;
  display: flex;
  padding-top: 5.88px;
  padding-left: 11.77px;
  padding-bottom: 5.88px;
  padding-right: 11.76px;

  button {
    background-color: #303bff;
    border-radius: 5.88px;
    width: 457.24px;
    min-height: 26.46px;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
