import React from "react";
import styled from "styled-components";
import { BsQuote } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Customers = () => {
  const ClientsCards = [
    {
      id: 1,
      icon: <BsQuote />,
      text: "KwikQ has transformed our banking operations. and the queue moves in an orderly manner. Staff productivity has improved, and customer complaints about waiting",
      Image:
        "https://i.postimg.cc/rFM3cLSz/97c5bbcb0cada2f75e7bc212c11d163f098e588a-1.jpg",
      role: "Operations Manager",
      branch: "Zenith Bank Ikeja Branch",
      rate: <IoIosStar />,
    },
    {
      id: 2,
      icon: <BsQuote />,
      text: "Our hospital waiting area is now calm and organized. patients get notified when it's their turn, and doctors attend to them with less pressure. It has improved both patient experience and staff coordination.",
      Image:
        "https://i.postimg.cc/rFM3cLSz/97c5bbcb0cada2f75e7bc212c11d163f098e588a-1.jpg",
      role: "Head Nurse,",
      branch: "St. Grace Medical Centre, Lagos",
      rate: <IoIosStar />,
    },
    {
      id: 3,
      icon: <BsQuote />,
      text: "KwikQ has transformed our banking operations. and the queue moves in an orderly manner. Staff productivity has improved, and customer complaints about waiting",
      Image:
        "https://i.postimg.cc/rFM3cLSz/97c5bbcb0cada2f75e7bc212c11d163f098e588a-1.jpg",
      role: "Operations Manager",
      branch: "Zenith Bank Ikeja Branch",
      rate: <IoIosStar />,
    },
    {
      id: 4,
      icon: <BsQuote />,
      text: "Our hospital waiting area is now calm and organized. patients get notified when it's their turn, and doctors attend to them with less pressure. It has improved both patient experience and staff coordination.",
      Image:
        "https://i.postimg.cc/rFM3cLSz/97c5bbcb0cada2f75e7bc212c11d163f098e588a-1.jpg",
      role: "Head Nurse,",
      branch: "St. Grace Medical Centre, Lagos",
      rate: <IoIosStar />,
    },
  ];

  return (
    <ClientsContainer>
      <Main>
        <h1>
          What Our Clients <span>Say</span>
        </h1>
        <p>
          Recognized for excellence, our platform is rated highly for ease of
          use, customizability, and how well it works with other solutions. See
          what our customers have to say about how Waitwhile has transformed
          their businesses.
        </p>
      </Main>

      <Section>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={2}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={800}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {ClientsCards.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="ClientCards">
                <div className="circle">{item.icon}</div>
                <p>{item.text}</p>
                <div className="profileholder">
                  <div className="profile">
                    <img src={item.Image} alt="" />
                  </div>
                  <div className="text-holder">
                    <h4>{item.role}</h4>
                    <p>{item.branch}</p>
                    <strong>
                      {item.rate}
                      {item.rate}
                      {item.rate}
                      {item.rate}
                    </strong>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </ClientsContainer>
  );
};

export default Customers;

const ClientsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #eaebfe;
  padding: 40px 0;

  /* Tablet */
  @media (max-width: 768px) {
    gap: 30px;
    padding: 30px 0;
    min-height: auto;
  }

  /* Mobile */
  @media (max-width: 480px) {
    gap: 20px;
    padding: 20px 0;
    min-height: auto;
  }
`;

const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;
  gap: 20px;

  h1 {
    font-weight: 700;
    font-size: 45px;
    color: #222222;
    line-height: 120%;
    text-align: center;

    span {
      color: #303bff;
    }
  }

  p {
    font-size: 18px;
    line-height: 140%;
    color: #222222;
    font-weight: 500;
    text-align: center;
  }

  /* Tablet */
  @media (max-width: 768px) {
    height: auto;
    padding: 0 20px;
    gap: 15px;

    h1 {
      font-size: 36px;
      line-height: 120%;
    }

    p {
      font-size: 16px;
      line-height: 130%;
      width: 90%;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    height: auto;
    padding: 0 15px;
    gap: 12px;

    h1 {
      font-size: 28px;
      line-height: 120%;
    }

    p {
      font-size: 14px;
      line-height: 120%;
      width: 95%;
    }
  }
`;

const Section = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: #eaebfe;
  padding: 20px;

  .swiper {
    padding: 20px 0;
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .ClientCards {
    width: 570px;
    height: auto;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 20px;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    margin: 0 auto;
  }

  .circle {
    width: 80px;
    height: 80px;
    display: flex;
    font-size: 40px;
    font-weight: 700;
    align-items: center;
    color: white;
    justify-content: center;
    background-color: #222222;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  p {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    color: #222222;
  }

  .profileholder {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: auto;

    .profile {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #b8d6b8;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  .text-holder {
    display: flex;
    gap: 5px;
    flex-direction: column;

    h4 {
      font-size: 18px;
      font-weight: 600;
      color: #222222;
      margin: 0;
    }

    p {
      font-size: 14px;
      width: 100%;
      color: #666;
      margin: 0;
    }

    strong {
      color: #f79329;
      font-size: 18px;
      display: flex;
      gap: 2px;
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    padding: 15px;
    min-height: auto;

    .ClientCards {
      width: 100%;
      max-width: 400px;
      min-height: 350px;
      padding: 20px;
      gap: 15px;

      .circle {
        width: 70px;
        height: 70px;
        font-size: 35px;
      }

      p {
        font-size: 15px;
        line-height: 130%;
      }

      .profileholder {
        gap: 12px;

        .profile {
          width: 55px;
          height: 55px;
        }
      }

      .text-holder {
        h4 {
          font-size: 16px;
        }

        p {
          font-size: 13px;
        }

        strong {
          font-size: 16px;
        }
      }
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 10px;
    min-height: auto;

    .ClientCards {
      width: 100%;
      max-width: 320px;
      min-height: 320px;
      padding: 20px;
      gap: 15px;

      .circle {
        width: 60px;
        height: 60px;
        font-size: 30px;
      }

      p {
        font-size: 14px;
        line-height: 130%;
      }

      .profileholder {
        gap: 10px;

        .profile {
          width: 50px;
          height: 50px;
        }
      }

      .text-holder {
        h4 {
          font-size: 15px;
        }

        p {
          font-size: 12px;
        }

        strong {
          font-size: 15px;
        }
      }
    }
  }
`;
