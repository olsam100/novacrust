// import ChevronDown from '@/assets/icons/chevron-down'
// import SearchIcon from '@/assets/icons/searchIcon'
// import { FC, ReactNode, useState } from 'react'

// type CardVariant = 'pay' | 'receive'

// export interface SelectOption {
//   value: string
//   label: string
//   icon: ReactNode
// }

// interface CardProps {
//   title: string
//   amount: number
//   variant?: CardVariant
//   options: SelectOption[]
//   onSelect?: (option: SelectOption | null) => void
// }

// const Card: FC<CardProps> = ({
//   title,
//   amount,
//   variant = 'pay',
//   options,
//   onSelect,
// }) => {
//   const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
//     options?.[0] || null
//   )
//   const [isOpen, setIsOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')

//   const handleSelect = (option: SelectOption) => {
//     setSelectedOption(option)
//     setIsOpen(false)
//     setSearchQuery('')
//     onSelect?.(option)
//   }

//   const filteredOptions =
//     options?.filter((option) =>
//       option.label.toLowerCase().includes(searchQuery.toLowerCase())
//     ) || []

//   return (
//     <div className='flex w-full flex-col gap-2 border border-[#E0E0E0] rounded-[30px] min-h-28 p-6'>
//       <p className='font-medium text-[16px] text-[#828282]'>{title}</p>

//       <div className='flex items-center justify-between w-full rounded-[30px]'>
//         <p className='font-semibold text-2xl'>{amount.toFixed(2)}</p>

//         <div className='relative'>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`flex items-center gap-2 py-2 px-3 h-9 bg-[#F7F7F7] rounded-full cursor-pointer hover:bg-gray-200 transition-colors border ${
//               variant === 'pay' ? 'border-none' : 'border-[#E0E0E0]'
//             }`}
//           >
//             {selectedOption?.icon && (
//               <span className='flex shrink-0 h-6 w-6 items-center justify-center'>
//                 {selectedOption.icon}
//               </span>
//             )}
//             <span className='font-medium text-sm whitespace-nowrap text-[#013941]'>
//               {selectedOption?.label || 'Select'}
//             </span>
//             <ChevronDown />
//           </button>

//           {isOpen && (
//             <>
//               <div
//                 className='fixed inset-0 z-10'
//                 onClick={() => {
//                   setIsOpen(false)
//                   setSearchQuery('')
//                 }}
//               />
//               <div
//                 className='absolute flex flex-col gap-2 right-0 w-66 bg-white rounded-2xl shadow-lg overflow-hidden z-20 border border-[#E0E0E0]'
//                 style={{
//                   padding: '16px 12px',
//                   marginTop: '2px',
//                   maxHeight: '320px',
//                 }}
//               >
//                 <div className='relative flex items-center py-3 px-4 gap-2 border border-[#E0E0E0] rounded-[20px]'>
//                   <SearchIcon />
//                   <input
//                     type='text'
//                     placeholder='Search'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className='w-full flex  text-sm focus:outline-none focus:border-[#013941] transition-colors'
//                     onClick={(e) => e.stopPropagation()}
//                   />
//                 </div>

//                 <div
//                   className='overflow-y-auto flex flex-col gap-2'
//                   style={{ maxHeight: '240px' }}
//                 >
//                   {filteredOptions.length > 0 ? (
//                     filteredOptions.map((option) => (
//                       <button
//                         key={option.value}
//                         onClick={() => handleSelect(option)}
//                         className={`w-full flex items-center gap-3 rounded-xl cursor-pointer transition-colors text-left ${
//                           selectedOption?.value === option.value
//                             ? 'bg-[#F5F5F5]'
//                             : 'hover:bg-[#F5F5F5]'
//                         }`}
//                         style={{
//                           padding: '12px 16px',
//                           minHeight: '48px',
//                         }}
//                       >
//                         {option.icon && (
//                           <span className='flex shrink-0 h-6 w-6 items-center justify-center'>
//                             {option.icon}
//                           </span>
//                         )}
//                         <span className='font-medium'>{option.label}</span>
//                       </button>
//                     ))
//                   ) : (
//                     <div className='text-center py-4 text-sm text-[#828282]'>
//                       No options found
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card

