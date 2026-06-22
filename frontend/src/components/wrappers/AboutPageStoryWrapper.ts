import styled from "styled-components";

const AboutPageStoryWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;

  .about-page-story-title {
    width: 154px;
  }

  @media (min-width: 350px) {
    gap: 0;
    .about-page-story-title {
      padding-left: 4px;
    }

    .about-page-story-text {
      padding: 8px;
    }
  }

  @media (min-width: 870px) {
    gap: 16px;

    .about-page-story-text {
      width: 800px;
    }

    .about-page-story-text {
      padding: 0;
    }
  }

  @media (min-width: 990px) {
    gap: 36px;
  }
`;
export default AboutPageStoryWrapper;
