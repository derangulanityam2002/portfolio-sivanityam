import React, { useState } from "react";
import "./qualification.css";
import { UilGraduationCap } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons"; // Import the specific icon

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel Journey</span>
      <div className="qualificatin__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active qualification--flex"
                : "qualification__button qualification--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <UilGraduationCap className="qualification__icon" />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active qualification--flex"
                : "qualification__button qualification--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <UilBriefcaseAlt className="qualification__icon" />
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  K.S.R.M. College of Engineering
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2020-2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Diploma</h3>
                <span className="qualification__subtitle">
                  Government Polytechnic Vempalli
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2017 - 2020
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Secondary School Certificate (10th)
                </h3>
                <span className="qualification__subtitle">
                  G.V.S. Oriental High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2014- 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Node.js</h3>
                <span className="qualification__subtitle">
                  Ducat - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React.js</h3>
                <span className="qualification__subtitle">
                  Ducat - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Express</h3>
                <span className="qualification__subtitle">
                  Ducat - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">MongoDB</h3>
                <span className="qualification__subtitle">
                  Ducat - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
