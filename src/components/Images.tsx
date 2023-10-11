import React from 'react'
import { Placeholder } from './Placeholder'
import { SIZE } from '../constants'
import AvatarEditor from 'react-avatar-editor'

const flag = new Promise<HTMLImageElement>((resolve, reject) => {
  const img = new Image()
  img.addEventListener('load', () => resolve(img))
  img.addEventListener('error', err => reject(err))
  img.src = './israel.png'
})

export const Images: React.FC<Props> = ({ canvas, image }) => {
  const editor = React.useRef<AvatarEditor>(null)
  const [scale, setScale] = React.useState(1)
  const [alpha, setAlpha] = React.useState(0.5)

  const drawCanvas = async () => {
    const ctx = canvas.current?.getContext('2d')
    ctx.clearRect(0, 0, SIZE, SIZE)
    ctx.globalAlpha = alpha

    ctx.drawImage(editor.current.getImage(), 0, 0, SIZE, SIZE)
    ctx.globalCompositeOperation = 'color'
    ctx.globalAlpha = 1

    ctx.drawImage(await flag, 0, 0, SIZE, SIZE)
  }

  return (
    <div className='flex md:space-x-32 flex-col md:flex-row space-y-4 md:space-y-0'>
      <div>
        <Placeholder>
          {image && (
            <AvatarEditor
              image={URL.createObjectURL(image)}
              ref={editor}
              width={SIZE}
              height={SIZE}
              border={0}
              color={[255, 255, 255, 0.6]}
              scale={scale}
              onImageReady={drawCanvas}
              onImageChange={drawCanvas}
            />
          )}
        </Placeholder>
        <div className='flex justify-center'>
          <label
            htmlFor='zoom'
            className={`mr-2 ${!image ? 'text-gray-400' : ''}`}
          >
            Zoom
          </label>
          <input
            id='zoom'
            type='range'
            min='1'
            max='2'
            step='0.01'
            disabled={!image}
            value={scale}
            onChange={e => setScale(parseFloat(e.currentTarget.value))}
          />
        </div>
      </div>
      <div>
        <Placeholder>
          <canvas ref={canvas} width={SIZE} height={SIZE} />
        </Placeholder>
        <div className='flex justify-center'>
          <label
            htmlFor='alpha'
            className={`mr-2 ${!image ? 'text-gray-400' : ''}`}
          >
            Alpha
          </label>
          <input
            id='alpha'
            type='range'
            min='0'
            max='1'
            step='0.05'
            disabled={!image}
            value={alpha}
            onChange={e => setAlpha(parseFloat(e.currentTarget.value))}
          />
        </div>
      </div>
    </div>
  )
}

interface Props {
  image: File
  canvas: React.MutableRefObject<HTMLCanvasElement>
}
