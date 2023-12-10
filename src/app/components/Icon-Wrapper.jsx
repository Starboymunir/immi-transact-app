import React from "react";
//import { IconWrapper } from "./IconWrapper";
import "../globals.css";
import "./styles/buttons.css";
import "./styles/hero-section.css"

export const IconWrapper = () => {
  return (
    <div className="box">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <IconWrapper className="icon-wrapper-instance" size="one-hundred-and-twenty-eight-px" union />
          <IconWrapper className="icon-wrapper-instance" size="one-hundred-and-four-px" union />
          <IconWrapper className="icon-wrapper-instance" size="sixty-four-px" union />
          <IconWrapper className="icon-wrapper-instance" size="forty-eight-px" union />
          <IconWrapper className="icon-wrapper-instance" size="thirty-two-px" union />
          <IconWrapper className="icon-wrapper-instance" size="twenty-four-px" union />
          <IconWrapper className="icon-wrapper-instance" size="twenty-two-px" union />
          <IconWrapper className="icon-wrapper-instance" size="twenty-px" union />
          <IconWrapper className="icon-wrapper-instance" size="eighteen-px" union />
          <IconWrapper className="icon-wrapper-instance" size="sixteen-px" union />
          <IconWrapper className="icon-wrapper-instance" size="fourteen-px" union />
          <IconWrapper className="icon-wrapper-instance" size="twelve-px" union />
          <IconWrapper className="icon-wrapper-instance" size="ten-px" union />
          <IconWrapper className="icon-wrapper-instance" size="one-hundred-and-twenty-eight-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="one-hundred-and-four-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="sixty-four-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="forty-eight-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="thirty-two-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="twenty-four-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="twenty-two-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="twenty-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="eighteen-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="sixteen-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="fourteen-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="twelve-px" union={false} />
          <IconWrapper className="icon-wrapper-instance" size="ten-px" union={false} />
        </div>
      </div>
    </div>
  );
};
