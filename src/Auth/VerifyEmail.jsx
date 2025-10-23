import React, { useRef, useState } from "react";
import {
  VerifyEmailContainer,
  VerifyEmailHolder,
  LogoHolder,
  VerifyEmailHolderRight,
} from "./VerifyEmailStyle";
import { MdOutlineVerifiedUser } from "react-icons/md";

const VerifyEmail = ({ length = 6 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleInputChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < length - 1 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  return (
    <VerifyEmailContainer>
      <VerifyEmailHolder>
        <LogoHolder>
          <img
            src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760468659/logo-removebg-preview_mouzpd.png"
            alt=""
          />
        </LogoHolder>
        <VerifyEmailHolderRight>
          <div className="top_holder">
            <div className="Icons">
              <MdOutlineVerifiedUser />
            </div>
            <h2>Verify Email</h2>
            <p>Please input code sent to your email</p>
          </div>

          <div className="InputHolder">
            <p>Input code</p>
            <div>
              {otp.map((length, index) => (
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  value={length}
                  onChange={(e) => handleInputChange(e.target, index)}
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </div>
          <div className="button-holder">
            <button>Verify</button>
            <p>
              Didn't receive any code? <span>Resend codes (59s)</span>
            </p>
          </div>
        </VerifyEmailHolderRight>
      </VerifyEmailHolder>
    </VerifyEmailContainer>
  );
};

export default VerifyEmail;
