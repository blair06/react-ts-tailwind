import tw from "tailwind-styled-components";
import Header from "./header";
import Player from "./player";
import { ari, troye, trxye } from "asset/img";
const Container = tw.div`
  bg-[#73cddb]
  w-full
  h-screen
`;

const ContentsArea = tw.div`
  bg-white
  w-full
  h-5/6
  fixed
  bottom-0
  rounded-t-[50px]
`;
const MusicAppDetail = () => {
  return (
    <Container>
      <Header />
      <ContentsArea>
        <div className="flex flex-col items-center h-full">
          <div className="rounded-b-full w-3/5 h-3/5 overflow-hidden pt-12">
            <img src={trxye} className="h-full rounded-t-[50px]" alt="album" />
          </div>
          <div className="h-20 flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold text-gray-600">Blue Night</p>
            <p className="font-semibold text-gray-300">Troye sivan</p>
          </div>
        </div>

        <Player />
      </ContentsArea>
    </Container>
  );
};

export default MusicAppDetail;
