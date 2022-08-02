import tw from "tailwind-styled-components";
interface AlbumCardProps {
  imgFile: string;
  title: string;
  singer: string;
}
const AlbumCard = (props: AlbumCardProps) => {
  const { imgFile, title, singer } = props;
  return (
    <div className="w-full">
      <img src={imgFile} alt="albumCover" />
      <p>{title}</p>
      <p>{singer}</p>
    </div>
  );
};

export default AlbumCard;
