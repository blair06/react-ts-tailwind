import tw from "tailwind-styled-components";
interface PhotoCardProps {
  imgFile: string;
  badge?: string;
  desc?: string;
  className?: string;
}
const Container = tw.div`
    w-full
    h-full
    relative 
    rounded-2xl
`;
const Image = tw.img`
    rounded-2xl mb-3
    w-full
    object-cover
    h-full
`;
const Badge = tw.div`
    absolute top-3 left-3 inline-block
    px-3 py-1
    rounded-2xl
    bg-white text-[#68cad9]
`;
const Desc = tw.p`
    text-white 
    text-2xl 
    absolute 
    bottom-7 
    left-3 
    font-bold 
    w-8/12
`;
const PhotoCard = (props: PhotoCardProps) => {
  const { imgFile, badge, desc, className } = props;
  return (
    <Container className={className}>
      {badge && (
        <Badge>
          <p className="text-xs font-medium">{badge}</p>
        </Badge>
      )}
      <Image src={imgFile} />

      {desc && <Desc className="">{desc}</Desc>}
    </Container>
  );
};

export default PhotoCard;
