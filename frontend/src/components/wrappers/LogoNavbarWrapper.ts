import styled from "styled-components";

const LogoNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--pd-vertical-sect-align);

  @media (min-width: 350px) {
    .navbar {
      display: none;
    }
    .consultation-btn {
      display: none;
    }
  }
`;

export default LogoNavbarWrapper;
