import styled from "styled-components";
import FoodCards from "./FoodCards";

const StyledGallery = styled.div`
  background: url(/bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-grow: 1;
  margin-top: -3px;
`;

const Container = styled.div`
  display: flex;
  /* margin: 0 auto; */
`;
function Gallery() {
  return (
    <StyledGallery>
      <Container>
        <FoodCards />
      </Container>
    </StyledGallery>
  );
}

export default Gallery;
