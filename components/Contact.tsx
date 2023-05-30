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
	const formRef = useRef()
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
				'service_pvwkgl3',
				'template_l9q1c5v',
				{
					from_name: form.name,
					to_name: 'Joben',
					from_email: form.email,
					to_email: 'jobenapao10@gmail.com',
					message: form.message,
				},
				'sQ-JkmBp-qNBSpzSO'
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
				(error) => {
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
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* Left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<div>
								<Image
									src='https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
									alt='/'
									width={500}
									height={500}
									className='rounded-xl hover:scale-105 ease-in duration-300 transition'
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
								<p className='uppercase pt-8 text-gray-500'>Connect with me</p>
								<div className='flex items-center justify-between max-w-[330px] py-4'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 transition'>
										<a href='https://www.linkedin.com/feed/'>
											<FaLinkedinIn />
										</a>
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 transition'>
										<a href='https://github.com/'>
											<FaGithub />
										</a>
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 transition'>
										<AiOutlineMail />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 transition'>
										<BsPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right */}
					<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								ref={formRef}
								onSubmit={handleSubmit}>
								<div className='flex flex-col py-2'>
									<label className='text-sm py-2 uppercase'>Name</label>
									<input
										type='text'
										className='border-2 rounded-lg p-3 flex border-gray-300'
										name='name'
										value={form.name}
										onChange={handleChange}
										placeholder="What's your name?"
									/>
								</div>

								<div className='flex flex-col py-2'>
									<label className='text-sm py-2 uppercase'>Email</label>
									<input
										type='email'
										className='border-2 rounded-lg p-3 flex border-gray-300'
										name='email'
										value={form.email}
										onChange={handleChange}
										placeholder="What's your email?"
									/>
								</div>

								<div className='flex flex-col py-2'>
									<label className='text-sm py-2 uppercase'>Message</label>

									<textarea
										rows={7}
										name='message'
										value={form.message}
										onChange={handleChange}
										placeholder='What do you want to say?'
										className='border-2 rounded-lg p-3 border-gray-300'
									/>
								</div>

								<button className='uppercase w-full p-4 text-gray-100 mt-4'>
									{loading ? 'Sending...' : 'Send Message'}
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					{/* <Link
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 transition">
              <HiOutlineChevronDoubleUp
                size={30}
                className="m-auto text-[#5651e5]"
              />
            </div>
          </Link> */}
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 transition'>
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
