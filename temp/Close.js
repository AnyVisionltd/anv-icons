import * as React from "react";

function SvgClose(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M13.406 11.998l4.3-4.286a1.003 1.003 0 10-1.42-1.418L12 10.594l-4.286-4.3a1.003 1.003 0 00-1.418 1.418l4.3 4.286-4.3 4.286a1.003 1.003 0 101.418 1.42l4.286-4.3 4.286 4.3a1.004 1.004 0 101.42-1.42z"
        data-name="Close"
      />
    </svg>
  );
}

export default SvgClose;
