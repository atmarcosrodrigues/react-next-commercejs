import Image from "next/image";

const Banner = () => (
  <div className="banner">
    <Image
      alt="Banner image"
      src="/images/banner.jpeg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
);

export default Banner;
