import styled from "styled-components";

const HeroSectionWrapper = styled.section`
  width: 100%;
  min-height: 500px;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-24);
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
    min-width: 350px;
    color: var(--white-text-body);
  }

  .hero-image-container {
    width: 500px;
    min-width: 350px;
    height: 350px;
    overflow: hidden;
    border-radius: var(--border-radius-20);
  }

  .hero-image {
    width: 100%;
    display: block;
    object-fit: cover;
    transform: scale(1.5) translate(3%, 6%);
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
