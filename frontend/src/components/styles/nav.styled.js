import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  background: #acdf87;
  /* margin-bottom: 3em; */
  /* background-color: lavenderblush; */
`;

export const Wrapper = styled.div`
  padding: 15px 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid blanchedalmond; */

  button {
    padding: 9px 25px;
    background-color: #1976d1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: white;

    &:hover {
      background-color: burlywood;
    }
  }
`;

export const Logo = styled.h1`
  font-family: ${({ theme }) => `${theme.fonts.logo}`};
  font-weight: bold;
  color: white;
  /* margin-right: auto; */
`;

export const MenuItem = styled.div`
  display: inline-block;
  padding: 0px 20px;
  color: white;
  transition: all 0.3s ease 0s;

  &:hover {
    color: burlywood;
  }
`;
