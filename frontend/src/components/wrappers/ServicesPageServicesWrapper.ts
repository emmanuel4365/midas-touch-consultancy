import styled from "styled-components";

const ServicesPageServicesWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-top: 16px;

  .services {
    position: relative;
    margin: 32px;
  }

  .services .corp-img,
  .human-dev-img {
    position: absolute;
    top: -5%;
    left: 37%;
  }

  .service-list {
    width: 280px;
    height: 320px;
    border: 2px solid #6df843;
    padding-left: 8px;
    padding-top: 24px;
    border-radius: 20px;
    margin-top: 24px;
  }

  @media (min-width: 350px) and (max-width: 703px) {
    gap: 0;
    padding-top: 16px;
  }
`;

export default ServicesPageServicesWrapper;
