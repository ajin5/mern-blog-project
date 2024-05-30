import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
  <div className ='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/*left */}
      <div className='flex-1'>
      <Link
        to="/"
        className="font-bold dark:text-white text-4xl"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white">
          Ajin's
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam, debitis, ipsa officia alias consectetur repellat dignissimos harum nesciunt ab aliquam doloremque voluptatem. Sit laboriosam, laudantium sed explicabo totam perspiciatis!</p>
      </div>
      {/*right */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div>
            <Label value="user name" />
            <TextInput type="text" placeholder="username" id="username" />
          </div>
          <div>
            <Label value="email" />
            <TextInput type="text" placeholder="email" id="email" />
          </div>
          <div>
            <Label value="password" />
            <TextInput type="text" placeholder="password" id="password" />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>
            Sign Up
          </Button>
        </form>
        <div className="flex gap-4 text-sm pt-3">
          <span>Have an Account</span>
          <Link to='/sign-in' className='text-blue-500'>
            Sign In
          </Link>

        </div>

      </div>
    </div>
  </div>
  )
}
