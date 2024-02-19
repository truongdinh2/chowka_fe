import { FaTiktok } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { IoShareSocial } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';

import { AppLink } from '../common/link';

export const Social = () => {
	return (
		<div className="flex gap-4">
			<div className="bg-[#d9d9d9] px-16 py-4 flex gap-2 flex-col rounded-lg">
				<div className="flex justify-center">
					<span className="text-3xl">
						<IoShareSocial />
					</span>
				</div>
				<div className="font-bold ">Mạng xã hội</div>
				<div className="flex justify-center gap-3">
					<AppLink href="/">
						<span className="text-xl">
							<FaSquareFacebook />
						</span>
					</AppLink>
					<AppLink href="/">
						<span className="text-xl">
							<FaTiktok />
						</span>
					</AppLink>
				</div>
			</div>
			<div className="bg-[#c6c6c6] px-16 py-4 flex gap-2 flex-col rounded-lg">
				<div className="flex justify-center">
					<span className="text-3xl">
						<IoShareSocial />
					</span>
				</div>
				<div className="font-bold text-center">Lời cảm ơn</div>
				<div className="flex justify-center gap-1">
					<AppLink href="/">
						<span>Tại hạ cảm ơn đại nhân như thao thao ...</span>
					</AppLink>
				</div>
			</div>
			<div className="bg-[#c6c6c6] px-16 py-4 flex gap-2 flex-col rounded-lg">
				<div className="flex justify-center">
					<AppLink href="/">
						<span className="text-3xl">
							<MdOutlineReviews />
						</span>
					</AppLink>
				</div>
				<div className="font-bold text-center">Góp ý HỖ TRỢ nhận</div>
				<div className="font-bold text-center">giảm giá</div>
			</div>
		</div>
	);
};
