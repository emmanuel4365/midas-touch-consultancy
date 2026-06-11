import styled from "styled-components";
// import heroBGImage from "/src/assets/hero-bg-image.jpg";

// console.log(heroBGImage);

const HeroSectionWrapper = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--pd-vertical-sect-align);
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url("/hero-bg-image.jpg") no-repeat center center/cover;

  .hero-text-content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-24);
    width: 500px;
    color: var(--white-text-body);
  }

  .hero-image-container {
    width: 500px;
    height: 300px;
    overflow: hidden;
  }

  .hero-image {
    width: 100%;
    border-radius: var(--border-radius);
    /* object-fit: cover; */
  }

  .hero-button {
    padding: var(--pd-btn);
    background-color: var(--green-1);
    color: var(--white-text-body);
    font-weight: bold;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
`;

export default HeroSectionWrapper;
