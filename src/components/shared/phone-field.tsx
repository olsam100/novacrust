import { FC, JSX, useState } from 'react'

interface PhoneInputFieldProps {
  label: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  countryCode?: string
  countryFlag?: JSX.Element
  onCountryChange?: () => void
}

const PhoneInputField: FC<PhoneInputFieldProps> = ({
  label,
  placeholder = '000 - 000 - 00000',
  value = '',
  onChange,
  disabled = false,
  countryCode = '+234',
  countryFlag = '🇳🇬',
  onCountryChange,
}) => {
  const [phoneValue, setPhoneValue] = useState(value)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(e.target.value)
    onChange?.(e.target.value)
  }

  const handleCountryClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
      onCountryChange?.()
    }
  }

  return (
    <div className='w-full flex flex-col gap-4'>
      <label className='font-medium text-[16px] text-[#013941]'>{label}</label>
      <div className='relative'>
        <div
          className={`w-full flex items-center h-15 bg-white border border-[#E0E0E0] rounded-[30px] transition-all overflow-hidden ${
            disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-300'
          }`}
          style={{ padding: '0' }}
        >
          <button
            onClick={handleCountryClick}
            disabled={disabled}
            type='button'
            className='flex items-center gap-2 border-r border-[#E0E0E0] cursor-pointer hover:bg-gray-50 transition-colors h-full'
            style={{ padding: '0 16px' }}
          >
            <span className='text-[16px] text-[#013941] font-medium'>
              {countryCode}
            </span>
            <span className='text-xl'>{countryFlag}</span>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={`flex shrink-0 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              <path
                d='M4 6L8 10L12 6'
                stroke='#013941'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <input
            type='tel'
            value={phoneValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            className='flex-1 h-full bg-transparent text-[16px] text-[#013941] placeholder:text-[16px] focus:outline-none placeholder:text-[#828282]'
            style={{ padding: '0 24px' }}
          />
        </div>

        {isOpen && !disabled && (
          <>
            <div
              className='fixed inset-0 z-10'
              onClick={() => setIsOpen(false)}
            />
            <div
              className='absolute left-0 flex items-center gap-2 top-12 bg-white rounded-3xl shadow-lg overflow-hidden z-20 border border-gray-200'
              style={{ padding: '16px 12px', minWidth: '200px' }}
            >
              <div className='max-h-64 overflow-y-auto w-full flex flex-col gap-2'>
                <button
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='w-full flex items-center gap-3 rounded-xl cursor-pointer transition-colors text-left hover:bg-[#F5F5F5]'
                  style={{ padding: '12px 24px' }}
                >
                  <span className='text-xl'>🇳🇬</span>
                  <div>
                    <p className='font-medium text-sm text-[#013941]'>
                      Nigeria (+234)
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='w-full flex items-center gap-3 rounded-xl cursor-pointer transition-colors text-left hover:bg-[#F5F5F5]'
                  style={{ padding: '12px 24px' }}
                >
                  <span className='text-xl'>🇺🇸</span>
                  <div>
                    <p className='font-medium text-sm text-[#013941]'>
                      United States (+1)
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='w-full flex items-center gap-3 rounded-xl cursor-pointer transition-colors text-left hover:bg-[#F5F5F5]'
                  style={{ padding: '12px 24px' }}
                >
                  <span className='text-xl'>🇬🇧</span>
                  <div>
                    <p className='font-medium text-sm text-[#013941]'>
                      United Kingdom (+44)
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PhoneInputField
