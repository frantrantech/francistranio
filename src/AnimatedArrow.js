function AnimatedArrow() {
    return (
      <svg
        id="eR8qKGpkySL1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <rect
          className="rectanglePart"
          width="5"
          height="0"
          rx="0"
          ry="0"
          transform="translate(115.301358 24.193549)"
          fill="#e5e5e5"
          strokeWidth="0"
        >
          <animate
            attributeName="height"
            from="50"
            to="185"
            dur="1s"
            fill="freeze"
          />
        </rect>
        <polygon
          points="0,-30 25.980762,15 -25.980762,15 0,-30"
          transform="translate(150,209) rotate(180)"
          fill="#e5e5e5"
          strokeWidth="0"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0 0"
            to="0 100"
            dur="1s"
            fill="freeze"
          />
        </polygon>
      </svg>
    )
}  

  export default AnimatedArrow