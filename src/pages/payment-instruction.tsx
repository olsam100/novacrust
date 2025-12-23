import { useState } from 'react'
import BackArrowIcon from '@/assets/icons/backArrowIcon'
import CopyIcon from '@/assets/icons/copyIcon'
import InfoIcon from '@/assets/icons/infoIcon'
import PrimaryButton from '@/components/button'

const PaymentInstruction = ({
  onConfirm,
  onBack,
}: {
  onConfirm: () => void
  onBack: () => void
}) => {
  const walletAddress = '4LiV4YjbxsL6739MKghUd'
  const amount = '100 ETH'

  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: 'address' | 'amount') => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className='w-full lg:w-160 mx-auto bg-white border border-[#CCF6E5] rounded-2xl sm:rounded-[25px] lg:rounded-[30px] flex flex-col gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-10'>
      <div className='w-full flex flex-col gap-6 sm:gap-7 lg:gap-8'>
        <header className='w-full flex items-center gap-4 sm:gap-8 lg:gap-23.75 px-2 sm:px-0'>
          <button onClick={onBack} className='p-2 -ml-2'>
            <BackArrowIcon />
          </button>
          <h1 className='font-semibold text-base sm:text-lg lg:text-xl text-[#013941]'>
            Send ETH to the address below
          </h1>
        </header>

        <div className='flex justify-center'>
          <div className='flex items-center h-auto sm:h-10 gap-2 sm:gap-3 bg-[#CCF6E5] rounded-full px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base'>
            <span className='font-semibold text-[#013941] break-all'>
              {walletAddress}
            </span>
            <button
              onClick={() => copyToClipboard(walletAddress, 'address')}
              className='p-1 sm:p-2 relative cursor-pointer flex-shrink-0'
            >
              <CopyIcon />
              {copied === 'address' && (
                <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white px-3 py-1 rounded'>
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col gap-8 sm:gap-12 lg:gap-32.75'>
        <div className='flex flex-col gap-4 sm:gap-5 lg:gap-6'>
          <div className='bg-[#F7F7F7] rounded-xl sm:rounded-xl lg:rounded-2xl py-3 sm:py-4 px-4 sm:px-5 lg:px-6 flex flex-col gap-4 sm:gap-5 lg:gap-6 text-xs sm:text-sm lg:text-base'>
            <div className='flex justify-between items-center'>
              <span className='text-[#4F4F4F] text-xs sm:text-sm'>
                Amount to send
              </span>
              <div className='flex items-center gap-2 sm:gap-3'>
                <span className='text-[#013941] text-sm sm:text-base'>
                  {amount}
                </span>
                <button
                  onClick={() => copyToClipboard(amount, 'amount')}
                  className='relative cursor-pointer flex-shrink-0'
                >
                  <CopyIcon />
                  {copied === 'amount' && (
                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white px-3 py-1 rounded'>
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className='flex justify-between'>
              <span className='text-[#4F4F4F]'>Network</span>
              <span className='text-[#013941]'>ETH</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-[#4F4F4F]'>Wallet</span>
              <span className='text-[#013941]'>Other</span>
            </div>
          </div>

          <div className='flex gap-2 sm:gap-3 items-start text-xs sm:text-sm lg:text-base'>
            <div className='flex-shrink-0'>
              <InfoIcon />
            </div>
            <p className='text-[#4F4F4F]'>
              Only send <strong>USDT</strong> to this address. Ensure the sender
              is on the <strong>CELO</strong> network otherwise you might lose
              your deposit.
            </p>
          </div>
        </div>

        <PrimaryButton name='I have sent it' onClick={onConfirm} />
      </div>
    </div>
  )
}

export default PaymentInstruction
