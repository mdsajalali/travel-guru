import React from "react";
import "./Gallery.css"



const Gallery = () => {
  return (
    <div className="container" id="content">
      <div className="text-center mt-5">
        <h3>Tour Photos</h3>
        <h1>Gallery</h1>
        <div className="image-gallery mt-5">
            <img className="gallery-img"  src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <img  className="gallery-img" src="https://images.pexels.com/photos/3183613/pexels-photo-3183613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <img  className="gallery-img" src="https://images.pexels.com/photos/3061217/pexels-photo-3061217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <img  className="gallery-img" src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <img  className="gallery-img" src="https://images.pexels.com/photos/4436363/pexels-photo-4436363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
            <img  className="gallery-img" src="https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <img  className="gallery-img" src="https://images.pexels.com/photos/3885493/pexels-photo-3885493.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
            <img  className="gallery-img" src="https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Gallery;
