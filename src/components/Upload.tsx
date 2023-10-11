import React from 'react'

export const Upload: React.FC<Props> = ({ onUpload }) => {
  const uploadImage: React.ChangeEventHandler<HTMLInputElement> = event => {
    onUpload(event.target.files[0])
  }

  return (
    <>
      <label
        htmlFor='myImage'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
      >
        Select an image
      </label>

      <input
        type='file'
        hidden={true}
        id='myImage'
        accept='image/*'
        onChange={uploadImage}
      />
    </>
  )
}

interface Props {
  onUpload: (file: File) => void
}
