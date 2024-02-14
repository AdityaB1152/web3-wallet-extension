import { Divider, Tabs, Tooltip } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function WalletView({
    wallet , 
    setWallet ,
    seedPhrase ,
    setPhrase,
    selectedChain}
)
{

const wallet1 = "0x123qw8rupq938rypq98wrhypq398rhpq3r8hpq3"

const navigate = useNavigate();
const [fetching , setFetching] = useState(false)
const [tokens ,setTokens] = useState(null);
const [nfts , setNfts] = useState(null);
const [balance , setBalance] = useState(0);

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

const getAccountTokens = async () => {

  setFetching(true);

  const res = await axios.get('http://localhost:3001/getTokens',{
    params:{
      userAddress:wallet,
      chain:selectedChain,
    },
  });

  const response = res.data;

  if(response.tokens.length > 0){
    setTokens(response.length);
  }

  if(response.nfts.length > 0){
    setNfts(response.length);
  }

  setBalance(response.balance);
  setFetching(false);
}

useEffect(()=>{
  if(!wallet || !selectedChain) return;
  setNfts(null);
  setTokens(null);
  setBalance(0);
  getAccountTokens();
} , []);

useEffect(()=>{
  if(!wallet) return;
  setNfts(null);
  setTokens(null);
  setBalance(0);
  getAccountTokens();
},[selectedChain]);

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