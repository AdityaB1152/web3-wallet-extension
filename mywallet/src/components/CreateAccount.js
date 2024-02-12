import { Button, Card } from 'antd'
import { ethers } from 'ethers'
import React, { useState } from 'react'

function CreateAccount({setWallet , setSeedPhrase}) {

    

    const [newSeedPharse, setNewSeedPharse] = useState(null);


    function generateWallet()  {
        console.log('click');
        const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
        setNewSeedPharse(mnemonic);
        
    }

    function setWalletAndMnemonic(){
        setSeedPhrase(newSeedPharse);
        setWallet(ethers.Wallet.fromPhrase(newSeedPharse).address);
    }


  return (
    <div className='content'>
        <Button className='frontPageButton'
        type='primary'
        onClick={()=>{generateWallet()}}> Generate Seed Phrase</Button>

        <Card className='seedPhraseContainer'>{newSeedPharse}</Card>

        <Button className='frontPageButton'
        type='default'
        onClick={()=>{setWalletAndMnemonic()}} >Oper Your New Wallet</Button>
        </div>
  )
}

export default CreateAccount