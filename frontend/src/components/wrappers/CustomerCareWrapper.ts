import styled from "styled-components";

const CustomerCareWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--gap-2);
  justify-content: space-around;
  padding: var(--pd-vertical-sect-align);
  flex-wrap: wrap;

  .customer-care-title {
    display: none;
  }

  .c-support-container,
  .c-advice-container,
  .c-satisfaction-container {
    display: flex;
    align-items: center;
    gap: var(--gap-2);
    /* margin-bottom: 30px; */
  }

  .c-support-container p,
  .c-advice-container p,
  .c-satisfaction-container p {
    font-size: var(--fs-tagline);
  }

  .c-support-container h3,
  .c-advice-container h3,
  .c-satisfaction-container h3 {
    font-size: var(--fs-caption);
  }

  .c-support-text-container,
  .c-advice-text-container,
  .c-satisfaction-text-container {
    width: 250px;
  }
`;
export default CustomerCareWrapper;
