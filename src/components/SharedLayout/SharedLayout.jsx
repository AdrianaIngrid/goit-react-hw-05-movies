import { Outlet } from "react-router-dom";
import { StyledLink, Header, Container, LogoSpan } from "./SharedLayout.styled";
import { FaFilm } from 'react-icons/fa';
export const SharedLayout = () => {
    return (
      <Container>
        <Header>
          <LogoSpan>
            <FaFilm size="2x" />
          </LogoSpan>
          <nav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </Header>
     <Outlet/>
      </Container>
    );
};