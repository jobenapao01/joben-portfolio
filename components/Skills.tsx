import Image from 'next/image'
import { FC } from 'react'
import nextImg from '@/public/assets/skills/nextjs.png'
import reactImg from '@/public/assets/skills/react.png'
import nodeImg from '@/public/assets/skills/node.png'
import mongoImg from '@/public/assets/skills/mongo.png'
import tailwindImg from '@/public/assets/skills/tailwind.png'
import htmlImg from '@/public/assets/skills/html.png'
import cssImg from '@/public/assets/skills/css.png'
import githubImg from '@/public/assets/skills/github1.png'
import ts from '@/public/assets/skills/ts.png'

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
	return (
		<div
			className='w-full lg:h-screen p-2'
			id='skills'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5] ml-2'>
					Skills
				</p>
				<h2 className='py-4 ml-2'>What I Can Do</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={nextImg}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>NextJs</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={reactImg}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>ReactJs</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={ts}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>Typescript</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={nodeImg}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>NodeJs</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={mongoImg}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={tailwindImg}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>TailwindCSS</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={githubImg}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>Github</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={htmlImg}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>HTMl</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={cssImg}
									alt='/'
									width={64}
									height={64}
								/>
							</div>
							<div className='flex flex-col justify-center items-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
