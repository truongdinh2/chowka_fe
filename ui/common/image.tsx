import Image from 'next/image';
import React from 'react';

type ImageProps = React.ComponentProps<typeof Image>;

interface AppImageProps extends ImageProps {
  className?: string;
}

const AppImage: React.FC<AppImageProps> = ({ className = '', ...props }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        {...props}
        className="transition-transform transform hover:scale-105"
      />
    </div>
  );
};

export default AppImage;