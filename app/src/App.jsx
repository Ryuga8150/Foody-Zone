import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./GlobalStyles";

import Header from "./components/Header";
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";

const StyledApp = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <StyledApp>
        <Header>
          <Filters />
        </Header>
        <Gallery />
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;
