import styled from "styled-components";

const ServicesWrapper = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--pd-vertical-sect-align);
  /* background-color: blue; */

  .services-title {
    width: 180px;
    text-align: center;
    font-weight: normal;
    font-size: var(--fs-h4);
    border: 1px solid #287112;
    border-radius: var(--border-radius-20);
  }

  .service {
    width: 100%;
    height: 200px;
    display: flex;
    /* margin-left: 5px; */
    align-items: center;
    justify-content: center;
    /* background-color: black; */
    position: relative;
  }

  .corp-hdev-container {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6df843;
    border-radius: var(--border-radius-20);
  }

  .corp-box {
    position: absolute;
    left: 17%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 70px;
    font-size: var(--fs-h4);
    font-weight: 600;
    border-radius: var(--border-radius-20);
  }

  .corp-icon-container {
    position: absolute;
    left: 12%;
  }

  .corp-btn {
    position: absolute;
    right: 13%;
    bottom: 25%;
  }

  .hdev-box {
    position: absolute;
    right: 18%;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: var(--fs-h4);
    font-weight: 600;
    padding-right: 70px;
    border-radius: var(--border-radius-20);
  }

  .hdev-icon-container {
    position: absolute;
    right: 13%;
  }

  .hdev-btn {
    position: absolute;
    left: 12%;
    bottom: 25%;
  }

  .box {
    width: 70%;
    height: 100px;
    background-color: white;
  }

  .icon-container {
    width: 100px;
  }

  img {
    width: 100%;
    display: block;
  }

  button {
    padding: var(--pd-btn-small);
    border-radius: var(--border-radius);
    background-color: var(--green-1);
    color: var(--white-text-body);
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default ServicesWrapper;
