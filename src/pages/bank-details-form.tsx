// import { useState } from 'react'
// import BackArrowIcon from '@/assets/icons/backArrowIcon'
// import PrimaryButton from '@/components/button'
// import InputField from '@/components/shared/input-field'
// import SelectField, { SelectOption } from '@/components/shared/select-field'

// const bankOptions: SelectOption[] = [
//   { value: 'bank1', label: 'Access Bank' },
//   { value: 'bank2', label: 'GTBank' },
//   { value: 'bank3', label: 'First Bank' },
//   { value: 'bank4', label: 'Zenith Bank' },
//   { value: 'bank5', label: 'UBA' },
// ]

// const BankDetails = ({
//   onNext,
//   onBack,
// }: {
//   onNext: () => void
//   onBack: () => void
// }) => {
//   const [bank, setBank] = useState<SelectOption | null>(null)
//   const [accountNumber, setAccountNumber] = useState('')

//   return (
//     <div className='w-full bg-white border border-[#CCF6E5] rounded-2xl sm:rounded-[30px] flex flex-col gap-8 sm:gap-10 sm:px-10 py-8 '>
//       <header className='w-full flex items-center gap-4 sm:gap-6 px-2 sm:px-0'>
//         <button onClick={onBack} className='p-2 -ml-2'>
//           <BackArrowIcon />
//         </button>
//         <h1 className='font-semibold text-lg sm:text-xl text-[#013941]'>
//           Recipient details
//         </h1>
//       </header>

//       <div className='w-full flex flex-col gap-10 sm:gap-12'>
//         <div className='flex flex-col gap-6 sm:gap-8'>
//           <SelectField
//             label='Bank'
//             placeholder='Select a bank'
//             options={bankOptions}
//             value={bank}
//             onChange={setBank}
//           />
//           <InputField
//             label='Account number'
//             placeholder='Enter your account number'
//             value={accountNumber}
//             onChange={setAccountNumber}
//             type='text'
//           />
//           <InputField
//             label='Account name'
//             placeholder='Enter your account name'
//             type='text'
//           />
//         </div>

//         <PrimaryButton name='Next' onClick={onNext} />
//       </div>
//     </div>
//   )
// }

// export default BankDetails

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
    <div className='w-160 bg-white border border-[#CCF6E5] flex flex-col items-center justify-center gap-10 pt-10 pb-14 rounded-[30px]'>
      <header className='flex items-center relative w-full gap-39.75 pl-16'>
        <button onClick={onBack} className=''>
          <BackArrowIcon />
        </button>
        <h1 className='font-semibold text-xl text-[#013941]'>
          Recipient details
        </h1>
      </header>

      <div className='flex flex-col gap-42.5 w-full'>
        <main
          className='w-full flex flex-col gap-6'
          style={{ padding: '0 64px' }}
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
          className='flex w-full items-center'
          style={{ padding: '0 64px' }}
        >
          <PrimaryButton name='Next' onClick={onNext} />
        </footer>
      </div>
    </div>
  )
}

export default BankDetails
