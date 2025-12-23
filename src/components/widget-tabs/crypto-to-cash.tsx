import { useState } from 'react'
import NgnIcon from '@/assets/icons/ngnIcon'
import Card from '../shared/card'
import EthIcon from '@/assets/icons/ethIcon'
import SelectField, { SelectOption } from '../shared/select-field'
import TonIcon from '@/assets/icons/tonIcon'
import BnbIcon from '@/assets/icons/bnbIcon'
import CeloIcon from '@/assets/icons/celo'
import MetamaskIcon from '@/assets/icons/metamaskIcon'
import RainbowIcon from '@/assets/icons/rainbowIcon'
import WalletIcon from '@/assets/icons/walletIcon'
import OtherIcon from '@/assets/icons/otherIcon'
import PrimaryButton from '../button'

const options = [
  { value: 'eth', label: 'ETH', icon: <EthIcon /> },
  {
    value: 'celo',
    label: 'USDT - CELO',
    icon: <CeloIcon />,
  },
  {
    value: 'ton',
    label: 'USDT - TON',
    icon: <TonIcon />,
  },
  {
    value: 'bnb',
    label: 'USDT - BNB',
    icon: <BnbIcon />,
  },
]

const receiveOptions = [
  { value: 'ngn', label: 'NGN', icon: <NgnIcon /> },
  {
    value: 'usd',
    label: 'USD',
    icon: (
      <div className='w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold'>
        $
      </div>
    ),
  },
  {
    value: 'eur',
    label: 'EUR',
    icon: (
      <div className='w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold'>
        €
      </div>
    ),
  },
]

const payFromOptions = [
  {
    value: 'metamask',
    label: 'Metamask',
    description: '0x742d...5f8a',
    icon: <MetamaskIcon />,
  },
  {
    value: 'rainbox',
    label: 'Rainbow',
    description: 'bc1qxy...7n2p',
    icon: <RainbowIcon />,
  },
  {
    value: 'wallet-connect',
    label: 'WalletConnect',
    description: '0x8b3c...2d9e',
    icon: <WalletIcon />,
  },
  {
    value: 'other-crypto',
    label: 'Other Crypto Wallets (Binance, Conibase, Bybit etc)',
    description: '0x8b3c...2d9e',
    icon: <OtherIcon />,
  },
]

const payToOptions: SelectOption[] = [
  {
    value: 'bank1',
    label: 'Access Bank',
    description: '0123456789',
    icon: <OtherIcon />,
  },
  {
    value: 'bank2',
    label: 'GTBank',
    description: '9876543210',
    icon: <OtherIcon />,
  },
  {
    value: 'bank3',
    label: 'First Bank',
    description: '5432167890',
    icon: <OtherIcon />,
  },
  {
    value: 'bank4',
    label: 'Zenith Bank',
    description: '1357924680',
    icon: <OtherIcon />,
  },
]

const CryptoToCash = ({ onNext }: { onNext: () => void }) => {
  const [payFrom, setPayFrom] = useState<SelectOption | null>(null)
  const [payTo, setPayTo] = useState<SelectOption | null>(null)

  return (
    <div className='flex flex-col gap-6 md:gap-8 lg:gap-10 w-full pb-8 md:pb-12 lg:pb-14 px-4 md:px-8'>
      <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 w-full'>
        <div className='w-full'>
          <Card title='You pay' amount={1.0} variant='pay' options={options} />
        </div>
        <div className='w-full'>
          <Card
            title='You receive'
            amount={1.0}
            variant='receive'
            options={receiveOptions}
          />
        </div>
        <div>
          <SelectField
            label='Pay from'
            placeholder='Select an option'
            options={payFromOptions}
            value={payFrom}
            onChange={setPayFrom}
          />
        </div>
        <div>
          <SelectField
            label='Pay to'
            placeholder='Select an option'
            options={payToOptions}
            value={payTo}
            onChange={setPayTo}
          />
        </div>
      </div>

      <div className='flex w-full items-center'>
        <PrimaryButton name='Convert now' onClick={onNext} />
      </div>
    </div>
  )
}

export default CryptoToCash
