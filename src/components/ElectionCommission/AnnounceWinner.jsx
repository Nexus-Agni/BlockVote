import React, { useState } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context'

function AnnounceWinner() {
    const {contractInstance} = UseWeb3Context()
    const [winner, setWinner] = useState(null);

    const handleAnnounceWinner = async (e) => {
        e.preventDefault();
        try {
            const winner = await contractInstance.announceVotingResult();
            setWinner(winner);
            console.log(winner);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <button
        onClick={handleAnnounceWinner}
        className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold text-gray-200 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition duration-300"
    >
        <span>Announce Winner</span>
    </button>
  )
}

export default AnnounceWinner