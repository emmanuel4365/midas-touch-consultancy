import styled from "styled-components";

const SideBarNavWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: green;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1% 10%;
  overflow-y: scroll;
  transform: translateX(-100%);
  transition: transform 1.5s ease-in-out;

  .sidebar-nav {
    height: 350px;
  }

  .sidebar-logo-icon {
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    padding-top: 4px;
    padding-bottom: 6px;
    border-bottom: 1px solid #6df843;
    top: 0;
  }

  .sidebarLinksAndContactInfo {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .sidebar-nav-links {
    display: flex;
    flex-direction: column;
    min-height: 60%;
    font-size: var(--fs-h3);
    /* margin-bottom: auto; */
  }

  .sidebar-nav-link {
    padding: 10px;
    text-decoration: none;
    color: hsl(0, 100%, 100%);
    border-radius: 20px;
    margin: auto 8px;
  }

  .sidebar-nav-link:hover {
    background-color: #75797471;
  }

  .sidebar-socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 150px;
  }

  .sidebar-mail,
  .sidebar-phone {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 4px;
    margin: auto 8px;
    color: #ffffff;
  }

  hr {
    border: none;
    border-top: 1px solid #6df843;
  }

  .sidebar-copyright {
    text-align: center;
    color: #ffffff;
  }
`;
export default SideBarNavWrapper;
