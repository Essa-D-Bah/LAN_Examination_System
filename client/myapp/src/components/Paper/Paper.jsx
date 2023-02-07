import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router';
// style
import '../../styles/radio.scss';
// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

let socket;
export default function Paper({ location }) {
	const [paperName, setName] = useState('');
	const [studentMat, setMatNo] = useState('');
	const [questons, setQuestions] = useState([]);
	const [answers, setAnswer] = useState([]);
	const ENDPOINT = 'http://localhost:5000';
	const data = useLocation();
	useEffect(() => {
		const { paper, studentMat } = queryString.parse(data.search);
		socket = io(ENDPOINT);
		setName(paper);
		setMatNo(studentMat);
		socket.emit('join', { paperName, studentMat });
		socket.on('getPaper', ({ questions }) => {
			setQuestions(questions);
		});
	}, [data.search, ENDPOINT, paperName, studentMat]);

	const handleChange = (e) => {
		let { name, value } = e.target;
		setAnswer((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const submitAnswers = (e) => {
		e.preventDefault();
		socket.emit('addAnswer', { answers, studentMat });
	};

  useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	return (
		<div className='min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 flex flex-col items-center'>
			<div className='container md:my-10 mx-auto bg-white max-w-6xl md:rounded-2xl shadow-2xl flex flex-col items-center' data-aos='zoom-in-up'>
				<div className='my-6 flex flex-col space-y-4'>
					<h1 className='text-center text-4xl font-semibold '>
						Paper: {paperName}
					</h1>
					<h1 className='text-center text-4xl font-semibold '>
						StudentID: {studentMat}
					</h1>
				</div>
				<div className='text-center text-2xl font-semibold'>
					Instructions: Please answer all questions.
				</div>

				<div className=' px-6'>
					{questons.map((question) => (
						<div className='mb-2 flex flex-col space-y-6 p-10 mx-auto w-full'>
							{/* <p className="text-xl">
              {question.questionNumber}) {question.question}
            </p> */}
							<div className='flex flex-row space-x-4'>
								{/* question number */}
								<p className='text-xl font-semibold font-mono'>
									{question.questionNumber}
								</p>
								{/* question text */}
								<p className='text-xl font-semibold font-mono'>
									{question.question}
								</p>
							</div>
							<div className='flex flex-col space-y-6'>
								<div className='mx-6 flex flex-row items-center space-x-4'>
									<input
										className='w-5 h-5 cursor-pointer hover:scale-110 transition-all duration-200'
										type='radio'
										name={question.questionNumber}
										value={question.ans1}
										onClick={(e) => handleChange(e)}
									/>
									{/* question ans1 */}
									<label class='text-xl tracking-wide'>
										{/* <span>{question.ans1}</span> */}
										{question.ans1}
									</label>
								</div>
								<div className='mx-6 flex flex-row items-center space-x-4'>
									<input
										className='w-5 h-5 cursor-pointer hover:scale-110 transition-all duration-200'
										type='radio'
										name={question.questionNumber}
										value={question.ans2}
										onClick={(e) => handleChange(e)}
									/>
									{/* question ans2 */}
									<label class='text-xl tracking-wide'>
										{/* <span>{question.ans2}</span> */}
										{question.ans2}
									</label>
								</div>
								<div className='mx-6 flex flex-row items-center space-x-4'>
									<input
										className='w-5 h-5 cursor-pointer hover:scale-110 transition-all duration-200'
										type='radio'
										name={question.questionNumber}
										value={question.ans3}
										onClick={(e) => handleChange(e)}
									/>
									{/* question ans3 */}
									<label class='text-xl tracking-wide'>
										{/* <span>{question.ans3}</span> */}
										{question.ans3}
									</label>
								</div>
								<div className='mx-6 flex flex-row items-center space-x-4'>
									<input
										className='w-5 h-5 cursor-pointer hover:scale-110 transition-all duration-200'
										type='radio'
										name={question.questionNumber}
										value={question.ans4}
										onClick={(e) => handleChange(e)}
									/>
									{/* question ans4 */}
									<label class='text-xl tracking-wide'>
										{/* <span>{question.ans1}</span> */}
										{question.ans1}
									</label>
								</div>
							</div>
						</div>
					))}
				</div>
				<button
					onClick={(e) => submitAnswers(e)}
					className='my-10 bg-sky-400 px-2 py-4 rounded-md text-white text-center font-bold font-mono tracking-widest hover:scale-105 hover:bg-sky-600 transition-all duration-200 hover:shadow-md'
				>
					Submit Answer
				</button>
			</div>
		</div>
	);
}
