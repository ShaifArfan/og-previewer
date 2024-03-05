import React, { useState } from 'react'

function Preview() {
  const [image, setImage] = useState<File|null>(null);
  return (
    <div>
      <input type="file"  accept='image/png' onChange={(e) => {
        e.currentTarget.files && setImage(e.currentTarget.files[0]);
      }} />

      {image && (
       <>
        <div className='flex flex-wrap gap-5'>
      <div>
        <h1>Facebook Web</h1>
        <img src={URL.createObjectURL(image)} alt="test" className='w-[680px] h-[354px] overflow-hidden object-contain bg-red-500' />
      </div>
      <div>

      <h1>Twitter - X</h1>
        <img src={URL.createObjectURL(image)} alt="test" className='w-[516px] h-[270.16px] overflow-hidden object-contain bg-red-500' />

      </div>
      <div>

      <h1>Discord</h1>
        <img src={URL.createObjectURL(image)} alt="test" className='w-[245px] h-[126px] overflow-hidden object-cover object-center  bg-red-500' />
      </div>
      <div>

      <h1>Whatsapp - mobile</h1>
        <img src={URL.createObjectURL(image)} alt="test" className='w-[424px] h-[164px] overflow-hidden object-cover object-center bg-red-500' />

      </div>
      <div>

      <h1>Whatsapp - Web</h1>
        <img src={URL.createObjectURL(image)} alt="test" className='w-[100px] h-[100px] overflow-hidden object-cover object-center bg-red-500' />
      </div>
</div>
       </> 

      )}
    </div>
  )
}

export default Preview