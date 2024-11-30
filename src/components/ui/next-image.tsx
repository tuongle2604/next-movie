import Image, { ImageProps } from "next/image";

interface NextImageProps extends ImageProps {
  original?: boolean;
}
export default function NextImage({ src, original, ...props }: NextImageProps) {
  const BASE_URL = original
    ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/original`
    : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/w500`;
  // src =

  return <Image src={BASE_URL + src} {...props} />;
}
