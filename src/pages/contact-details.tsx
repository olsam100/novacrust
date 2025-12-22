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
    <div className='w-full max-w-lg mx-auto bg-white border border-[#CCF6E5] rounded-2xl sm:rounded-[30px] flex flex-col gap-8 sm:gap-10 px-4 sm:px-10 py-8 sm:py-12'>
      {/* Header */}
      <header className='w-full flex items-center gap-4 sm:gap-6 px-2 sm:px-0'>
        <button onClick={onBack} className='p-2 -ml-2'>
          <BackArrowIcon />
        </button>
        <h1 className='font-semibold text-lg sm:text-xl text-[#013941]'>
          Recipient details
        </h1>
      </header>

      {/* Form */}
      <div className='w-full flex flex-col gap-10 sm:gap-12'>
        <div className='flex flex-col gap-6 sm:gap-8'>
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
        </div>

        <PrimaryButton name='Next' onClick={onNext} />
      </div>
    </div>
  )
}

export default ContactDetails
