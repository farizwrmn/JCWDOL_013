import styled from "styled-components";

const Styled = styled.h1`
  color: navy;
  text-align: center;
`;
function Home(props) {
  return (
    <div>
      <Styled>ini Home sections</Styled>
      <h2>Hello {props.name}</h2>
      <p>My email {props.email}</p>
    </div>
  );
}

export default Home;
