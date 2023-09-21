import React, { FC, ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

const InfoCard: FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md mb-2">
      <h2 className="text-xl font-bold mb-2 uppercase">{title}</h2>
      <div className='flex gap-x-3'>
      {children}
      </div>
    </div>
  );
};

export default InfoCard;
