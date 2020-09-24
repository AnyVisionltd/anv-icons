import * as React from "react";

function SvgDrag(props) {
  return (
    <svg width={24} height={24} {...props}>
      <defs>
        <style />
      </defs>
      <g id="Drag_svg__prefix__Drag">
        <g id="Drag_svg__prefix__dots" transform="translate(7.5 4.5)">
          <circle
            id="Drag_svg__prefix__Ellipse_357"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="Drag_svg__prefix__cls-3"
          />
          <circle
            id="Drag_svg__prefix__Ellipse_362"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="Drag_svg__prefix__cls-3"
            transform="translate(6)"
          />
          <circle
            id="Drag_svg__prefix__Ellipse_358"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="Drag_svg__prefix__cls-3"
            transform="translate(0 6)"
          />
          <circle
            id="Drag_svg__prefix__Ellipse_361"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="Drag_svg__prefix__cls-3"
            transform="translate(6 6)"
          />
          <circle
            id="Drag_svg__prefix__Ellipse_359"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="Drag_svg__prefix__cls-3"
            transform="translate(0 12)"
          />
          <circle
            id="Drag_svg__prefix__Ellipse_360"
            cx={1.5}
            cy={1.5}
            r={1.5}
            className="Drag_svg__prefix__cls-3"
            transform="translate(6 12)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgDrag;
