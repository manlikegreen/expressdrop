import Image, { StaticImageData } from "next/image";
import React from "react";

interface AnimatedGifProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
}

const AnimatedGif: React.FC<AnimatedGifProps> = ({ src, alt, width }) => {
  return <Image src={src} alt={alt} width={width} />;
};

export default AnimatedGif;
