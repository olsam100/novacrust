import { useState } from 'react'
import InputField from '../shared/input-field'
import PrimaryButton from '../button'

const CashToCrypto = () => {
  const [email, setEmail] = useState('')

  return (
    <div className='w-full flex flex-col items-center gap-10 sm:gap-16 lg:gap-20 pt-6 sm:pt-8 lg:pt-10.25 pb-12 sm:pb-20 lg:pb-56.25 px-4 sm:px-8 lg:px-16'>
      <div className='w-full bg-white rounded-2xl sm:rounded-[25px] lg:rounded-[30px] flex flex-col items-center gap-5 sm:gap-6 lg:gap-7.5'>
        <div className='w-full flex flex-col items-center gap-3 sm:gap-4 lg:gap-4.25 text-center'>
          <p
            className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#013941]'
            style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          >
            Coming Soon!
          </p>
          <p className='text-sm sm:text-base lg:text-lg text-[#4F4F4F] leading-relaxed px-4 sm:px-0'>
            Cash to Crypto is almost here. <br className='hidden sm:inline' />
            Enter your email and we'll let you know the moment it's live.
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

export default CashToCrypto
