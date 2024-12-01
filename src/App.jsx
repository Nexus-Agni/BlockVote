import Web3Provider from './context/web3Provider'
import RegisterCandidate from './pages/Candidate/RegisterCandidate'
import RegisterVoter from './pages/Voter/RegisterVoter'
import GetVoterList from './pages/Voter/GetVoterList'
import CastVote from './components/Voter/CastVote'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ElectionCommission from './pages/ElectionCommission/ElectionCommission'
import GetCandidateList from './pages/Candidate/GetCandidateList'
import Layout from './Layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home />} />
        <Route path='/register-candidate' element={<RegisterCandidate />} />
        <Route path='/candidate-list' element={<GetCandidateList />} />
        <Route path='/voter-list' element={<GetVoterList />} />
        <Route path='/register-voter' element={<RegisterVoter />} />
        <Route path='/election-commission' element={<ElectionCommission />} />
      </Route>
    )
  )
  return (
    <>
      <Web3Provider>
        <RouterProvider router={router} />
      </Web3Provider> 
    </>
  )
}

export default App