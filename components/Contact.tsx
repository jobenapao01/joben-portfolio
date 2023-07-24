import { FC, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
	const formRef = useRef(null)
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [loading, setLoading] = useState(false)

	const handleChange = (e: any) => {
		const { name, value } = e.target

		setForm({
			...form,
			[name]: value,
		})
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		setLoading(true)

		if (form.name === '' || form.email === '' || form.message === '') {
			setLoading(false)
			return toast.error('Please fill up the contact fields.', { id: 'error' })
		}

		emailjs
			.send(
				'service_d3y3d44',
				'template_4e2rzeo',
				{
					from_name: form.name,
					to_name: 'Joben',
					from_email: form.email,
					to_email: 'work.jobenapao@gmail.com',
					message: form.message,
				},
				'EL89KnRJQitmqH_LE'
			)
			.then(
				() => {
					setLoading(false)
					toast.success(
						'Thank you I will get back to you as soon as possible.',
						{ id: 'success' }
					)
					setForm({
						name: '',
						email: '',
						message: '',
					})
				},
				(error:any) => {
					setLoading(false)
					console.log(error)
					toast.error('Something went wrong', { id: 'error' })
				}
			)
	}

	return (
		<div
			className='w-full lg:h-screen'
			id='contact'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5] ml-2'>
					Contact
				</p>
				<h2 className='py-4 ml-2'>Get In Touch</h2>
				<div className='grid gap-8 lg:grid-cols-5'>
					{/* Left */}
					<div className='w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl'>
						<div className='h-full lg:p-4'>
							<div>
								<Image
									src='https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
									alt='/'
									width={500}
									height={500}
									className='transition duration-300 ease-in rounded-xl hover:scale-105'
								/>
							</div>

							<div>
								<h2 className='py-3 font-semibold'>Joben Apao</h2>
								<p className='text-gray-400'>Frontend Developer</p>
								<p className='py-4 tracking-wider'>
									I am available for freelance or full-time positions. Contact
									me and lets talk.
								</p>
							</div>

							<div>
								<p className='pt-8 text-gray-500 uppercase'>Connect with me</p>
								<div className='flex items-center justify-between max-w-[330px] py-4'>
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

					{/* Right */}
					<div className='w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								ref={formRef}
								onSubmit={handleSubmit}>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Name</label>
									<input
										type='text'
										className='flex p-3 border-2 border-gray-300 rounded-lg'
										name='name'
										value={form.name}
										onChange={handleChange}
										placeholder="What's your name?"
									/>
								</div>

								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Email</label>
									<input
										type='email'
										className='flex p-3 border-2 border-gray-300 rounded-lg'
										name='email'
										value={form.email}
										onChange={handleChange}
										placeholder="What's your email?"
									/>
								</div>

								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Message</label>

									<textarea
										rows={7}
										name='message'
										value={form.message}
										onChange={handleChange}
										placeholder='What do you want to say?'
										className='p-3 border-2 border-gray-300 rounded-lg'
									/>
								</div>

								<button className='w-full p-4 mt-4 text-gray-100 uppercase'>
									{loading ? 'Sending...' : 'Send Message'}
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='p-4 transition duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 animate-bounce'>
							<HiOutlineChevronDoubleUp
								size={30}
								className='m-auto text-[#5651e5]'
							/>
						</div>
					
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
