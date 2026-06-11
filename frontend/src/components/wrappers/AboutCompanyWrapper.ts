import styled from "styled-components";

const AboutCompanyWrapper = styled.section`
  width: 100%;
  /* height: 500px; */
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  padding: var(--pd-vertical-sect-align);

  .about-images-container {
    width: 500px;
    height: 400px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .about-section-main-img {
    width: 100%;
    height: 360px;
    overflow: hidden;
    z-index: -1;
    border-top-right-radius: var(--border-radius-20);
    border-bottom-left-radius: var(--border-radius-20);
  }

  .about-img1 {
    width: 100%;
    /* height: auto; */
    display: block;
    transform: scale(2.1) translate(-20%);
  }

  .about-section-ellipse {
    width: 150px;
    position: absolute;
    top: -2.5%;
    right: -15%;
    z-index: -5;
  }

  .about-img2 {
    width: 100%;
    display: block;
  }
  .about-section-dots {
    width: 100px;
    /* height: 50px; */
    position: absolute;
    bottom: 5%;
    right: -15%;
    z-index: -5;
  }

  .about-img3 {
    width: 100%;
    display: block;
  }

  .about-text-button-container {
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .about-title {
    width: 180px;
    text-align: center;
    font-weight: normal;
    font-size: var(--fs-h4);
    border: 1px solid #287112;
    border-radius: var(--border-radius-20);
  }

  .about-subtitle {
    /* width: 350px; */
  }

  .about-pg {
    /* width: 350px; */
  }
`;
export default AboutCompanyWrapper;
