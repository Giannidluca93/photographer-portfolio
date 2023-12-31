import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  text: string;
};

const GalleryImage: FC<Props> = ({ src, alt, width, height, text }) => {
  return (
    <div className="flex justify-center cursor-pointer">
      <div className="relative flex">
        <figcaption className="absolute flex justify-center items-center w-full h-full text-white bg-black hover:bg-opacity-0 bg-opacity-60">
          {text}
        </figcaption>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </div>
  );
};

export default GalleryImage;
