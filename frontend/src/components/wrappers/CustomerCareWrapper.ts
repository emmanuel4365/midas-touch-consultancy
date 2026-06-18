import styled from "styled-components";

const CustomerCareWrapper = styled.section`
  @media (min-width: 350px) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-24);
    align-items: center;
    justify-content: center;
    padding: var(--pd-cust-care);
  }

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
