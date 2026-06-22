import styled from "styled-components";

const AboutPageMissionWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;

  .about-page-mission-title {
    width: 154px;
  }

  @media (min-width: 350px) {
    gap: 0;
    .about-page-mission-title {
      padding-left: 4px;
    }

    .about-page-mission-text {
      padding: 8px;
    }
  }

  @media (min-width: 870px) {
    gap: 16px;
    .about-page-mission-text {
      width: 800px;
    }

    .about-page-mission-text {
      padding: 0;
    }
  }

  @media (min-width: 990px) {
    gap: 36px;
  }
`;
export default AboutPageMissionWrapper;
