import styled from '@emotion/styled';

export const AddsongRapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #f0f2f5; 
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
  }

  input[type="text"],
  input[type="file"],
  textarea,
  select {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  input[type="text"]:focus,
  input[type="file"]:focus,
  textarea:focus,
  select:focus {
    border-color: #03dac6;
    outline: none;
  }

  textarea {
    resize: none;
    height: 80px;
  }

  button {
    padding: 12px;
    background-color: #03dac6;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  button:hover:enabled {
    background-color: #029a82;
  }
`;