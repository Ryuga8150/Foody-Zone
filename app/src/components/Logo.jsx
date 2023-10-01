import styled from "styled-components";

const Image = styled.div`
  & img {
    width: 16rem;
    height: 6.4rem;
  }
`;
function Logo() {
  return (
    <Image>
      <img src="/logo.svg" alt="company logo" />
    </Image>
  );
}

export default Logo;
