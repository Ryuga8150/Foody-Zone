import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 1.2rem;
  background-color: rgba(38, 38, 38, 0.7);
  /* background-image: radial-gradient(circle at 100% 15%, #1f3764 2%, #090915 10%),
    radial-gradient(circle at 0% 50%, red 2%, #090915 10%); */
  display: flex;
  align-items: center;
  gap: 1.2rem;
  /* width: 32rem; */

  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  /* background: radial-gradient(#98f9ff 100%, #fff 0%),
    radial-gradient(#a5efff33 20%, #6ebff40b 4.48%, #4690d400 0%),
    radial-gradient(#a5efff33 20%, #6ebff40b 4.48%, #4690d400 0%); */
  /* background-image: radial-gradient(
      closest-corner at 40% 70%,

      #a5efff33 20%,
      #6ebff40b 4.48%,
      #4690d400 0%,
      transparent
    ),
    radial-gradient(
      closest-corner circle at 80% 20%,
      #98f9ff 100%,
      #fff 0% 50%,
      transparent
    ),
    radial-gradient(
      closest-corner circle at 10% 10%,
      #eabfff 100%,
      #8726b700 0%
    ); */
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
    margin-bottom: 2rem;
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
