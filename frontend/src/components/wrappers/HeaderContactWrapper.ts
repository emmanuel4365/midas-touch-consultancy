import styled from "styled-components";

const HeaderContactWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--green-1);
  padding: var(--pd-vertical-sect-align);

  .hc-phone-email-container {
    display: flex;
    align-items: center;
    gap: var(--gap-5);
    font-size: var(--fs-caption);
    color: var(--white-text-caption);
  }

  .hc-phone-container,
  .hc-email-container {
    display: flex;
  }

  .hc-socials-container {
    display: flex;
    align-items: center;
    gap: var(--gap-5);
  }

  .hc-socials-container a {
    height: 20px;
  }
`;

export default HeaderContactWrapper;
