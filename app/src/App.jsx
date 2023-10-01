import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";

const StyledApp = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header>
          <Filters />
        </Header>
        <Gallery />
      </StyledApp>
    </>
  );
}

export default App;
