import styled from "styled-components";

const ContactHeroSectWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  color: hsl(0, 100%, 100%);
  justify-content: center;
  gap: var(--gap-4);
  padding: var(--pd-vertical-sect-align);
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url("/hero-bg-image.jpg") no-repeat center center/cover;
`;

export default ContactHeroSectWrapper;
