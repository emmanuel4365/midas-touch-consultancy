import styled from "styled-components";

const AccreditWrapper = styled.section`
  @media (min-width: 350px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-4);
    overflow: hidden;
    padding: var(--pd-vertical-sect-align);

    .accredit-title {
      width: 300px;
      text-align: center;
      font-weight: normal;
      font-size: var(--fs-h4);
      border: 1px solid #287112;
      border-radius: var(--border-radius-20);
    }

    .accredit-brands-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .accredit-brand {
      width: 250px;

      img {
        width: 100%;
        display: block;
        object-fit: cover;
      }

      .brand2 {
        transform: scale(0.8);
      }

      .brand4 {
        transform: scale(1.5);
        margin-top: 16px;
        margin-bottom: 16px;
      }
    }
  }

  @media (min-width: 870px) {
    .accredit-brands-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: space-between;
      justify-content: center;
    }

    .brand4 {
      transform: scale(1.5);
    }
  }
`;

export default AccreditWrapper;
