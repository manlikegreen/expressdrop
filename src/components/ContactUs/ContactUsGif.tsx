import Image, { StaticImageData } from "next/image";
import React from "react";

interface ContactUsGifProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
}

const ContactUsGif: React.FC<ContactUsGifProps> = ({ src, alt, width }) => {
  return <Image src={src} alt={alt} width={width} />;
};

export default ContactUsGif;
