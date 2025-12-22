import classNames from 'classnames'
import { FC, ReactNode, useState } from 'react'

export interface SelectOption {
  value: string
  label: string
  icon?: ReactNode
  description?: string
}

interface SelectFieldProps {
  label: string
  placeholder?: string
  options: SelectOption[]
  value?: SelectOption | null
  onChange?: (option: SelectOption | null) => void
  disabled?: boolean
}

const SelectField: FC<SelectFieldProps> = ({
  label,
  placeholder = 'Select an option',
  options,
  value = null,
  onChange,
  disabled = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    value
  )
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange?.(option)
  }

  return (
    <div className='w-full flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <label className='font-medium text-sm md:text-base lg:text-[16px] text-[#013941]'>
        {label}
      </label>

      <div className='relative'>
        <button
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`w-full px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 flex items-center justify-between h-12 md:h-14 lg:h-15 bg-white border border-[#E0E0E0] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] transition-all outline-none ${
            disabled ? 'opacity-50' : 'hover:border-[#013941]'
          }`}
        >
          {selectedOption ? (
            <div className='flex items-center gap-2 md:gap-2.5 lg:gap-3'>
              {selectedOption.icon && (
                <span className='flex shrink-0 w-5 h-5 md:w-6 md:h-6'>
                  {selectedOption.icon}
                </span>
              )}
              <div className='text-left'>
                <p className='font-medium text-sm md:text-base lg:text-[16px] text-[#013941]'>
                  {selectedOption.label}
                </p>
              </div>
            </div>
          ) : (
            <span className='text-[#013941] text-sm md:text-base lg:text-[16px] font-regular'>
              {placeholder}
            </span>
          )}

          <svg
            width='16'
            height='16'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`flex shrink-0 w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <path
              d='M5 7.5L10 12.5L15 7.5'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        {isOpen && !disabled && (
          <>
            <div
              className='fixed inset-0 z-10'
              onClick={() => setIsOpen(false)}
            />
            <div
              className='absolute left-4 right-4 md:left-5 md:right-5 lg:left-6 lg:right-6 py-3 md:py-3.5 lg:py-4 px-2 md:px-2.5 lg:px-3 bg-white rounded-xl md:rounded-2xl shadow-2xl z-40 border border-gray-100'
              style={{ top: 'calc(100% + 8px)' }}
            >
              <div className='max-h-48 md:max-h-56 lg:max-h-60 overflow-y-auto flex flex-col gap-1'>
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className={`w-full flex items-center py-2.5 px-4 md:py-3 md:px-5 lg:py-3 lg:px-6 gap-2 md:gap-2.5 lg:gap-3 rounded-lg md:rounded-xl text-left transition-colors ${
                      selectedOption?.value === option.value
                        ? 'bg-[#013941] text-white'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {option.icon && (
                      <span className='flex shrink-0 items-center justify-center w-5 h-5 md:w-6 md:h-6'>
                        {option.icon}
                      </span>
                    )}
                    <div>
                      <p
                        className={classNames(
                          'font-medium text-xs md:text-sm',
                          selectedOption?.value === option.value
                            ? 'text-white'
                            : 'text-[#013941]'
                        )}
                      >
                        {option.label}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SelectField
