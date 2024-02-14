const express = require('express');
const Moralis = require('moralis').default;
const ethers = require('ethers');
const app = express();
const port = 3001;

Moralis.start({
    apiKey:''
}).then(()=>{

})

app.listen(port , function(){
    console.log("Chrome Wallet Extension listening on porn"+ port);
})

app.get('/',async (req,res) => {
    res.status(200).json({
        token:'token'
    })
})


app.get('/getTokens' , async (req , res) => {

    const {userAddress , chain} = req.query;

    const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
        chain:chain,
        address:userAddress,
    });

    const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
        chain:chain,
        address:userAddress,
        mediaItems:true,
    });

    const myNfts = nfts.raw.result.map((e,i) =>{
        if(e?.media?.media_collection?.high?.url && !e.possible_spam && (e?.media?.category !== 'video')){
            return e['media']['media_collection']['high']['url'];
        }
    });

    const balance = await Moralis.EvmApi.balance.getNativeBalance({
        chain:chain,
        address:userAddress
    });

    const jsonResp = {
        tokens : tokens.raw,
        nfts:myNfts,
        balance:balance.raw
    }

    return res.status(200).json(jsonResp);

});

app.get('/generateSeed',async (req , res) =>{

    console.log('Initializing seed generation')
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;

    res.status(200).send({
        phrase:mnemonic
    });
})