import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const FolderOpenOutline = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <Path
        fill="#374151"
        d="M9 5l.707-.707L9.414 4H9v1zm2 2l-.707.707.293.293H11V7zm5 3a1 1 0 102 0h-2zM4 17V7H2v10h2zM5 6h4V4H5v2zm3.293-.293l2 2 1.414-1.414-2-2-1.414 1.414zM11 8h4V6h-4v2zm4 0a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 7a1 1 0 011-1V4a3 3 0 00-3 3h2zM2 17a3 3 0 003 3v-2a1 1 0 01-1-1H2zm14-8v1h2V9h-2zm-8 3a1 1 0 011-1V9a3 3 0 00-3 3h2zm1-1h10V9H9v2zm10 0a1 1 0 011 1h2a3 3 0 00-3-3v2zm1 1v5h2v-5h-2zm0 5a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1 1H5v2h14v-2zM5 20a3 3 0 003-3H6a1 1 0 01-1 1v2zm3-3v-5H6v5h2z"
      />
    </Svg>
  );
};

export default FolderOpenOutline;
