import Image from 'next/image';

const ImagesGallery = () => {
  return (
    <div className="grid  grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 ">
      <div className="flex justify-center">
        <Image
          src="http://via.placeholder.com/120x120"
          alt="placeholder image"
          width={120}
          height={120}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="http://via.placeholder.com/120x120"
          alt="placeholder image"
          width={120}
          height={120}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="http://via.placeholder.com/120x120"
          alt="placeholder image"
          width={120}
          height={120}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="http://via.placeholder.com/120x120"
          alt="placeholder image"
          width={120}
          height={120}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="http://via.placeholder.com/120x120"
          alt="placeholder image"
          width={120}
          height={120}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="http://via.placeholder.com/120x120"
          alt="placeholder image"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default ImagesGallery;
