import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.webp"
      width={150}
      height={150}
      alt="flyson ai logo"
      priority
    />
  );
};

export default Logo;
