import React from "react";
import { useState } from "react";

export default function AddStudent() {
  const [studentName, setStudentName] = useState("");
  const [studentMat, setStudentMat] = useState("");
  const [paper, setPaper] = useState("");
  const [studentData, setStudentData] = useState({
    name:'',
    matNo:'',
    paper:''
  })

  const handleStudentData=(e)=>{
       e.preventDefault();
      setStudentData({
        name:studentName,
        matNo:studentMat,
        paper:paper
      })
  }

  return (
		<div className='flex flex-col m-6 bg-white rounded-2xl shadow-2xl md:flex-row md:m-0 md:min-w-[42rem] min-w-[24rem]'>
			<div className='flex flex-col space-y-6 p-6 md:p-10 w-full'>
				<h1 className='font-sans font-semibold text-xl text-center'>
					Add Student
				</h1>

				<input
					type='text'
					className='w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm'
					placeholder='Student Name'
					id='studentName'
					onChange={(e) => setStudentName(e.target.value)}
				/>
				<input
					type='text'
					className='w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm'
					placeholder='Mat Number'
					id='StudentMat'
					onChange={(e) => setStudentMat(e.target.value)}
				/>

				<h3 className='font-sans font-semibold text-xl text-center'>
					Select Paper for Student
				</h3>
				<select
					className='w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm appearance-none '
					name=''
					id='paper'
					onChange={(e) => setPaper(e.target.value)}
				>
					<option value='English'>English</option>
					<option value='English'>English</option>
				</select>
				<div
					className='bg-sky-400 px-2 py-4 rounded-md text-white text-center font-bold text-lg tracking-wider hover:scale-105 hover:shadow-md hover:bg-sky-600 transition-all duration-200  cursor-pointer'
					onClick={(e) => handleStudentData(e)}
				>
					Add Student
				</div>
			</div>
		</div>
	);
}
