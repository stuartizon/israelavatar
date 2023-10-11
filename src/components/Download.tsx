import React from 'react'

export const Download: React.FC<Props> = ({ canvas, disabled }) => {
  const downloadImage = () => {
    var link = document.createElement('a')
    link.download = 'Avatar'
    link.href = canvas.current?.toDataURL()
    link.click()
  }

  return (
    <>
      <input
        type='button'
        value='Download'
        className={`text-white font-bold py-2 px-4 rounded ${
          disabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700 cursor-pointer'
        }`}
        disabled={disabled}
        onClick={() => downloadImage()}
      />
    </>
  )
}

interface Props {
  canvas: React.MutableRefObject<HTMLCanvasElement>
  disabled: boolean
}
