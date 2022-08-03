import AlbumCard from "components/albumCard";
import { troye, trxye, ari, nayeon, girl } from "asset/img/index";
import BadgeList from "components/badgeList";
import NavBar from "components/navBar";
import TabBar from "components/tabBar";
import tw from "tailwind-styled-components";
import InfoArea from "components/InfoArea";
import PhotoCard from "components/photoCard";
import Carousel from "components/carousel";
const ContentsArea = tw.div`
m-7
mb-[100px]
`;
// bg-slate-500
interface IAlbumList {
  imgFile: string;
  title: string;
  singer: string;
}
const albumList: IAlbumList[] = [
  {
    imgFile: troye,
    title: "Blue Night",
    singer: "Troye Sivan",
  },
  {
    imgFile: trxye,
    title: "Gasoline",
    singer: "Troye Sivan",
  },
  {
    imgFile: ari,
    title: "NASA",
    singer: "Ariana Grande",
  },
];
const MusicAppMain = () => {
  return (
    <>
      <ContentsArea className="">
        <NavBar />
        <BadgeList />
        <Carousel></Carousel>
        <InfoArea grid={3} title="Trending this week">
          {albumList.map((item, index) => {
            return (
              <AlbumCard
                imgFile={item.imgFile}
                title={item.title}
                singer={item.singer}
                key={index}
              />
            );
          })}
        </InfoArea>
        <InfoArea grid={2} title="New album">
          <PhotoCard imgFile={nayeon} badge="K-Pop" />
          <PhotoCard imgFile={girl} badge="Pop" />
        </InfoArea>
      </ContentsArea>
      <TabBar></TabBar>
    </>
  );
};

export default MusicAppMain;
