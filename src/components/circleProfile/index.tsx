import tw from "tailwind-styled-components";
interface CircleProfileProps {
  imgFile: string;
}
const Container = tw.div`
    w-12
    h-12
`;
const Image = tw.img`
    w-full
    h-full
    rounded-full
`;

const CircleProfile = (props: CircleProfileProps) => {
  const { imgFile } = props;
  return (
    <Container>
      <Image src={imgFile} />
    </Container>
  );
};

export default CircleProfile;
