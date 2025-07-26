'use client';

import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@/hooks/storeH';
import logger from '@/lib/logger';
import AoModel from '@/public/imgs/ao-model.png';
import { increment } from '@/state/store/counterSlice';
import { AppButton } from '@/ui/common/button';

import AppImage from '../common/image';
import { AppLink } from '../common/link';
import Notification from '../common/notifications';
import { useLoading } from '../context/loading-provider';
import AppSelect from '../select/app-select';
import InfoCard from './info-card';

const buttonVariants = ['default', 'destructive', 'secondary', 'warning', 'link', 'success'] as const;
const selectOptions1 = [{ value: '1', label: 'option 1' }];
const selectOptions2 = ['opt 1', 'opt 2'];

function Sample
