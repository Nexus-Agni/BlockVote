import { useState } from 'react'
import Web3Provider from './context/web3Provider'
import Dummy from './components/Dummy'
import RegisterCandidate from './pages/Candidate/RegisterCandidate'
import RegisterVoter from './pages/Voter/RegisterVoter'
import GetVoterList from './pages/Voter/GetVoterList'
import SetVotingPeriod from './components/ElectionCommission/SetVotingPeriod'

function App() {

  return (
    <>
      <Web3Provider>
        {/* <RegisterCandidate /> */}
        {/* <RegisterVoter /> */}
        {/* <GetVoterList /> */}
        {/* <SetVotingPeriod/> */}
      </Web3Provider> 
    </>
  )
}

export default App
