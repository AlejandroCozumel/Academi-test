import React from "react";
import image1 from "../images/gallery-1.jpeg";
import image2 from "../images/gallery-2.jpg";
import image3 from "../images/sam.jpg";
import video from "../images/video.mp4";

const Gallery = () => {
  return (
    <css-gallery>
      <input type="checkbox" className="wide" />
      <gallery-item cursor g1>
        <img
          src="https://dalia-cdn.s3.amazonaws.com/asset/image/e3200f68-d10b-41bd-9bef-aeac70e9e097/IMAGE_KIREN_1.png"
          alt="image1"
        />
      </gallery-item>
      <gallery-item cursor g2>
        <img src="https://dalia-cdn.s3.amazonaws.com/asset/image/4880eb80-69c5-4193-8950-99271562a7df/PLATAFORMA_GABY_IMAGE.png" alt="image1" />
      </gallery-item>
      <gallery-item cursor g3>
        <iframe
          src="https://www.youtube.com/embed/o7DyPWfmf3w"
          frameborder="0"
        ></iframe>
      </gallery-item>
      <gallery-item cursor g4>
        <video paused muted loop controls poster="https://dalia-cdn.s3.amazonaws.com/asset/image/646b764a-c3ad-4220-aba5-8648234287ac/mayra-540x460.png">
          <source src={video} type="video/mp4" />
        </video>
      </gallery-item>
    </css-gallery>
  );
};

export default Gallery;
