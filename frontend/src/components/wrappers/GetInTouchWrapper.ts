import styled from "styled-components";

const GetInTouchWrapper = styled.section`
  @media (min-width: 350px) {
    width: 100%;
    min-height: 440px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: center;
    gap: var(--gap-4);
    padding: var(--pd-vertical-sect-align);
    background-color: #e7e7e7;

    .git-details-container {
      width: 100%;
      min-height: 300px;
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      justify-items: center;
      gap: 24px;
      justify-content: space-between;
    }

    form {
      min-width: 300px;
      align-self: center;
      padding: 8px;
    }

    .git-container {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-grow: 1;
    }

    .git-container .address {
      align-self: flex-start;
    }

    .contact-details-container {
      width: 500px;
      height: 395.25px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-title {
      text-align: center;
    }

    .msg.container {
      width: 500px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-radius: 16px;
      background-color: #ffffff;
      /* align-items: start; */
    }

    input {
      padding: var(--gap-4);
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid gray;
    }

    input:focus,
    textarea:focus {
      outline: none;
      border-color: #3bf66a;
      box-shadow: 0 0 8px rgba(59, 246, 106, 0.5); /* Smooth glow effect */
    }

    .msg.container button {
      align-self: flex-end;
      display: flex;
      align-items: center;
      padding: 8px 16px;
      border-radius: var(--border-radius);
      background-color: var(--green-1);
      color: var(--white-text-body);
      border: none;
      font-weight: bold;
      cursor: pointer;
    }

    textarea {
      resize: none;
      padding: var(--gap-4);
      border-bottom: 1px solid gray;
      border: none;
      border-bottom: 1px solid gray;
    }

    .git-socials-container {
      border-top: 1px solid #808080;
      margin-top: 4px;
    }
  }
`;

export default GetInTouchWrapper;
