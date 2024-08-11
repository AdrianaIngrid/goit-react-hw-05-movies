import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border-style: inset;
  border-color: grey;
  background-color: red;
  margin: 0px 5px;

  &.active {
    color: white;
    background-color: blue;
  }
`;
export const LogoSpan = styled.span`
  width: 50px;
  height: 40px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: grey;

  > nav {
    display: flex;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  background-color: rgb(234, 255, 150);
  min-height: 100vh;
`;
