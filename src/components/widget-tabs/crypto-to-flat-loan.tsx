import { useState } from 'react'
import InputField from '../shared/input-field'
import PrimaryButton from '../button'

const CryptoToFlatLoan = () => {
  const [email, setEmail] = useState('')

  return (
    <div className='w-full flex flex-col items-center gap-20 pt-10.25 pb-56.25 px-16'>
      <div className='w-full bg-white rounded-2xl sm:rounded-[30px] flex flex-col items-center gap-7.5'>
        <div className='w-full flex flex-col items-center gap-4.25 text-center'>
          <p
            className='text-3xl sm:text-4xl font-bold text-[#013941]'
            style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          >
            Coming Soon!
          </p>
          <p className='text-base sm:text-lg text-[#4F4F4F] leading-relaxed'>
            Crypto to Flat Loan is almost here.{' '}
            <br className='hidden sm:inline' />
            Enter your email and we’ll let you know the moment it’s live.
          </p>
        </div>

        <div className='w-full'>
          <InputField
            label='Email'
            placeholder='Enter your email'
            value={email}
            onChange={setEmail}
            type='email'
          />
        </div>
      </div>

      <div className='w-full'>
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
