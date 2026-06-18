import styled from "styled-components";

const HeroSectionWrapper = styled.section`
  @media (min-width: 350px) {
    min-height: 500px;
    display: grid;
    gap: var(--gap-24);
    padding: 1% 2%;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    align-items: center;
    justify-items: center;
    justify-content: center;
    background:
      linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url("/hero-bg-image.jpg") no-repeat center center/cover;

    .hero-text-content-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: var(--gap-24);
      width: 340px;
      color: var(--white-text-body);
    }

    .hero-text-content-container h1 {
      font-size: var(--fs-h2);
    }

    .hero-text-content-container p {
      font-size: var(--fs-caption);
    }

    .hero-image-container {
      width: 320px;
      height: 320px;
      overflow: hidden;
      border-radius: var(--border-radius-20);
    }

    .hero-image {
      width: 100%;
      display: block;
      object-fit: cover;
      transform: scale(1.7) translate(3%, 18%);
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
  }
`;

export default HeroSectionWrapper;
