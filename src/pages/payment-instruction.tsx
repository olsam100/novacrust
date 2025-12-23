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
    <div className='w-160 mx-auto bg-white border border-[#CCF6E5] rounded-2xl sm:rounded-[30px] flex flex-col gap-16 sm:gap-10 px-16  py-10 sm:py-12'>
      <div className='w-full flex flex-col gap-8 sm:gap-8'>
        <header className='w-full flex items-center gap-23.75 px-2 sm:px-0'>
          <button onClick={onBack} className='p-2 -ml-2'>
            <BackArrowIcon />
          </button>
          <h1 className='font-semibold text-lg sm:text-xl text-[#013941]'>
            Send ETH to the address below
          </h1>
        </header>

        <div className='flex justify-center'>
          <div className='flex items-center h-10 gap-3 bg-[#CCF6E5] rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base'>
            <span className='font-semibold text-[#013941] break-all'>
              {walletAddress}
            </span>
            <button
              onClick={() => copyToClipboard(walletAddress, 'address')}
              className='p-2 relative cursor-pointer'
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

      <div className='w-full flex flex-col gap-32.75'>
        <div className='flex flex-col gap-6'>
          <div className='bg-[#F7F7F7] rounded-xl sm:rounded-2xl py-4 px-6 flex flex-col gap-6 sm:gap-5 text-sm sm:text-base'>
            <div className='flex justify-between items-center'>
              <span className='text-[#4F4F4F] text-sm'>Amount to send</span>
              <div className='flex items-center gap-3'>
                <span className='text-[#013941] text-base'>{amount}</span>
                <button
                  onClick={() => copyToClipboard(amount, 'amount')}
                  className='relative cursor-pointer'
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

          <div className='flex gap-3 items-start text-sm sm:text-base'>
            <InfoIcon />
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
