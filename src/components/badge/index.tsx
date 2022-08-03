import tw from "tailwind-styled-components";

interface BadgeProps {
  children: string;
  selected?: boolean;
  onClick?: () => void;
  //   fontSize:
}
const Container = tw.div`
    inline-block
    px-3 py-1 
    rounded-2xl
    ${(props: BadgeProps) =>
      props.selected ? "bg-[#68cad9] text-white" : "bg-none text-[#bdbdbd]"};
    
`;

const Contents = tw.p`
    text-sm
`;
const Badge = (props: BadgeProps) => {
  const { children, selected = false, onClick } = props;

  return (
    <Container selected={selected} onClick={onClick}>
      <Contents>{children}</Contents>
    </Container>
  );
};

export default Badge;
