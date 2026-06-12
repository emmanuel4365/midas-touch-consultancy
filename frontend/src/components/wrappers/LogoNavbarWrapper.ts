import styled from "styled-components";

const LogoNavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-background);
  padding: var(--pd-header);

  .midas-logo {
    display: block;
  }

  .navbar {
    width: 40%;
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
    padding: var(--pd-btn);
    border-radius: var(--border-radius);
    background-color: var(--green-1);
    color: var(--white-text-body);
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default LogoNavbarWrapper;
