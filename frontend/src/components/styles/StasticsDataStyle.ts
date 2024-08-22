import styled from "@emotion/styled";

export const StatisticsWrapper = styled.div`
  margin: 20px;
  font-family: Arial, sans-serif;

  .stat-container {
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }

  h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 1.8rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin: 10px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #007bff;
    color: white;
    font-size: 1.1rem;
  }

  td {
    text-align: center;
    font-size: 1rem;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  .button-group {
    margin-top: 20px;
    text-align: right;
  }

  .button-group button {
    padding: 10px 15px;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-size: 0.9rem;
    transition: background-color 0.3s;
  }

  .button-group .view-button {
    background-color: #28a745;
  }

  .button-group .edit-button {
    background-color: #007bff;
  }

  .button-group .delete-button {
    background-color: #dc3545;
  }

  .button-group button:hover {
    opacity: 0.9;
  }
`;