import digital from "../../components/images/digital";
import React from "react";
import styled from "styled-components";
import YellowButton from "../buttons/YellowButton";

const Hero = styled.div`
  height: 500px;
  width: 100%;
  padding: 70px;
  background-image: url(${(props) => props.backgroundUrl || digital});
  background-size: cover;
  text-transform: uppercase;

  h1 {
    color: white;
    font-size: 5rem;
  }
  .section1 {
    /* width: 100%; */
    /* border: 2px solid red; */
  }
  .sectionLeft {
    padding: 150px 50px;

    height: 100%;
    border-radius: 0px;
    background-color: rgba(0, 0, 0, 0.3);
    height: 500px;
    width: 45%;
    font-size: 14px;

    margin-top: -70px;
    margin-left: 35px; /* margin-left: 70px; */
  }
`;

const HeroSection = ({ title, backgroundUrl, textButton, handleSubPage }) => {
  return (
    <Hero backgroundUrl={backgroundUrl}>
      <div className=" w-100 d-flex justify-content-between">
        <div className="col-lg-7  section1">
          <br />
          <h1>{title}</h1>
        </div>
        <div className="col-lg-4 sectionLeft ">
          <p className="pb-4 text-white">{sectionText?.text}</p>
          <div className="d-flex justify-content-center">
            <YellowButton
              text={sectionText.butonText}
              onClick={() => {
                handleSubPage("locations");
              }}
            />
          </div>
        </div>
      </div>

      {/* {textButton && <YellowButton text={`${textButton}`} />} */}
    </Hero>
  );
};

export default HeroSection;

const sectionText = {
  text: "Serving our Brazil Costumers solve their operational , financial , and regulatory challenges and provide turnaround management",
  butonText: "Contact Us",
};
