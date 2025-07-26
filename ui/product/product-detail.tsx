'use client';

import { useState } from 'react';
import { useRouter } from '@/navigation';
import AoModel from '@/public/imgs/ao-model.png';
import { Button } from '@material-tailwind/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import AppImage from '../common/image';

interface Props {
	productId?: string | number;
}

const sizes = ['36', '37', '38', '39'];
const productName = 'Áo Phao Nam 3s Plus';

export const ProductDetail = ({ productId }: Props) => {
	const router = useRouter();

	const [isLiked, setIsLiked] = useState(false);
	const [selectedSize, setSelectedSize] = useState('');
	const [openSizeModal, setO]()
