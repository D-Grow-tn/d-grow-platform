import React, { Suspense } from "react";
import Lottie from "react-lottie";

const DisplayLottie = ({ animationData, style }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Suspense>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={false}
        style={style}
      />
    </Suspense>
  );
};

export default DisplayLottie;
