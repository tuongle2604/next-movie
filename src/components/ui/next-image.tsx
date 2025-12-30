import Image, { ImageProps } from "next/image";

interface NextImageProps extends ImageProps {
  original?: boolean;
}

export default function NextImage({ src, original, ...props }: NextImageProps) {
  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  console.log("IMAGE_BASE_URL ", IMAGE_BASE_URL);

  const BASE_URL = original
    ? `${IMAGE_BASE_URL}/original`
    : `${IMAGE_BASE_URL}/w500`;
  // src =

  return <Image src={BASE_URL + src} {...props} />;
}
