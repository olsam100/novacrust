import { useState } from 'react'
import InputField from '../shared/input-field'
import PrimaryButton from '../button'

const CryptoToFlatLoan = () => {
  const [email, setEmail] = useState('')

  return (
    <div className='w-full max-w-lg mx-auto flex flex-col items-center gap-12 sm:gap-16 px-4 sm:px-8 py-12 sm:py-16'>
      <div className='w-full bg-white border border-[#CCF6E5] rounded-2xl sm:rounded-[30px] shadow-sm flex flex-col items-center gap-8 sm:gap-10 px-6 sm:px-12 py-10 sm:py-12'>
        <div className='flex flex-col items-center gap-4 sm:gap-6 text-center'>
          <p
            className='text-3xl sm:text-4xl font-bold text-[#013941]'
            style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          >
            Coming Soon!
          </p>
          <p className='text-base sm:text-lg text-[#4F4F4F] leading-relaxed max-w-md'>
            Crypto to Flat Loan is almost here.{' '}
            <br className='hidden sm:inline' />
            Enter your email and we’ll let you know the moment it’s live.
          </p>
        </div>

        <div className='w-full max-w-md'>
          <InputField
            label='Email'
            placeholder='Enter your email'
            value={email}
            onChange={setEmail}
            type='email'
          />
        </div>
      </div>

      <div className='w-full max-w-md'>
        <PrimaryButton
          name='Update me'
          onClick={() => console.log('')}
          disabled={!email.trim()}
        />
      </div>
    </div>
  )
}

export default CryptoToFlatLoan
