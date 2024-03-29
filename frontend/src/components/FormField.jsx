import React from 'react'

export default function FormField(props) {

  const {labelName, name, value, type, placeholder, handleChange, isSurpriseMe, handleSurpriseMe} = props

  return (
  <div>
    <div className='flex items-center gap-2 mb-2'>
      <label 
        htmlFor={name}
        className='block text-sm font-medium text-gray-900'
      >
        {labelName}
      </label>

      {isSurpriseMe && (
        <button
          type='button'
          onClick={handleSurpriseMe}
          className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black pointer hover:ring-2 mx-4'
        >
          Surprise me!
        </button>
      )}
    </div>

    <input 
      type={type}
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#6469ff] outline-none block w-full p-3 my-3'
    />
  </div>
  )
}
