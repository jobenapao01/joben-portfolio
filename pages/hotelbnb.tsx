import Image from 'next/image'
import bnbImg from '@/public/assets/projects/bnbCover.png'
import nextJsImg from '@/public/assets/skills/nextjs.png'
import tailwindImg from '@/public/assets/skills/tailwind.png'
import mongoImg from '@/public/assets/skills/mongo.png'
import leafletImg from '@/public/assets/skills/Leaflet_logo.svg'
import cloudinaryImg from '@/public/assets/skills/cloudinary.svg'
import tsImg from '@/public/assets/skills/ts.png'
import Link from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'

const hotelbnb = ({}) => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
				<Image
					src={bnbImg}
					alt='bnb'
					className='absolute z-1 object-cover'
					fill
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>HotelBNB</h2>
					<h3>
						NextJs / Typecript / TailwindCSS / MongoDB / LeafletJs / Cloudinary
					</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app is an airbnb clone that I built using NextJs, TailwindCSS,
						MongoDB, Cloudinary for the image upload and LeafletJs for the map
						functionality. This app allows the user to add their properties for
						other users to reserve their transient home to rent. The renting
						users are also able to cancel their reservations and keep track of
						the properties that they have reserved.
					</p>

					<div className=' mt-6 '>
						<a
							href='https://hotelbnb.vercel.app/'
							className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-105 duration-300 transition ease-linear px-8 py-2 mr-8'>
							Demo
						</a>
						<a
							href='https://github.com/jobenapao01/hotelbnb'
							className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-105 duration-300 transition ease-linear px-8 py-2'>
							Code
						</a>
					</div>

					{/* <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button> */}
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='flex text-gray-600 py-2 items-center gap-4'>
								<Image
									src={nextJsImg}
									alt='next'
									width={30}
									height={30}
									className='object-cover'
								/>
								NextJs
							</p>

							<p className='flex text-gray-600 py-2 items-center gap-4'>
								<Image
									src={tsImg}
									alt='next'
									width={30}
									height={30}
									className='object-cover'
								/>
								Typescript
							</p>

							<p className='flex text-gray-600 py-2 items-center gap-4'>
								<Image
									src={tailwindImg}
									alt='tailwind'
									width={30}
									height={30}
									className='object-cover'
								/>
								TailwindCSS
							</p>
							<p className='flex text-gray-600 py-2 items-center gap-4'>
								<Image
									src={mongoImg}
									alt='mongodb'
									width={30}
									height={30}
									className='object-cover'
								/>
								MongoDB
							</p>
							<p className='flex text-gray-600 py-2 items-center gap-4'>
								<Image
									src={leafletImg}
									alt='leaflet'
									width={30}
									height={30}
									className='object-cover'
								/>
								LeafletJs
							</p>
							<p className='flex text-gray-600 py-2 items-center gap-4'>
								<Image
									src={cloudinaryImg}
									alt='leaflet'
									width={30}
									height={30}
									className='object-cover'
								/>
								Cloudinary
							</p>
						</div>
					</div>
				</div>
				<Link
					href='/#projects'
					className='w-[30px] h-[30px] bg-gray-200 rounded-full hover:scale-125 duration-300 transition'>
					<BiLeftArrowAlt size={30} />
				</Link>
			</div>
		</div>
	)
}

export default hotelbnb
