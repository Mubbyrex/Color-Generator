import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const bcd = rgb.join(",");
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcd})` }}
    >
      <p className="percent-value">${weight}</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
