import Image from "next/image";

const About = () => {
  return (
    <div className="flex space-x-8">
      <Image
        src="https://picsum.photos/640/640"
        width={640}
        height={640}
        alt="placeholder image"
      />
      <div>
        <h2 className="text-2xl mb-5">About Me</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore modi
          natus minima saepe voluptatum molestiae, vel dignissimos ut qui vero
          possimus ullam sint ea necessitatibus nulla illum cupiditate. Tempora,
          atque.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore modi
          natus minima saepe voluptatum molestiae, vel dignissimos ut qui vero
          possimus ullam sint ea necessitatibus nulla illum cupiditate. Tempora,
          atque.
        </p>
      </div>
    </div>
  );
};

export default About;
