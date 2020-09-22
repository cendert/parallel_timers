/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "../components/button";

const addPresetTimerStyle = {
  gridArea: "content",
  listStyleType: "none",
  margin: 0,
  padding: "var(--lego-padding)"
};

export const AddPresetTimer = ({
  handleAddPresetTimer = () => {},
  presetTimers = {}
}) => (
  <ul css={addPresetTimerStyle}>
    {Object.keys(presetTimers).map((key) => (
      <li key={key}>
        <Button onClick={() => handleAddPresetTimer(key)}>
          {presetTimers[key].description}
        </Button>
      </li>
    ))}
  </ul>
);
