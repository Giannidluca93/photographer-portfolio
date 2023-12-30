import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const GalleryImage: FC<Props> = ({ src, alt, width, height }) => {
  return (
    <div className="flex justify-center cursor-pointer">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default GalleryImage;
