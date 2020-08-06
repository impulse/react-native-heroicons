import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const BackspaceOutline = ({ size = 24, ...props }: Props) => {
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
        d="M3 12l-.707-.707a1 1 0 000 1.414L3 12zm6.414 6.414l.707-.707-.707.707zm0-12.828l.707.707-.707-.707zm1.879 7.707a1 1 0 001.414 1.414l-1.414-1.414zm5.414-2.586a1 1 0 00-1.414-1.414l1.414 1.414zm-4-1.414a1 1 0 10-1.414 1.414l1.414-1.414zm2.586 5.414a1 1 0 001.414-1.414l-1.414 1.414zM10.828 6H19V4h-8.172v2zM20 7v10h2V7h-2zm-1 11h-8.172v2H19v-2zm-8.879-.293l-6.414-6.414-1.414 1.414 6.414 6.414 1.414-1.414zm-6.414-5l6.414-6.414-1.414-1.414-6.414 6.414 1.414 1.414zM10.828 18a1 1 0 01-.707-.293l-1.414 1.414a3 3 0 002.121.879v-2zM20 17a1 1 0 01-1 1v2a3 3 0 003-3h-2zM19 6a1 1 0 011 1h2a3 3 0 00-3-3v2zm-8.172-2a3 3 0 00-2.12.879l1.413 1.414A1 1 0 0110.828 6V4zm1.88 10.707l2-2-1.415-1.414-2 2 1.414 1.414zm2-2l2-2-1.415-1.414-2 2 1.414 1.414zm-3.415-2l2 2 1.414-1.414-2-2-1.414 1.414zm2 2l2 2 1.414-1.414-2-2-1.414 1.414z"
      />
    </Svg>
  );
};

export default BackspaceOutline;
