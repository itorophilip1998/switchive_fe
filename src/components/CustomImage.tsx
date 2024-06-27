import Image from 'next/image';

interface CustomImageProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, className, width = 100, height = 100 }) => {
  return (
    <Image
      src={`/images/${src}`}
      alt={src}
      width={width}
      height={height}
      layout="responsive"
      draggable="false"
      className={className}
    />
  );
};

export default CustomImage;
