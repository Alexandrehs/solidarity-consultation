import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    marging: 0;
    outile: 0;
  }

  body, #root {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

  .button {
    background: #444;
    color: #fff;
    border-radius: 8px;
    font-size: 16px;
    height: 30px;
    width: 100px;
  }

  input {
    height: 20px;
    width: 100%;
    padding: 5px;
    color: #777;
    border-radius: 8px;
    border: 1px solid #999;
  }
`;