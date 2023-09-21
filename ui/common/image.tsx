import Image from 'next/image';

import React from 'react';

import { cn } from '@/utils/tail-merge';

// Định nghĩa kiểu props cho component Image
type ImageProps = React.ComponentProps<typeof Image>;

// Định nghĩa kiểu props cho component AppImage
interface AppImageProps extends ImageProps {
	className?: string;
	classImg?: string;
}

// Component AppImage
const AppImage: React.FC<AppImageProps> = ({ className, classImg, ...props }) => {
	return (
		<div className={cn('relative overflow-hidden', className)}>
			{/* Sử dụng component Image từ thư viện next/image */}
			<Image
				{...props}
				className={cn('w-full h-auto transition-transform transform hover:scale-105 object-cover cursor-pointer', classImg)}
			/>
		</div>
	);
};

export default AppImage;
