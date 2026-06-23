import styled from "styled-components";

const GalleryPageWrapper = styled.main`
  width: 100%;

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .gallery img {
    width: 100%;
    border-radius: 10px;
  }
`;
export default GalleryPageWrapper;
