import styled from "styled-components";

const TestimonialWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
    justify-content: space-around;
  }

  .testimony {
    width: 300px;
    align-self: flex-start;
    border-radius: var(--border-radius-20);
  }
`;

export default TestimonialWrapper;
