import Image from 'next/image'
import netflixImg from '@/public/assets/projects/netflix.png'
import nextJsImg from '@/public/assets/skills/nextjs.png'
import tailwindImg from '@/public/assets/skills/tailwind.png'
import mongoImg from '@/public/assets/skills/mongo.png'
import tsImg from '@/public/assets/skills/ts.png'
import Link from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'

const netflix = ({}) => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
				<Image
					src={netflixImg}
					alt='bnb'
					className='absolute object-cover z-1'
					fill
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Netflix clone</h2>
					<h3>NextJs / Typescript / TailwindCSS / MongoDB</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app is a netflix clone that I built using NextJs, TailwindCSS
						and MongoDB. This app allows the user to add and watch their
						favorite movies.
					</p>
					<div className='mt-6 '>
						<Link
							href='https://nietflix-omega.vercel.app/'
							target='_blank'
							className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-105 duration-300 transition ease-linear px-8 py-2 mr-8'>
							Demo
						</Link>
						<Link
							href='https://github.com/jobenapao01/nietflix'
							target='_blank'
							className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-105 duration-300 transition ease-linear px-8 py-2'>
							Code
						</Link>
					</div>
				</div>
				<div className='col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
					<div className='p-2'>
						<p className='pb-2 font-bold text-center'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='flex items-center gap-4 py-2 text-gray-600'>
								<Image
									src={nextJsImg}
									alt='next'
									width={30}
									height={30}
									className='object-cover'
								/>
								NextJs
							</p>

							<p className='flex items-center gap-4 py-2 text-gray-600'>
								<Image
									src={tsImg}
									alt='next'
									width={30}
									height={30}
									className='object-cover'
								/>
								Typescript
							</p>

							<p className='flex items-center gap-4 py-2 text-gray-600'>
								<Image
									src={tailwindImg}
									alt='tailwind'
									width={30}
									height={30}
									className='object-cover'
								/>
								TailwindCSS
							</p>
							<p className='flex items-center gap-4 py-2 text-gray-600'>
								<Image
									src={mongoImg}
									alt='mongodb'
									width={30}
									height={30}
									className='object-cover'
								/>
								MongoDB
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

export default netflix
