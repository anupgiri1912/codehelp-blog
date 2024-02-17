import React from 'react'
import  {AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import { useContext } from 'react';

const Blogs = () => {
  //consume
  const {posts,loading} =useContext(AppContext);
console.log("Printing inside blog component");
console.log(posts);

  return (
    <div className='w-11/12 max-w-[610px] h-full py-8  flex flex-col gap-y-7 mt-[67px] mb-[70px]  justify-center items-center'>
      {
        loading ?(<Spinner/>) : (
      posts.length===0 ? (<div>
        <p>No Post Found</p>
      </div>) : (posts.map( (post) => (
       <div key={post.id}>
        <p className='font-bold text-lg'>{post.title}</p>
        <p className='text-sm mt-[4px] '>
          By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
        </p>
        <p className='text-[10px] mt-[4px]'>Posted on {post.date}</p>
        <p className='text-[11px] mt-[14px]'>{post.content}</p>
        <div className='flex gap-x-3 '>
          {post.tags.map((tag,index) => {
            return <span key={index} className='text-blue-700 underline font-bold text-[12px] mt-[5px]'>{`#${tag}`}</span>
          }) }

        </div>
       </div> 
      )))
        )
      }
    </div>
  )
}

export default Blogs