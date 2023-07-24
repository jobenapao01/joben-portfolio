import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
	return (
		<div
			className='w-full h-screen text-center'
			id='home'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='text-sm tracking-widest text-gray-600 uppercase'>
						Lets Build Something Together
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, Im <span className='text-[#5651e5]'>Joben</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A Front-End Developer</h1>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto text-justify'>
						As a frontend developer, I am passionate about creating beautiful,
						functional, and user-friendly websites and applications. With my
						expertise in HTML, CSS, and JavaScript Frameworks (ReactJs, NextJs),
						I strive to create seamless user experiences that are both
						aesthetically pleasing and intuitive.
					</p>
					<p className='py-4 text-gray-600 max-w-[70%]  m-auto text-justify hidden sm:block'>
						I believe that good design and development go hand in hand, and I am
						committed to creating visually stunning and engaging websites that
						are also optimized for performance and functionality. So take a look
						at my portfolio, and dont hesitate to reach out if you have any
						questions or if you are interested in working together on your next
						project.
					</p>

					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='p-6 transition duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<Link href='https://www.linkedin.com/in/joben-apao-490220183/' target='_blank'>
								<FaLinkedinIn />
							</Link>
						</div>
						<div className='p-6 transition duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<Link href='https://github.com/jobenapao01' target='_blank'>
								<FaGithub />
							</Link>
						</div>
						<div className='p-6 transition duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<AiOutlineMail />
						</div>
						<div className='p-6 transition duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<BsPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
