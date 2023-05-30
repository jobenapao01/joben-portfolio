import { useState, useCallback, useEffect } from 'react'
// import { Link, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import navLogo from '@/public/assets/navLogo.png'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const [navBg, setNavBg] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState('#1f2937')

	const router = useRouter()

	useEffect(() => {
		if (
			router.asPath === '/netflix' ||
			router.asPath === '/hotelbnb' ||
			router.asPath === '/tweety'
		) {
			setNavBg('transparent')
			setLinkColor('#ecf0f3')
		} else {
			setNavBg('#ecf0f3')
			setLinkColor('#1f2937')
		}
	}, [router])

	const handleNav = useCallback(() => {
		setNav(!nav)
	}, [nav])

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}

		window.addEventListener('scroll', handleShadow)
	}, [])

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100]'
					: 'fixed w-full h-20 z-[100]'
			}>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<Image
						src={navLogo}
						alt='NavLogo'
						width={150}
						height={80}
					/>
				</Link>

				<div>
					<ul
						className='hidden md:flex'
						style={{ color: `${linkColor}` }}>
						<Link href='/'>
							<li
								className={
									'ml-10 text-sm uppercase border-b-[1px] hover:border-b-[#333]'
								}>
								Home
							</li>
						</Link>
						<Link href='/#about'>
							<li
								className={
									'ml-10 text-sm uppercase border-b-[1px] hover:border-b-[#333]'
								}>
								About
							</li>
						</Link>
						<Link href='/#skills'>
							<li className='ml-10 text-sm uppercase border-b-[1px] hover:border-b-[#333]'>
								Skills
							</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-sm uppercase border-b-[1px] hover:border-b-[#333]'>
								Projects
							</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-sm uppercase border-b-[1px] hover:border-b-[#333]'>
								Contact
							</li>
						</Link>
					</ul>

					<div
						className='md:hidden cursor-pointer'
						onClick={handleNav}>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Backdrop Menu */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''
				}>
				{/* SideDrawer Menu */}
				<div
					className={
						nav
							? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 transition'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500  transition-all'
					}>
					<div>
						<div className='flex justify-between w-full items-center'>
							<Link
								href='/'
								onClick={handleNav}>
								<Image
									src={navLogo}
									alt='NavLogo'
									width={87}
									height={35}
								/>
							</Link>

							<div
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
								onClick={handleNav}>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-4'>
								Lets build something legendary together
							</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							<Link
								href='/'
								onClick={handleNav}>
								<li className='py-4 text-sm'>Home</li>
							</Link>
							<Link
								href='/#about'
								onClick={handleNav}>
								<li className='py-4 text-sm'>About</li>
							</Link>
							<Link
								href='/#skills'
								onClick={handleNav}>
								<li className='py-4 text-sm'>Skills</li>
							</Link>
							<Link
								href='/#projects'
								onClick={handleNav}>
								<li className='py-4 text-sm'>Projects</li>
							</Link>
							<Link
								href='/#contact'
								onClick={handleNav}>
								<li className='py-4 text-sm'>Contact</li>
							</Link>
						</ul>

						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[#5651e5]'>
								Let us connect
							</p>
							{/* Icons */}
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 transition'>
									<FaLinkedinIn />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 transition'>
									<FaGithub />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 transition'>
									<AiOutlineMail />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 transition'>
									<BsPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
