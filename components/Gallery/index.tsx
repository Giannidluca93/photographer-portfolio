import GalleryImage from "../GalleryImage";

const imagesPlaceholder = [
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
  {
    src: "https://picsum.photos/120/120",
    alt: "placeholder",
    height: 120,
    width: 120,
  },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-3 gap-1 max-w-[362px] sm:max-w-[483px] md:max-w-[725px] lg:max-w-[1090px] lg sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-9  m-auto">
      {imagesPlaceholder.map((image) => {
        return (
          <GalleryImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
