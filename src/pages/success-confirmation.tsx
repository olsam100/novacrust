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
    <div className='w-160 mx-auto bg-white border border-[#CCF6E5] rounded-2xl sm:rounded-[30px] flex flex-col gap-8 sm:gap-10 px-4 sm:px-10 pt-11 pb-[135px]'>
      <header className='flex flex-col items-center gap-6 sm:gap-8'>
        <Brandlogo />
        <CheckmarkIcon />
      </header>

      <div className='w-full flex flex-col gap-8 sm:gap-10'>
        <div className='text-center flex flex-col gap-3 sm:gap-4'>
          <p className='font-semibold text-xl sm:text-2xl text-black'>
            Your transaction is processing.
          </p>
          <p className='text-base sm:text-xl text-[#4F4F4F]'>
            The recipient will receive it shortly.
          </p>
        </div>

        <div className='w-full h-14 bg-[#F5F5F5] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-between text-sm sm:text-base'>
          <span className='text-[#4F4F4F]'>Transaction ID</span>
          <div className='flex items-center gap-3'>
            <span className='text-[#013941]'>{transactionId}</span>
            <button
              onClick={() => copyToClipboard(transactionId)}
              className='p-2 relative cursor-pointer'
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

        <div className='py-5 px-10 rounded-[30px] w-full flex gap-2 h-15 items-center justify-center'>
          <button
            onClick={onGoHome}
            className='text-[#013941] font-semibold text-base sm:text-lg hover:underline'
          >
            Go back to home
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessConfirmation
