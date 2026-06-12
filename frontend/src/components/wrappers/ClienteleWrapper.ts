import styled from "styled-components";

const ClienteleWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-4);
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 139px;
    position: relative;
    overflow: hidden;
  }

  .client-brands-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    img {
      display: block;
    }
  }

  .copy {
    top: 0;
    left: 100%;
  }
`;
export default ClienteleWrapper;
