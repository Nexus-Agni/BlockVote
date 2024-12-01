import React, { useEffect, useState } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context'

function VotingStatus() {
    const {web3state} = UseWeb3Context()
    const {contractInstance} = web3state
    const [votingStatus, setVotingStatus] = useState(null)

    useEffect(() => {
        const handleVotingStatus = async () => {
            try {
                const currentVotingStatus = await contractInstance.getVotingStatus();
                console.log(currentVotingStatus);
                setVotingStatus(currentVotingStatus);
            } catch (error) {
                console.log(error);
                
            }
        }
        contractInstance && handleVotingStatus();
    }, [])
  return (
    <div>
        VotingStatus : {votingStatus}
    </div>
  )
}

export default VotingStatus