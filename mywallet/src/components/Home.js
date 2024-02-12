import { Button } from 'antd'
import React from 'react'

function Home() {
  return (
    <div className='content'>
        <h1 className='frontPageLogo'>Home</h1>
        <h3>Hey There!</h3>

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