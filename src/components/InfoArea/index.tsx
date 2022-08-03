import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";

interface InfoAreaProps {
  children: ReactNode;
  grid?: number;
  title: string;
}
const ContentsArea = tw.div`
  grid 
  gap-x-6
  ${(props: InfoAreaProps) => `grid-cols-${props.grid}`}
  mb-10
`;
const TitleArea = tw.div`
  flex justify-between
  mb-5
`;
const InfoArea = (props: InfoAreaProps) => {
  const { children, grid = 3, title } = props;
  return (
    <>
      <TitleArea>
        <p className="text-lg font-medium text-gray-600">{title}</p>
        <p className="text-gray-300 font-medium">All</p>
      </TitleArea>
      <ContentsArea grid={grid}>{children}</ContentsArea>
    </>
  );
};

export default InfoArea;
