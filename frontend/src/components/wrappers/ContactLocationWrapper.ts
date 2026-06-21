import styled from "styled-components";

const ContactLocationWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;

  @media (min-width: 350px) {
    .map {
      width: 340px;
      height: 300px;
    }
  }

  @media (min-width: 650px) {
    .map {
      width: 600px;
      height: 250px;
    }
  }
`;
export default ContactLocationWrapper;
