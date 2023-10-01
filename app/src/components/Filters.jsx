import styled from "styled-components";

const StyledFilter = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin: 2.4rem auto 0 auto;
  & li {
    font-size: 1.2rem;
    padding: 0.2rem 0.6rem;
    background-color: #c74949;
    color: #f6f6f6;
    border-radius: 5px;
    cursor: pointer;
  }
`;
function Filters() {
  return (
    <StyledFilter>
      <li>All</li>
      <li>Breakfast</li>
      <li>Lunch</li>
      <li>Dinner</li>
    </StyledFilter>
  );
}

export default Filters;
