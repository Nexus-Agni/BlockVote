import React, { useEffect, useState } from 'react'
import { Web3Context } from './Web3context'
import {getWeb3State} from '../utils/getWeb3State';
import { handleAccountChange } from '../utils/handleAccountChange';
import { handleChainChange } from '../utils/handleChainChange';
import { Wallet } from 'lucide-react';

function Web3Provider({children}) {
    const [web3state, setweb3state] = useState({
        contractInstance : null,
        selectedAccount : null,
        chainId : null
    })

    const handleWallet = async () => {
      try {
        const {contractInstance, selectedAccount, chainId} = await getWeb3State();
        setweb3state({contractInstance, selectedAccount, chainId});
      } catch (error) {
        console.error(error);
        throw new Error
      }
    }

    useEffect(()=> {
      const handleAccountChangeWrapper = () => handleAccountChange(setweb3state);
      const handleChainChangeWrapper = () => handleChainChange(setweb3state);
    
      window.ethereum.on("accountsChanged", handleAccountChangeWrapper)
      window.ethereum.on("chainChanged", handleChainChangeWrapper)
    
      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountChangeWrapper)
        window.ethereum.removeListener("chainChanged", handleChainChangeWrapper)
      }
    }, [setweb3state])
    
  return (
    <div>
        <Web3Context.Provider value={web3state} >
            {children}
        </Web3Context.Provider>
        <button
          onClick={handleWallet}
          className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold text-gray-200 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition duration-300"
        >
          <Wallet className="w-5 h-5" />
          <span>Connect Wallet</span>
        </button>
    </div>
  )
}

export default Web3Provider