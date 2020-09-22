/** @jsx jsx */
import { jsx } from "@emotion/core";

// TODO: refactor to skip this step entirely
// as in, offer the multi-select presets and
// a add custom timer button beneath.

const addTimerTypeChoiceStyle = {
  display: "flex",
  flexDirection: "column",
  gridArea: "content"
};

export const AddTimerTypeChoice = ({ children }) => (
  <div css={addTimerTypeChoiceStyle}>{children}</div>
);
