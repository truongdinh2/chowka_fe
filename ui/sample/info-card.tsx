import React, { FC, ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

const InfoCard: FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2 uppercase">{title}</h2>
      {children}
    </div>
  );
};

export default InfoCard;
