import tw from "tailwind-styled-components";
import { AiFillHome } from "react-icons/ai";
// const Container = tw.div`

// `;
const TabBar = () => {
  return (
    <div className="flex  w-screen fixed bottom-0 shadow-[0_3px_60px_-15px_rgba(0,0,0,0.3)] justify-around py-8 rounded-t-[50px]">
      <AiFillHome></AiFillHome>
      <AiFillHome></AiFillHome>
      <AiFillHome></AiFillHome>
      <AiFillHome></AiFillHome>
    </div>
  );
};

export default TabBar;
