/** @jsx jsx */
import { jsx } from "@emotion/core";

const addTimerTypeChoiceStyle = {
  display: "flex",
  flexDirection: "column",
  gridArea: "content"
};

export const AddTimerTypeChoice = ({ children }) => (
  <div css={addTimerTypeChoiceStyle}>{children}</div>
);
