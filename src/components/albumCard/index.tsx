import tw from "tailwind-styled-components";
interface AlbumCardProps {
  imgFile: string;
  title: string;
  singer: string;
}

const Container = tw.div`
    w-full
`;
const Image = tw.img`
    border rounded-2xl mb-3
`;
const Title = tw.p`
    text-m text-gray-500 
    font-semibold
`;
const Singer = tw.p`
    text-xs text-gray-400 
    font-semibold
`;
const AlbumCard = (props: AlbumCardProps) => {
  const { imgFile, title, singer } = props;
  return (
    <Container>
      <Image src={imgFile} alt="albumCover" />
      <Title>{title}</Title>
      <Singer>{singer}</Singer>
    </Container>
  );
};

export default AlbumCard;
