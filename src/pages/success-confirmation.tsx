import { useState } from 'react'
import Brandlogo from '@/assets/icons/brandlogo'
import CheckmarkIcon from '@/assets/icons/checkmarkIcon'
import CopyIcon from '@/assets/icons/copyIcon'

const SuccessConfirmation = ({ onGoHome }: { onGoHome: () => void }) => {
  const transactionId = 'NC123456789'

  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className='w-full lg:w-160 mx-auto bg-white border border-[#CCF6E5] rounded-2xl sm:rounded-[25px] lg:rounded-[30px] flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 pt-8 sm:pt-9 lg:pt-11 pb-16 sm:pb-24 lg:pb-[135px]'>
      <header className='flex flex-col items-center gap-4 sm:gap-6 lg:gap-8'>
        <Brandlogo />
        <CheckmarkIcon />
      </header>

      <div className='w-full flex flex-col gap-6 sm:gap-8 lg:gap-10'>
        <div className='text-center flex flex-col gap-2 sm:gap-3 lg:gap-4'>
          <p className='font-semibold text-lg sm:text-xl lg:text-2xl text-black'>
            Your transaction is processing.
          </p>
          <p className='text-sm sm:text-base lg:text-xl text-[#4F4F4F]'>
            The recipient will receive it shortly.
          </p>
        </div>

        <div className='w-full min-h-12 sm:h-14 bg-[#F5F5F5] rounded-xl sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 flex items-center justify-between text-xs sm:text-sm lg:text-base'>
          <span className='text-[#4F4F4F]'>Transaction ID</span>
          <div className='flex items-center gap-2 sm:gap-3'>
            <span className='text-[#013941]'>{transactionId}</span>
            <button
              onClick={() => copyToClipboard(transactionId)}
              className='p-1 sm:p-2 relative cursor-pointer flex-shrink-0'
            >
              <CopyIcon />
              {copied && (
                <span className='absolute -top-12 left-1/2 -translate-x-1/2 text-xs bg-white px-3 py-1 rounded shadow'>
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        <div className='py-4 sm:py-5 px-6 sm:px-8 lg:px-10 rounded-2xl sm:rounded-[25px] lg:rounded-[30px] w-full flex gap-2 min-h-12 sm:h-15 items-center justify-center'>
          <button
            onClick={onGoHome}
            className='text-[#013941] font-semibold text-sm sm:text-base lg:text-lg cursor-pointer'
          >
            Go back to home
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessConfirmation
