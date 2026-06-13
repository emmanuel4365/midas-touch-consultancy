import styled from "styled-components";

const ClienteleWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-4);
  overflow: hidden;
  padding: var(--pd-vertical-sect-align);

  .client-title {
    width: 180px;
    text-align: center;
    font-weight: normal;
    font-size: var(--fs-h4);
    border: 1px solid #287112;
    border-radius: var(--border-radius-20);
  }

  .client-subtitle {
  }

  .brands-container {
    width: 960px;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 150px;
    /* gap: 24px; */
  }

  #original {
    width: 100%;
    display: flex;
    /* gap: var(--gap-24); */
    /* padding-right: 52px; */
  }

  #original img,
  #copy img {
    display: block;
  }

  #copy {
    width: 100%;
    display: flex;
    /* gap: var(--gap-24); */
  }

  /* .brand{
    flex-grow: 0;
    flex-shrink: 0;
  } */
`;
export default ClienteleWrapper;
