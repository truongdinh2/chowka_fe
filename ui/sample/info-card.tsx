import React, { FC, ReactNode } from 'react';

import { cn } from '@/utils/tail-merge';

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	children: ReactNode;
}

const InfoCard: FC<InfoCardProps> = ({ title, className, children }) => {
	return (
		<div className="border rounded-xl p-4 shadow-md mb-2">
			<h2 className="text-xl font-bold mb-2 uppercase">{title}</h2>
			<div className={cn('flex gap-x-3', className)}>{children}</div>
		</div>
	);
};

export default InfoCard;