import ChevronDown from '@/assets/icons/chevron-down'
import SearchIcon from '@/assets/icons/searchIcon'
import { FC, ReactNode, useState } from 'react'

type CardVariant = 'pay' | 'receive'

export interface SelectOption {
  value: string
  label: string
  icon: ReactNode
}

interface CardProps {
  title: string
  amount: number
  variant?: CardVariant
  options: SelectOption[]
  onSelect?: (option: SelectOption | null) => void
}

const Card: FC<CardProps> = ({
  title,
  amount,
  variant = 'pay',
  options,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    options?.[0] || null
  )
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option)
    setIsOpen(false)
    setSearchQuery('')
    onSelect?.(option)
  }

  const filteredOptions =
    options?.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []

  return (
    <div className='flex w-full flex-col gap-1.5 md:gap-2 border border-[#E0E0E0] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] min-h-[100px] md:min-h-[112px] lg:min-h-28 p-4 md:p-5 lg:p-6'>
      <p className='font-medium text-sm md:text-base lg:text-[16px] text-[#828282]'>
        {title}
      </p>

      <div className='flex items-center justify-between w-full'>
        <p className='font-semibold text-xl md:text-2xl lg:text-2xl'>
          {amount.toFixed(2)}
        </p>

        <div className='relative'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-1.5 md:gap-2 py-1.5 px-2.5 md:py-2 md:px-3 h-8 md:h-9 bg-[#F7F7F7] rounded-full cursor-pointer hover:bg-gray-200 transition-colors border ${
              variant === 'pay' ? 'border-none' : 'border-[#E0E0E0]'
            }`}
          >
            {selectedOption?.icon && (
              <span className='flex shrink-0 h-5 w-5 md:h-6 md:w-6 items-center justify-center'>
                {selectedOption.icon}
              </span>
            )}
            <span className='font-medium text-xs md:text-sm whitespace-nowrap text-[#013941]'>
              {selectedOption?.label || 'Select'}
            </span>
            <span className='w-3 h-3 md:w-4 md:h-4'>
              <ChevronDown />
            </span>
          </button>

          {isOpen && (
            <>
              <div
                className='fixed inset-0 z-10'
                onClick={() => {
                  setIsOpen(false)
                  setSearchQuery('')
                }}
              />
              <div className='absolute flex flex-col gap-2 right-0 w-full min-w-[280px] md:w-66 bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden z-20 border border-[#E0E0E0] p-3 md:p-4 mt-2 max-h-[300px] md:max-h-[320px]'>
                <div className='relative flex items-center py-2.5 px-3 md:py-3 md:px-4 gap-2 border border-[#E0E0E0] rounded-[16px] md:rounded-[20px]'>
                  <span className='w-4 h-4 md:w-5 md:h-5 flex-shrink-0'>
                    <SearchIcon />
                  </span>
                  <input
                    type='text'
                    placeholder='Search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full flex text-xs md:text-sm focus:outline-none focus:border-[#013941] transition-colors'
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                <div className='overflow-y-auto flex flex-col gap-1.5 md:gap-2 max-h-[200px] md:max-h-[240px]'>
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option)}
                        className={`w-full flex items-center gap-2 md:gap-3 rounded-lg md:rounded-xl cursor-pointer transition-colors text-left py-2.5 px-3 md:py-3 md:px-4 min-h-[44px] md:min-h-[48px] ${
                          selectedOption?.value === option.value
                            ? 'bg-[#F5F5F5]'
                            : 'hover:bg-[#F5F5F5]'
                        }`}
                      >
                        {option.icon && (
                          <span className='flex shrink-0 h-5 w-5 md:h-6 md:w-6 items-center justify-center'>
                            {option.icon}
                          </span>
                        )}
                        <span className='font-medium text-xs md:text-sm'>
                          {option.label}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className='text-center py-3 md:py-4 text-xs md:text-sm text-[#828282]'>
                      No options found
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
