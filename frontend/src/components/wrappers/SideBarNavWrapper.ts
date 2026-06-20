import styled from "styled-components";

const SideBarNavWrapper = styled.section`
  @media (min-width: 350px) {
    background-color: green;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    padding: 1% 10%;
    overflow-y: scroll;
    /* transform: translateX(100%); */

    .sidebar-nav {
      /* background-color: white; */
      height: 350px;
    }

    .sidebar-logo-icon {
      display: flex;
      align-items: center;
      justify-items: center;
      justify-content: space-between;
      padding-top: 4px;
      padding-bottom: 6px;
      /* border-bottom: 1px solid var(--text-white); */
      border-bottom: 1px solid #6df843;
      /* position: sticky; */
      top: 0;
    }

    .sidebarLinksAndContactInfo {
      display: flex;
      flex-direction: column;
      /* gap: 50px; */
      /* justify-content: space-between; */
      min-height: 100%;
    }

    .sidebar-nav-links {
      display: flex;
      flex-direction: column;
      min-height: 60%;
      /* margin-bottom: auto; */
    }

    .sidebar-nav-link {
      padding: 16px;
      text-decoration: none;
      color: hsl(0, 100%, 100%);
      border-radius: 20px;
      margin: auto 8px;
      /* background-color: var(--brand-light-green); */
    }

    .sidebar-nav-link:hover {
      background-color: #75797471;
    }

    .sidebar-socials {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-top: 90px;
    }

    .sidebar-mail,
    .sidebar-phone {
      /* padding: var(--padding-md); */
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 4px;
      margin: auto 8px;
      color: #ffffff;
    }

    .sidebar-phone {
      /* margin-bottom: 70px; */
    }

    hr {
      border: none;
      border-top: 1px solid #6df843;
    }

    .sidebar-copyright {
      text-align: center;
      color: #ffffff;
    }
  }

  @media (min-width: 870px) {
    display: none;
  }
`;
export default SideBarNavWrapper;
