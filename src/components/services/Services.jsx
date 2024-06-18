import React, { useState } from "react";
import "./services.css";
import {
  UilWebGrid,
  UilArrowRight,
  UilEdit,
  UilTimes,
  UilCheckCircle,
  UilArrow,
} from "@iconscout/react-unicons";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <UilWebGrid className="services__icon" />
            <h3 className="services__title">
              Product <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <UilArrowRight className="services__button" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <UilTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Services with more than 1 year of experience. Providing Quality
                work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create UX element interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <UilArrow className="services__icon" />
            <h3 className="services__title">
              Ui/Ux <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <UilArrowRight className="services__button" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <UilTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Services with more than 1 year of experience. Providing Quality
                work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create UX element interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <UilEdit className="services__icon" />
            <h3 className="services__title">
              Web <br />
              Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <UilArrowRight className="services__button" />
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <UilTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                Services with more than 1 year of experience. Providing Quality
                work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create UX element interaction
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
