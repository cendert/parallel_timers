/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Timer } from "./timer";

// TODO: should suggest to add timers if none are present.

export const Timers = ({ timers = {}, handleDelete = () => {} }) => (
  <div
    css={{
      color: "black",
      fontSize: "2rem",
      gridArea: "content",
      overflowY: "auto",
      padding: "0 var(--lego-padding)"
    }}
  >
    {timers &&
      Object.values(timers).map((timer, index) => (
        <Timer
          key={Object.keys(timers)[index]}
          keyProp={Object.keys(timers)[index]}
          description={timer.description}
          duration={timer.duration}
          handleDelete={handleDelete}
        />
      ))}
    {Object.keys(timers).length === 0 && <Timer description={"add a timer"} />}
  </div>
);
