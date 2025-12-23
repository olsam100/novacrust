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
      <div className='w-160 bg-white border border-[#CCF6E5] flex flex-col items-center justify-center gap-10 pt-10 pb-14 rounded-[30px]'>
        <header className='flex items-center relative w-full gap-39.75 pl-16'>
          <button onClick={onBack} className=''>
            <BackArrowIcon />
          </button>
          <h1 className='font-semibold text-xl text-[#013941]'>
            Recipient details
          </h1>
        </header>

        <div className='flex flex-col gap-79 w-full'>
          <main
            className='w-full flex flex-col gap-6'
            style={{ padding: '0 64px' }}
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
            className='flex w-full items-center'
            style={{ padding: '0 64px' }}
          >
            <PrimaryButton name='Next' onClick={onNext} />
          </footer>
        </div>
      </div>
    </>
  )
}

export default ContactDetails
