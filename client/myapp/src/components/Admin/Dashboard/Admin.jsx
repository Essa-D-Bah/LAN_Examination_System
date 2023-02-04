import React from 'react';
import { useEffect } from 'react';
import AddPaper from './AddPaper/AddPaper';
import AddStudent from './AddStudent/AddStudent';
import './admin.css';

export default function Admin() {
	return (
		<div className='min-h-screen bg-blue-50'>
      <div className="min-h-[10vh] text-center p-10 text-4xl font-semibold">
        <h2>Welcome, Admin</h2>
      </div>
			<div className='min-h-[90vh] py-10 px-20 flex flex-col items-center justify-center'>
				<AddPaper />
			</div>
			<div className='min-h-[90vh] py-10 px-20 flex flex-col items-center justify-center'>
				<AddStudent />
			</div>
		</div>
	);
}
