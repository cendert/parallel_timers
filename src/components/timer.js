import React from "react";

export const Timer = ({description = 'timer', time = 1000}) =>
    <div>
        <div>
            {description}
        </div>
        <div>
            {time}
        </div>
    </div>;
