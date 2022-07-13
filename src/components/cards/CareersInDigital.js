import React from "react";
import styled from "styled-components";
import YellowButton from "../buttons/YellowButton";

const Card = styled.div`
  background: var(--gray3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
  height: 400px;
  padding: 30px;

  h2 {
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    // color: gray;
  }

  button {
    // color: red;
    justify-self: start;
    font-size: 14px;
  }
`;

const CareersInDigital = () => {
  return (
    <Card>
      <h2>Careers in digital</h2>
      <p>
        Mollit non voluptate ipsum cillum. Cillum mollit deserunt nulla sunt et
        enim voluptate. Labore reprehenderit et in aliquip laborum pariatur.
      </p>
      <YellowButton text="SEARCH AND APPLY" width="50%" />
    </Card>
  );
};

export default CareersInDigital;
