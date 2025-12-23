import BackArrowIcon from '@/assets/icons/backArrowIcon'
import PrimaryButton from '@/components/button'
import InputField from '@/components/shared/input-field'
import SelectField, { SelectOption } from '@/components/shared/select-field'
import { useState } from 'react'

const BankDetails = ({
  onNext,
  onBack,
}: {
  onNext: () => void
  onBack: () => void
}) => {
  const [bank, setBank] = useState<SelectOption | null>(null)
  const [accountNumber, setAccountNumber] = useState('')

  const bankOptions: SelectOption[] = [
    { value: 'bank1', label: 'Access Bank' },
    { value: 'bank2', label: 'GTBank' },
    { value: 'bank3', label: 'First Bank' },
    { value: 'bank4', label: 'Zenith Bank' },
    { value: 'bank5', label: 'UBA' },
  ]

  return (
    <div className='w-full lg:w-160 bg-white border border-[#CCF6E5] flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-14 rounded-2xl sm:rounded-[25px] lg:rounded-[30px]'>
      <header className='flex items-center relative w-full gap-4 sm:gap-8 lg:gap-39.75 px-4 sm:px-8 lg:pl-16'>
        <button onClick={onBack} className=''>
          <BackArrowIcon />
        </button>
        <h1 className='font-semibold text-lg sm:text-xl text-[#013941]'>
          Recipient details
        </h1>
      </header>

      <div className='flex flex-col gap-8 sm:gap-10 lg:gap-42.5 w-full'>
        <main
          className='w-full flex flex-col gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-8 lg:px-16'
          style={{ padding: window.innerWidth >= 1024 ? '0 64px' : undefined }}
        >
          <SelectField
            label='Bank'
            placeholder='Select an option'
            options={bankOptions}
            value={bank}
            onChange={setBank}
          />

          <InputField
            label='Account number'
            placeholder='Enter your account number'
            value={accountNumber}
            onChange={setAccountNumber}
            type='text'
          />

          <InputField
            label='Account name'
            placeholder='Enter your account name'
            type='text'
          />
        </main>

        <footer
          className='flex w-full items-center px-4 sm:px-8 lg:px-16'
          style={{ padding: window.innerWidth >= 1024 ? '0 64px' : undefined }}
        >
          <PrimaryButton name='Next' onClick={onNext} />
        </footer>
      </div>
    </div>
  )
}

export default BankDetails
