import CircleProfile from "components/circleProfile";
import tw from "tailwind-styled-components";
import profileImg from "asset/img/profile.jpeg";
const Container = tw.div`
    flex justify-between items-center
    pt-5
`;
const Title = tw.p`
    text-3xl
    text-[#555759]
`;
const NavBar = () => {
  return (
    <Container>
      <Title>Music</Title>
      <CircleProfile imgFile={profileImg} />
    </Container>
  );
};

export default NavBar;
