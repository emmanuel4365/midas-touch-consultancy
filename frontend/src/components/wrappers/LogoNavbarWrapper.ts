import styled from "styled-components";

const LogoNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--pd-vertical-sect-align);

  @media (min-width: 350px) {
    .midas-logo {
      display: block;
    }
    .navbar {
      display: none;
    }
    .consultation-btn {
      display: none;
    }
  }

  @media (min-width: 870px) {
    .navbar {
      display: block;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .navbar a {
      padding: var(--pd-links);
      text-decoration: none;
      color: var(--text-color);
      border-radius: var(--border-radius);
    }

    .navbar a.active {
      background-color: rgba(51, 255, 0, 0.45);
      backdrop-filter: blur(20px);
      border: 1.5px solid rgba(0, 0, 0, 0.31);
      color: var(--black-text);
    }

    .consultation-btn {
      display: block;
      padding: var(--pd-btn);
      border-radius: var(--border-radius);
      background-color: var(--green-1);
      color: var(--white-text-body);
      border: none;
      font-weight: bold;
      cursor: pointer;
    }

    .navbar-menu {
      display: none;
    }
  }
`;

export default LogoNavbarWrapper;
