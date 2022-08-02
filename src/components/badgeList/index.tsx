import Badge from "components/badge";
import { useState } from "react";
import tw from "tailwind-styled-components";
const textArr = ["Overview", "Track", "Album", "Follow"];
const Container = tw.div`
    flex justify-between
    my-5
`;
const BadgeList = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <Container>
      {textArr.map((item, index) => {
        return (
          <Badge
            key={index}
            selected={selected === index ? true : false}
            onClick={() => setSelected(index)}
          >
            {item}
          </Badge>
        );
      })}
    </Container>
  );
};

export default BadgeList;
