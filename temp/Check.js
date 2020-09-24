import * as React from "react";

function SvgCheck(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M18.441 7.037a.961.961 0 00-1.364 0L9.92 14.201l-3.006-3.016a.982.982 0 10-1.364 1.412l3.689 3.689a.961.961 0 001.364 0l7.838-7.839a.961.961 0 000-1.412z"
        data-name="check"
      />
    </svg>
  );
}

export default SvgCheck;
