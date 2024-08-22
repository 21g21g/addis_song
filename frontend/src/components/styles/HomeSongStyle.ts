import styled from "@emotion/styled";
export const HomeRapper = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;

  .home {
    margin-top: 50px;
    text-align: center;
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  h1 {
    font-weight: bold;
    font-size: 2.8rem;
    color: #007bff;
    margin-bottom: 20px;
    animation: bounceIn 3s ease-out infinite; /* Loop the animation indefinitely */
  }

  img {
    width: 100%;
    height: auto;
    max-height: 600px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
  }

  .carousel-container {
    margin: 40px auto;
    max-width: 1200px;
    text-align: center;
  }

  .carousel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .carousel-header h2 {
    font-size: 2rem;
    color: #007bff;
    margin: 0;
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 300px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .carousel-item h3 {
    margin: 0;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.7); 
    color: #fff;
    border-radius: 0 0 12px 12px; 
    text-align: center;
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0; 
    z-index: 1;
    font-size: 1.4rem; 
    font-weight: 600; 
    line-height: 1.4; 
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5); 
    padding: 15px; 
  }
  .carousel-item h4 {
    margin: 0;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.7); 
    color: #fff;
    border-radius: 0 0 12px 12px; 
    text-align: center;
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0; 
    top: 260px;
    
    font-size: 1.4rem; 
    font-weight: 600; 
    line-height: 1.4; 
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5); 
    padding: 15px; 
  }

  .section {
    margin: 40px 0;
    padding: 0 20px;
  }

  .responsive-table {
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .responsive-table th,
  .responsive-table td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }

  .responsive-table thead {
    background-color: #007bff;
    color: white;
  }

  .responsive-table th {
    font-size: 1.1rem;
  }

  .responsive-table td {
    font-size: 1rem;
  }

  .responsive-table img {
    max-width: 100px;
    height: auto;
    border-radius: 4px;
  }

  .responsive-table button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    transition: background-color 0.3s;
    margin: 0 5px;
  }

  .responsive-table button.edit {
    background-color: #28a745;
  }

  .responsive-table button.delete {
    background-color: #dc3545;
  }

  .responsive-table button:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    .responsive-table th,
    .responsive-table td {
      font-size: 0.9rem;
      padding: 8px;
    }

    .responsive-table img {
      max-width: 80px;
    }

    .carousel-item h3 {
      font-size: 1rem;
    }

    .carousel-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 480px) {
    .responsive-table {
      display: block;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .responsive-table thead {
      display: none;
    }

    .responsive-table tr {
      display: block;
      margin-bottom: 10px;
    }

    .responsive-table td {
      display: block;
      text-align: right;
      font-size: 0.9rem;
      position: relative;
      padding-left: 50%;
    }

    .responsive-table td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 45%;
      padding-left: 10px;
      font-weight: bold;
      white-space: nowrap;
      color: #333;
    }

    .responsive-table img {
      max-width: 60px;
    }

    .carousel-container h2 {
      font-size: 1.4rem;
    }

    .responsive-table button {
      padding: 6px 10px;
      font-size: 12px;
    }
  }
`;

export const DropdownWrapper = styled.div`
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 5px;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

export const DropdownContent = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  width: 20%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1;
  right: 7;
  left: 10;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 12px;
    text-align: left;
    border: none;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;