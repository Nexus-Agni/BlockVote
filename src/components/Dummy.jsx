import React, { useContext } from 'react'
import { Web3Context } from '../context/Web3context'

function Dummy() {
    const {contractInstance, selectedAccount, chainId} = useContext(Web3Context);
    console.log("Contract Instance : ", contractInstance);
    console.log("Selected Account : ", selectedAccount);
    console.log("Chain Id : ", chainId);
  return (
    <div>Dummy</div>
  )
}

export default Dummy