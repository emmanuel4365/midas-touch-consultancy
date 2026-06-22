import styled from "styled-components";

const AboutPageVissionWrapper = styled.section`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;
  color: hsl(0, 100%, 100%);
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url("/about-page-vision-bg.jpg") no-repeat center center/cover;

  .about-page-vision-title {
    width: 154px;
  }

  @media (min-width: 350px) {
    gap: 0;
    .about-page-vision-title {
      padding-left: 4px;
    }

    .about-page-vision-text {
      padding: 8px;
    }
  }

  @media (min-width: 870px) {
    gap: 16px;
    .about-page-vision-text {
      width: 800px;
    }

    .about-page-vision-text {
      padding: 0;
    }
  }

  @media (min-width: 990px) {
    gap: 36px;
  }
`;
export default AboutPageVissionWrapper;
