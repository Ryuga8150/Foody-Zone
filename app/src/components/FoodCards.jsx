import styled from "styled-components";
import Card from "./Card";
import { getFoodItems } from "../services/apiFood";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const StyledCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    width: 70rem;
  }

  @media screen and (max-width: 950px) {
    //do Smth
    width: 60rem;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    width: 30rem;
  }

  column-gap: 1.2rem;
  row-gap: 2.4rem;
  margin: 3.2rem auto 3.2rem auto;
`;

// const foodData = [
//   {
//     name: "Boilded Egg",
//     price: 10,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     image: "/images/egg.png",
//     type: "breakfast",
//   },
//   {
//     name: "RAMEN",
//     price: 25,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     image: "/images/ramen.png",
//     type: "lunch",
//   },
//   {
//     name: "GRILLED CHICKEN",
//     price: 45,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     image: "/images/chicken.png",
//     type: "dinner",
//   },
//   {
//     name: "CAKE",
//     price: 18,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     image: "/images/cake.png",
//     type: "breakfast",
//   },
//   {
//     name: "BURGER",
//     price: 23,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     image: "/images/burger.png",
//     type: "lunch",
//   },
//   {
//     name: "PANCAKE",
//     price: 25,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     image: "/images/pancake.png",
//     type: "dinner",
//   },
// ];

function FoodCards() {
  const result = useQuery({ queryKey: ["foodItems"], queryFn: getFoodItems });
  const { data: foodData, isLoading } = result;

  if (isLoading) return <Spinner />;

  console.log(foodData, isLoading);

  return (
    <StyledCards>
      {foodData.map((item, ind) => (
        <Card key={ind} data={item} />
      ))}
    </StyledCards>
  );
}

export default FoodCards;
