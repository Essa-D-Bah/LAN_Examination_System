import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/index.css';
import loginImg from '../../img/background-mini.jpg';

export default function Join() {
	const [name, setName] = useState('');
	const [matNo, setMatNo] = useState('');

	return (
		// Global container
		<div className='background-img flex justify-center items-center min-h-screen'>
			{/* Cards container */}
			<div className='flex flex-col m-6 bg-white rounded-2xl shadow-3xl md:flex-row md:m-0'>
				{/* Left-side */}
				<div className='flex flex-col space-y-4 p-6 md:p-10 '>
					<h2 className='font-sans mb-5 text-4xl text-center font-bold'>
						{' '}
						Student Join Exam
					</h2>
					<input
						type='text'
						placeholder='Mat Number'
						className='w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm'
						onChange={(event) => setName(event.target.value)}
					/>

					<input
						type='text'
						placeholder='Paper'
						className='w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm'
						onChange={(event) => setMatNo(event.target.value)}
					/>

					{/* button */}
					<Link
						className='bg-sky-400 px-2 py-4 rounded-md text-white text-center font-bold text-lg tracking-wider hover:scale-105 hover:shadow-md hover:bg-sky-600 transition-all duration-200'
						onClick={(event) =>
							!name || !matNo ? event.preventDefault() : null
						}
						to={`/chat?name=${name}&matNo=${matNo}`}
					>
						{/* <button className='btn mt-20 button' type='submit'>
							Sign In
						</button> */}
						Sign In
					</Link>

					<div className='m-12 border-b border-gray-300'></div>
					<div className='text-center  '>
						<p className='text-gray-400 first-letter:text-sm'>
							or log in as an
						</p>
						<Link to={'/adminSignIn'} className='text-blue-500'>
							Admin
						</Link>
					</div>
				</div>
				{/* Right-side */}
				<img
					src={loginImg}
					alt='turtle'
					className='w-[420px] hidden md:block rounded-r-2xl'
				/>
			</div>
		</div>
	);
}
