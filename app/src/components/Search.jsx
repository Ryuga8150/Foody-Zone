import styled from "styled-components";

const Input = styled.input`
  font-family: inherit;
  font-size: 1.2rem;

  border: solid 2px #b91c1c;
  /* box-shadow: #f6f6f6 0px 1px 1px 0px inset, #f6f6f6 0px 50px 100px -20px,
    #f6f6f6 0px 30px 60px -30px; */

  box-shadow: #4c4c4c 0.5px 4px 10px;
  padding: 0.6rem 1.2rem;

  border-radius: 10px;

  &:focus {
    outline: none;
    transform: scale(1.1);
  }

  &::placeholder {
    color: #1e1e1e;
  }
`;
function Search() {
  return (
    <div>
      <Input type="text" placeholder={"Enter text..."} />
    </div>
  );
}

export default Search;
