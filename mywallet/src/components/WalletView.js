import { Divider, Tabs, Tooltip } from 'antd'
import React from 'react'

function WalletView({
    wallet , 
    setWallet ,
    seedPhrase ,
    setPhrase,
    selectedChain}
)
{

const wallet1 = "0x123qw8rupq938rypq98wrhypq398rhpq3r8hpq3"

const items = [
  {
    key:3,
    label:'Tokens',
    children: (
      <>
      Tokens
      </>
    ),
  },
  {
    key:2,
    label:'NFTs',
    children: (
      <>
      NFT
      </>
    ),
  },
  {
    key:1,
    label:'Transfer',
    children: (
      <>
      Transfer
      </>
    ),
  },
]

  return (
    <div>
      <div className='walletName'>Wallet</div>
      <Tooltip title='Something' >
      <div>
        {wallet1.slice(0,4)}...{wallet1.slice(38)}
      </div>
      </Tooltip>
      <Divider/>
      <Tabs defaultActiveKey='1' items={items} className='walletView'/>
    </div>
  )
}

export default WalletView