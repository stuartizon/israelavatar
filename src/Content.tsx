import React, { useRef, useState } from 'react'
import { Upload } from './components/Upload'
import { Images } from './components/Images'
import { Download } from './components/Download'

export const Content = () => {
  const [image, setImage] = useState<File>(null)
  const canvas = useRef<HTMLCanvasElement>(null)

  return (
    <div className='text-center md:container mx-auto p-2 h-screen flex flex-col items-center md:justify-center'>
      <h1 className='text-5xl my-3'>Israel Avatar</h1>
      <p>
        Use this tool to create an avatar with the Israeli flag superimposed.
        <br />
        Everything is local to your browser &mdash; no images are uploaded to
        this site.
      </p>

      <div className='mt-4 mb-8'>
        <Upload onUpload={setImage} />
      </div>
      <Images image={image} canvas={canvas} />
      <div className='mt-4 mb-8'>
        <Download canvas={canvas} disabled={!image} />
      </div>
    </div>
  )
}
