import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 350px) {
    #imageText {
      font-size: 40px;
    }

    #imageIcon {
      width: 100px;
      height: 145px;
    }
  }

  @media (min-width: 800px) {
    #imageText {
      font-size: 56px;
    }

    #imageIcon {
      width: 153px;
      height: 195px;
    }
  }
`;
export default LoaderWrapper;
