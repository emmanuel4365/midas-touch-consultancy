import styled from "styled-components";

const AboutPageGrowthWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .title-subtitle-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .growth-title,
  .growth-subtitle {
    text-align: center;
  }

  .icon-text-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 16px;
  }

  .text1-label,
  .text2-label,
  .text3-label {
    font-weight: bold;
  }

  .text1-text,
  .text2-text,
  .text3-text {
    text-align: center;
    font-size: var(--fs-label);
  }
`;
export default AboutPageGrowthWrapper;
