import { Button } from 'antd'
import React from 'react'

function Home() {
  return (
    <div className='content'>

        <h2>Hey There!</h2>
        <h4>Welcome to Web3 Wallet</h4>

<Button 
className='frontPageButton'
type='primary'>Create a Wallet!</Button>
<Button 
className='frontPageButton'
type='default'>Sign In With Seed Phrase</Button>
        </div>
  )
}

export default Home