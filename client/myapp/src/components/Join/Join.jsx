import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import loginImg from "../../img/background-mini.jpg";
import { io } from "socket.io-client";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

let socket;
export default function Join() {
  const [paperName, setPaper] = useState("");
  const [studentMat, setMatNo] = useState("");
  const [question, setQuestions] = useState([]);
  const ENDPOINT = "http://localhost:5000";

  const handleJoin = (e) => {
    e.preventDefault();
    socket = io(ENDPOINT);
    socket.emit("join", { paperName, studentMat });
    socket.on("getPaper", ({ questions }) => {
      setQuestions(questions);
    });

  };
  useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
  return (
		// Global container
		<div className='background-img flex justify-center items-center min-h-screen'>
			{/* Cards container */}
			<div className='flex flex-col m-6 bg-white rounded-2xl shadow-3xl md:flex-row md:m-0' data-aos='zoom-in-up'>
				{/* Left-side */}
				<div className='flex flex-col space-y-4 p-6 md:py-10 px-14 '>
					<h2 className='font-sans mb-5 text-4xl text-center font-bold'>
						{' '}
						Student Join Exam
					</h2>
					<input
						type='text'
						placeholder='Mat Number'
						className='w-full p-6 border border-grey-500 rounded-md tracking-[0.08rem] placeholder:font-sans placeholder:font-light placeholder:text-sm placeholder:tracking-[0.08rem]'
						onChange={(event) => setMatNo(event.target.value)}
					/>

					<input
						type='text'
						placeholder='Paper'
						className='w-full p-6 border border-grey-500 rounded-md tracking-[0.08rem] placeholder:font-sans placeholder:font-light placeholder:text-sm placeholder:tracking-[0.08rem]'
						onChange={(event) => setPaper(event.target.value)}
					/>

					{/* button */}
					<Link
						className='bg-sky-400 px-2 py-4 rounded-md text-white text-center font-bold font-mono tracking-wider hover:scale-105 hover:shadow-md hover:bg-sky-600 transition-all duration-200'
						// onClick={(event) =>
						//   question.length === 0 || !studentMat
						//     ? event.preventDefault()
						//     : null
						// }
						to={`/chat?paper=${paperName}&studentMat=${studentMat}`}
					>
						<button onClick={(e) => handleJoin(e)} className='' type='submit'>
							Sign In
						</button>
					</Link>

					<div className='m-12 border-b border-gray-300'></div>
					<div className='text-center  '>
						<p className='text-gray-400 text-sm tracking-wide'>
							or log in as an
						</p>
						<Link to={'/adminSignIn'} className='text-blue-500 tracking-wide font-normal'>
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
