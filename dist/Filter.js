import * as React from "react";

function SvgFilter(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M5.25 9h13.5a.75.75 0 100-1.5H5.25a.75.75 0 100 1.5zM15 15H9a.75.75 0 000 1.5h6a.75.75 0 000-1.5zm1.875-3.75h-9.75a.75.75 0 000 1.5h9.75a.75.75 0 000-1.5z"
        data-name="Filter"
      />
    </svg>
  );
}

export default SvgFilter;
