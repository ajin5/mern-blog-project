import React from 'react'
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-centre text-3xl my-7 font-semibold'>CreatePost</h1>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                <TextInput type='text' placeholder='Title' required id='title' className='flex-1'/>
                <Select>
                    <option value="uncategorized">Select Category</option>
                    <option value="Products">Products</option>
                    <option value="News">News</option>
                    <option value="information">Info</option>
                    <option value="Movie">Movie</option>
                </Select>
                
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
            <FileInput
            type='file'
            accept='image/*' />
            <Button type='button' gradientDuoTone="purpleToBlue" size='sm' outline>Upload Image</Button>
            </div>
            <div>
            
            <ReactQuill theme="snow" placeholder='write something' className='h-72 mb-12'
            
          required/>
          </div>
          <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>
            

        </form>

      
    </div>
  )
  
}
