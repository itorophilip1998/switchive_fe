import Image from 'next/image';

interface CustomImageProps {
  src: string;
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, className }) => {
  const width = 100;
  const height = 100;

  return (
    <Image
      src={`/images/${src}`}
      alt={src}
      width={width}
      height={height}
      layout="responsive"
      priority
      className={className}
    />
  );
};

export default CustomImage;
