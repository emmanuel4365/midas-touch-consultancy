import styled from "styled-components";

const AboutCompanyWrapper = styled.section`
  @media (min-width: 350px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    padding: var(--pd-vertical-sect-align);
    gap: var(--gap-24);
    align-items: center;
    justify-items: center;
    justify-content: center;

    .about-images-container {
      /* width: 500px; */
      /* height: 400px; */
      display: flex;
      align-items: center;
      position: relative;
    }

    .about-section-main-img {
      width: 100%;
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
      display: none;
    }

    .about-img2 {
      /* display: none; */
    }
    .about-section-dots {
      display: none;
    }

    .about-img3 {
      width: 100%;
      display: block;
    }

    .about-text-button-container {
      width: 340px;
      min-height: 400px;
      display: flex;
      gap: var(--gap-24);
      flex-direction: column;
      align-items: center;
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

    .about-icon-text-container {
      width: 340px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .about-icon-text {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--gap-4);
    }

    .about-btn {
      padding: var(--pd-btn);
      border-radius: var(--border-radius);
      background-color: var(--green-1);
      color: var(--white-text-body);
      border: none;
      font-weight: bold;
      cursor: pointer;
    }
  }

  @media (min-width: 870px) {
    .about-section-ellipse {
      display: block;
      width: 100px;
      position: absolute;
      top: -8.5%;
      right: -8%;
      z-index: -5;
    }

    .about-section-dots {
      display: block;
      width: 80px;
      /* height: 50px; */
      position: absolute;
      /* top: 50%; */
      bottom: 0%;
      right: -10%;
      z-index: -5;
    }
  }
`;
export default AboutCompanyWrapper;
