import AlbumCard from "components/albumCard";
import troye from "asset/img/troye.jpeg";
import BadgeList from "components/badgeList";
import NavBar from "components/navBar";
import TabBar from "components/tabBar";
import tw from "tailwind-styled-components";
import InfoArea from "components/InfoArea";
const ContentsArea = tw.div`
m-4 

`;
// bg-slate-500
const MusicAppMain = () => {
  return (
    <>
      <ContentsArea className="">
        <NavBar></NavBar>
        <BadgeList></BadgeList>
        <InfoArea>
          <AlbumCard
            imgFile={troye}
            title={"Blue Night"}
            singer={"Troye Sivan"}
          ></AlbumCard>

          <AlbumCard
            imgFile={troye}
            title={"Blue Night"}
            singer={"Troye Sivan"}
          ></AlbumCard>
          <AlbumCard
            imgFile={troye}
            title={"Blue Night"}
            singer={"Troye Sivan"}
          ></AlbumCard>
        </InfoArea>
      </ContentsArea>
      <TabBar></TabBar>
    </>
  );
};

export default MusicAppMain;
