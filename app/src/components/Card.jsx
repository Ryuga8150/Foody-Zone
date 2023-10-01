import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 1.2rem;
  background-color: rgba(38, 38, 38, 0.7);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 32rem;
`;
const Image = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 12rem;
    height: 12rem;
  }
`;

const Description = styled.div`
  & h3 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  & p {
    font-size: 1.2rem;
    margin-bottom: 2.4rem;
  }

  & div {
    display: flex;

    & span {
      padding: 0.6rem;
      color: #f6f6f6;
      background-color: #c74949;
      /* display: inline-block; */
      margin-left: auto;
      font-size: 1.4rem;
    }
  }
`;
Card.propTypes = {
  data: PropTypes.object,
};
function Card({ data }) {
  const { name, price, text, image, type } = data;
  return (
    <StyledCard>
      <Image>
        <img src={image} alt="food" />
      </Image>
      <Description>
        <h3>{name}</h3>
        <p>{text}</p>
        <div>
          <span>${price}.00</span>
        </div>
      </Description>
    </StyledCard>
  );
}

export default Card;
