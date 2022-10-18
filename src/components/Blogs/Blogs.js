import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-zinc-200 p-3 mt-5'>
            <div className='flex p-4'>
                <div className='border-2 border-white w-1/2 m-7 p-4 justify-items-center	'>
                    <h2 className='m-7 text-3xl font-extrabold text-blue-300'>What is context Api?</h2>
                    <p className='text-xl text-bold text-yellow-600 '>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='border-2 border-white w-1/2 m-7 p-4 justify-items-center	'>
                    <h2 className='text-3xl m-5 font-extrabold text-blue-300'>What is seamantic tag?</h2>
                    <p className='text-xl text-bold text-yellow-600'>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.

                        The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser.</p>
                </div>
            </div>
            <div className='border-2 border-white w-1/2 m-7 mx-auto p-7 justify-items-center	'>
                    <h2 className='text-3xl m-5 font-extrabold text-blue-300'>What is block or inline block element?</h2>
                    <p className='text-xl text-bold text-yellow-600'>There are two display values: block and inline. A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary.</p>
                </div>
        </div>
    );
};

export default Blogs;