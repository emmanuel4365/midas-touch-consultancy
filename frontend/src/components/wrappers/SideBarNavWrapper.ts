import styled from "styled-components";

const SideBarNavWrapper = styled.section`
  @media (min-width: 350px) {
    background-color: green;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    padding: 1% 10%;

    .sidebar-nav {
      /* background-color: white; */
      height: 800px;
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
    }

    .sidebarLinksAndContactInfo {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      min-height: 100%;
    }

    .sidebar-nav-links {
      display: flex;
      flex-direction: column;
      min-height: 60%;
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
      /* margin-top: auto; */
    }

    .sidebar-copyright {
      text-align: center;
      color: var(--text-white);
      font-size: var(--font-size-xs);
      margin: 36px 0;
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

    hr {
      border: none;
      border-top: 1px solid #6df843;
    }

    .sidebar-copyright {
      color: #ffffff;
    }
  }

  @media (min-width: 870px) {
    display: none;
  }
`;
export default SideBarNavWrapper;
