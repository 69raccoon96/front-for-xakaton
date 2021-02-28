import React from "react";

import { SPageWrapper } from "../styles";
import { SIframe } from "./styles";

const TrajectoryMap: React.FC = () => {
  return (
    <SPageWrapper>
      <SIframe
        title="person trajectory"
        width="768"
        height="432"
        src="https://miro.com/app/live-embed/o9J_lX7tW98=/?moveToViewport=-1580,-757,2647,1390"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      />
    </SPageWrapper>
  );
};

export { TrajectoryMap };
