import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-2 w-1/2 m-10 p-4 '>
                <h2 className='text-3xl text-bold text-blue-300 text-center'>What is context Api?</h2>
                <p className='text-xl text-bold text-yellow-600 text-center'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
        </div>
    );
};

export default Blogs;