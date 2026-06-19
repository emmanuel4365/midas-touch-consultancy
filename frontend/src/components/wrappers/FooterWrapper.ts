import styled from "styled-components";

const FooterWrapper = styled.footer`
  @media (min-width: 350px) {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: var(--gap-4);
    background-color: #103c03;
    color: var(--white-text-body);
    padding: var(--pd-vertical-sect-align);

    h2 {
      font-size: var(--fs-h4);
    }

    .sub-form-container {
      width: 300px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      align-items: center;
      padding: 4px 4px;
      gap: 8px;
    }

    .sub-form-container input {
      border: none;
    }

    .sub-text {
      font-size: 29px;
      margin-right: auto;
    }

    .links-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      align-items: center;
      justify-items: start;
      justify-content: center;
      width: 100%;
      min-height: 300px;
      gap: 8px;
      margin-top: 24px;
    }

    .sub-form-container input {
      padding: 8px;
      border-radius: 8px;
      background-color: #ffffff2d;
      color: #ffffff;
    }

    input::placeholder {
      color: #ffffff;
    }

    .sub-form-container button {
      padding: 8px 16px;
      border-radius: var(--border-radius);
      background-color: var(--green-1);
      color: var(--white-text-body);
      border: none;
      font-weight: bold;
      cursor: pointer;
    }

    .inner-links-container {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
    }

    .ilinks-nav {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
    }

    .ilinks-nav a {
      color: #ffffff;
      list-style: none;
      text-decoration: none;
    }

    .about-container,
    .inner-links-container,
    .wh-container,
    .footer-git-container {
      width: 250px;
    }

    .footer-git-phone,
    .footer-git-email {
      display: flex;
      align-items: center;
      justify-content: start;
    }

    .footer-socials-container {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-left: 11px;
      margin-top: 8px;
    }

    .footer-git-title {
      padding-left: 9px;
    }
  }

  @media (min-width: 870px) {
    .sub-form-container {
      width: 500px;
      /* min-height: 200px; */
      display: flex;
      align-items: center;
      gap: 8px;
      /* justify-content: space-between; */
      flex-wrap: wrap;
      border: 1px solid #6df843;
    }

    .inner-links-container {
      text-align: center;
    }

    .links-container {
      align-items: start;
    }
  }
`;
export default FooterWrapper;
