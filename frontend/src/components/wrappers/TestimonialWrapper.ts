import styled from "styled-components";

const TestimonialWrapper = styled.section`
  margin-top: 32px;
  margin-bottom: 32px;

  .testify-title {
    padding: 8px;
  }

  @media (min-width: 350px) {
    width: 100%;
    min-height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: space-evenly;
    gap: var(--gap-4);
    overflow: hidden;
    padding: var(--pd-vertical-sect-align);

    .testify-title {
      width: 180px;
      text-align: center;
      font-weight: normal;
      font-size: var(--fs-h4);
      border: 1px solid #287112;
      border-radius: var(--border-radius-20);
    }

    .testimonies-container {
      width: 100%;
      min-height: 330px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 24px;
      justify-content: space-between;
    }

    .testimony {
      width: 300px;
      min-height: 332.08px;
      align-self: flex-start;
      border-radius: var(--border-radius-20);
      background-color: hsl(0, 100%, 100%);
      box-shadow: 10px 5px 5px #28711250;
      padding: 8px;
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    .testimony p {
      flex-grow: 1;
    }
  }
`;

export default TestimonialWrapper;
