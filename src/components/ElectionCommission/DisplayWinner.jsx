import React, { useEffect, useState } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context';

function DisplayWinner() {
    const {web3state} = UseWeb3Context()
    const {contractInstance} = web3state
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const getWinner = async () => {
            try {
                const winningCandidate = await contractInstance.winner();
                if(winningCandidate !== "0x0000000000000000000000000000000000000000") {
                    setWinner(winningCandidate);
                }
            } catch (error) {
                console.log(error);
            }
        }
        contractInstance && getWinner();
    }, [])
  return (
    <div>
        Winner is : {winner}
    </div>
  )
}

export default DisplayWinner