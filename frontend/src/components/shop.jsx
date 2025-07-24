// Shop.jsx
import React, { useState } from "react";
import {Link} from 'react-router-dom';
function Shop({ title, image, description,url="" }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <div>
    <Link to={url}>
    <div 
  className="rounded-xl shadow-xl bg-gray-100 overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80"
  onMouseMove={handleMove}
  onMouseLeave={() => setTilt({ x: 0, y: 0 })}
  style={{
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
  }}
>
  {/* Image */}
  <img src={image} alt={title} className="mt-10 w-40 h-40 object-cover block mx-auto mt-4" />

  {/* Title (Add margin-top if you want more space from image) */}
  <h3 className="mt-10 px-4 mb-2 text-lg font-semibold text-gray-800 text-center">
    {title}
  </h3>
  
  <p className="text-sm px-4 pb-6 text-gray-600 w-5/6 text-center mx-auto">
    {description}
  </p>
</div>
</Link>
</div>

  );
}

export default Shop;
