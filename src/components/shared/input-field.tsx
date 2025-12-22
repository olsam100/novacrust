import { FC, useState } from 'react'

interface InputFieldProps {
  label: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  type?: 'text' | 'email' | 'tel' | 'number'
}

const InputField: FC<InputFieldProps> = ({
  label,
  placeholder = '',
  value = '',
  onChange,
  disabled = false,
  type = 'text',
}) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <div className='w-full flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <label className='font-medium text-sm md:text-base lg:text-[16px] text-[#013941]'>
        {label}
      </label>
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full p-6 flex items-center justify-between h-12 md:h-14 lg:h-15 border border-[#E0E0E0] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] transition-all text-[#013941] text-sm md:text-base lg:text-[16px] placeholder:text-[#828282] placeholder:text-sm md:placeholder:text-base lg:placeholder:text-[16px] focus:outline-none focus:border-[#013941] ${
          inputValue ? 'bg-[#F2F2F2]' : 'bg-white'
        } ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#013941]'
        }`}
      />
    </div>
  )
}

export default InputField
