import BackArrowIcon from '@/assets/icons/backArrowIcon'
import CountryFlag from '@/assets/icons/countryflagIcon'
import PrimaryButton from '@/components/button'
import InputField from '@/components/shared/input-field'
import PhoneInputField from '@/components/shared/phone-field'
import { useState } from 'react'

const ContactDetails = ({
  onNext,
  onBack,
}: {
  onNext: () => void
  onBack: () => void
}) => {
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <>
      <div className='w-full lg:w-160 bg-white border border-[#CCF6E5] flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-14 rounded-2xl sm:rounded-[25px] lg:rounded-[30px]'>
        <header className='flex items-center relative w-full gap-4 sm:gap-8 lg:gap-39.75 px-4 sm:px-8 lg:pl-16'>
          <button onClick={onBack} className=''>
            <BackArrowIcon />
          </button>
          <h1 className='font-semibold text-lg sm:text-xl text-[#013941]'>
            Recipient details
          </h1>
        </header>

        <div className='flex flex-col gap-8 sm:gap-12 lg:gap-79 w-full'>
          <main
            className='w-full flex flex-col gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-8 lg:px-16'
            style={{
              padding: window.innerWidth >= 1024 ? '0 64px' : undefined,
            }}
          >
            <InputField
              label='Recipient email'
              placeholder='Enter recipient email'
              value={email}
              onChange={setEmail}
              type='email'
            />
            <PhoneInputField
              label='Recipient phone number'
              placeholder='000 - 000 - 00000'
              value={phoneNumber}
              onChange={setPhoneNumber}
              countryCode='+234'
              countryFlag={<CountryFlag />}
            />
          </main>

          <footer
            className='flex w-full items-center px-4 sm:px-8 lg:px-16'
            style={{
              padding: window.innerWidth >= 1024 ? '0 64px' : undefined,
            }}
          >
            <PrimaryButton name='Next' onClick={onNext} />
          </footer>
        </div>
      </div>
    </>
  )
}

export default ContactDetails
