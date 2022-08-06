import React from "react";
import tw from "tailwind-styled-components";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { TiMediaPause } from "react-icons/ti";
import { TbArrowsShuffle2, TbRepeat } from "react-icons/tb";
const Container = tw.div`
    fixed
    bottom-10
    w-full
`;
const Wrapper = tw.div`
    flex justify-around items-center
`;
const PlayButton = tw.div`
    bg-[#f9aa71] 
    w-16 h-16 
    flex justify-center items-center 
    rounded-full 
    shadow-lg
`;
const Player = () => {
  return (
    <Container>
      <Wrapper>
        <TbRepeat size={25} />
        <IoPlayBack />
        <PlayButton>
          <TiMediaPause color="white" size={25} />
        </PlayButton>
        <IoPlayForward />
        <TbArrowsShuffle2 size={25} />
      </Wrapper>
    </Container>
  );
};

export default Player;
