import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";

interface InfoAreaProps {
  children: ReactNode;
  grid?: number;
}
const Container = tw.div`
    grid gap-x-3
    ${(props: InfoAreaProps) => `grid-cols-${props.grid}`}
`;
const InfoArea = (props: InfoAreaProps) => {
  const { children, grid = 3 } = props;
  return <Container grid={grid}>{children}</Container>;
};

export default InfoArea;
