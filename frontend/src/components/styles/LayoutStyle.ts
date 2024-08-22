import styled from "@emotion/styled";
export const NavbarWrapper = styled.div`
  .all {
    background-color: #333; 
    padding: 20px;
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   

  }

  main {
    flex-grow: 1;
    background-color: #f5f5f5; 
  }
  nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #333;
    padding:20px;
    z-index: 2000;
  }
`;