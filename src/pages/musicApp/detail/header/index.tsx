import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import tw from "tailwind-styled-components";

const Container = tw.div`
    relative
   
    h-1/6
`;
const NavBarArea = tw.div`
  flex justify-around
  text-white
  font-semibold
  items-center
  h-full
`;
const Holder = tw.div`
  rounded-full
  w-10 h-2 
  border
  bg-white 
  absolute 
  bottom-3 left-[calc(50%-20px)]
`;
const Header = () => {
  return (
    <Container>
      <NavBarArea>
        <MdArrowBackIosNew color="white" size={20} />
        <p>Now Playing</p>
        <FiHeart color="white" size={20} />
      </NavBarArea>
      <Holder />
    </Container>
  );
};

export default Header;
