import styled from "styled-components";

const AboutPageHeroWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: hsl(0, 100%, 100%);
  justify-content: center;
  padding: var(--pd-vertical-sect-align);
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url("/hero-bg-image.jpg") no-repeat center center/cover;
`;

export default AboutPageHeroWrapper;
