import { useState } from 'react'
import classNames from 'classnames'
import CryptoToCash from '@/components/widget-tabs/crypto-to-cash'
import CashToCrypto from '@/components/widget-tabs/cash-to-crypto'
import CryptoToFlatLoan from '@/components/widget-tabs/crypto-to-flat-loan'

export type TabType =
  | 'crypto-to-cash'
  | 'cash-to-crypto'
  | 'crypto-to-flat-loan'

interface ConversionWidgetProps {
  onNext: (tabType: TabType) => void
}

const ConversionWidget = ({ onNext }: ConversionWidgetProps) => {
  const [tabIndex, setTabIndex] = useState(0)

  const tabs: { id: number; name: string; type: TabType }[] = [
    { id: 1, name: 'Crypto to Cash', type: 'crypto-to-cash' },
    { id: 2, name: 'Cash to Crypto', type: 'cash-to-crypto' },
    { id: 3, name: 'Crypto to Flat Loan', type: 'crypto-to-flat-loan' },
  ]

  const currentTab = tabs[tabIndex]

  const renderTabContent = () => {
    switch (currentTab.type) {
      case 'crypto-to-cash':
        return <CryptoToCash onNext={() => onNext('crypto-to-cash')} />
      case 'cash-to-crypto':
        return <CashToCrypto />
      case 'crypto-to-flat-loan':
        return <CryptoToFlatLoan />
      default:
        return <CryptoToCash onNext={() => onNext('crypto-to-cash')} />
    }
  }

  return (
    <div className='w-full max-w-[90vw] sm:max-w-135 md:max-w-160 lg:max-w-200 xl:max-w-225 bg-white border border-[#CCF6E5] flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 rounded-[20px] md:rounded-[25px] lg:rounded-[30px]'>
      <header className='pt-6 md:pt-8 lg:pt-10 w-full px-4'>
        <nav className='rounded-[20px] md:rounded-[25px] lg:rounded-[30px] bg-[#F2F2F2] overflow-x-auto'>
          <ul className='flex items-center min-w-max p-1 md:p-1.5'>
            {tabs.map((tab, index) => (
              <li key={tab.id} className='flex items-center'>
                <button
                  onClick={() => setTabIndex(index)}
                  className={classNames(
                    'cursor-pointer flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 font-medium text-xs md:text-sm whitespace-nowrap transition-all',
                    tabIndex === index
                      ? 'bg-[#013941] text-white rounded-2xl md:rounded-[20px] lg:rounded-[30px]'
                      : 'text-[#828282]'
                  )}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className='w-full'>{renderTabContent()}</main>
    </div>
  )
}

export default ConversionWidget
