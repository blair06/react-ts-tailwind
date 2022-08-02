import tw from "tailwind-styled-components";
import { AiFillHome } from "react-icons/ai";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
const Container = tw.div`
    flex  w-screen fixed bottom-0 shadow-[0_3px_60px_-15px_rgba(0,0,0,0.3)] justify-around py-8 rounded-t-[50px]
`;
const TabBar = () => {
  return (
    <Container>
      <AiFillHome size={20} color={`#f9aa71`}></AiFillHome>
      <FiSearch size={20} color={`#cdcdcd`}></FiSearch>
      <FiHeart size={20} color={`#cdcdcd`}></FiHeart>
      <BsPerson size={20} color={`#cdcdcd`}></BsPerson>
    </Container>
  );
};

export default TabBar;
