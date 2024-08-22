import styled from "@emotion/styled";
export const SongDetailsWrapper = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 50px auto;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .details-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .details-container > div {
    margin: 10px 0;
    font-size: 1.1rem;
    color: #666;
  }

  .details-container span {
    font-weight: bold;
    color: #333;
  }

  .actions {
    margin-top: 30px;
  }

  .actions button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    margin: 5px;
    transition: background-color 0.3s, transform 0.3s;
  }

  .actions button.edit {
    background-color: #28a745;
  }

  .actions button.delete {
    background-color: #dc3545;
  }

  .actions button:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  .actions button:active {
    transform: scale(0.98);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
    img {
      max-height: 400px;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
    .details-container > div {
      font-size: 1rem;
    }
    .actions button {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    img {
      max-height: 300px;
    }
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
    .details-container > div {
      font-size: 0.9rem;
    }
    .actions button {
      padding: 6px 12px;
      font-size: 0.8rem;
    }
  }
`;