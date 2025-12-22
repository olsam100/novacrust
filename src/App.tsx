import { useState } from 'react'
import ConversionWidget, { TabType } from './pages/home'
import BankDetails from './pages/bank-details-form'
import ContactDetails from './pages/contact-details'
import CashToCrypto from './components/widget-tabs/cash-to-crypto'
import CryptoToFlatLoan from './components/widget-tabs/crypto-to-flat-loan'
import PaymentInstruction from './pages/payment-instruction'
import SuccessConfirmation from './pages/success-confirmation'

function App() {
  const [currentTab, setCurrentTab] = useState<TabType | null>(null)
  const [step, setStep] = useState<
    'widget' | 'bank' | 'contact' | 'payment' | 'success'
  >('widget')

  const handleNext = (tabType: TabType) => {
    setCurrentTab(tabType)
    if (tabType === 'crypto-to-cash') {
      setStep('bank')
    }
  }

  const handleGoHome = () => {
    setCurrentTab(null)
    setStep('widget')
  }
  return (
    <div>
      <div className='min-h-screen flex items-center justify-center'>
        {step === 'widget' && <ConversionWidget onNext={handleNext} />}{' '}
        {currentTab === 'crypto-to-cash' && step === 'bank' && (
          <BankDetails
            onNext={() => setStep('contact')}
            onBack={handleGoHome}
          />
        )}
        {currentTab === 'crypto-to-cash' && step === 'contact' && (
          <ContactDetails
            onNext={() => setStep('payment')}
            onBack={() => setStep('bank')}
          />
        )}
        {currentTab === 'crypto-to-cash' && step === 'payment' && (
          <PaymentInstruction
            onConfirm={() => setStep('success')}
            onBack={() => setStep('contact')}
          />
        )}
        {currentTab === 'crypto-to-cash' && step === 'success' && (
          <SuccessConfirmation onGoHome={handleGoHome} />
        )}
        {currentTab === 'cash-to-crypto' && <CashToCrypto />}
        {currentTab === 'crypto-to-flat-loan' && <CryptoToFlatLoan />}
      </div>
    </div>
  )
}
export default App
