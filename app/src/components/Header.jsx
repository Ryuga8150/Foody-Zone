import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";

const StyledHeader = styled.div`
  background-color: #18181b;
  padding: 1.2rem 2.4rem;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Container = styled.div`
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* background-color: orangered; */
`;

Header.propTypes = {
  children: PropTypes.node,
};
function Header({ children }) {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Search />
      </Container>
      {children}
    </StyledHeader>
  );
}

export default Header;
