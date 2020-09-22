/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "../components/button";

// TODO: could be better if it supported multi-select.

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
