import React, { useRef } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context'

function CastVote() {
  const {contractInstance} = UseWeb3Context();
  const candidateIdRef = useRef(null);
  const voterIdRef = useRef(null);

  const handleCastVote = async (e) => {
    try {
      e.preventDefault();
      const voterId = voterIdRef.current.value;
      const candidateId = candidateIdRef.current.value;
      console.log("Voter ID : ", voterId);
      console.log("Candidate ID : ", candidateId);
      // const result = await contractInstance.castVote();
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 text-gray-200 flex items-center justify-center p-8">
      <div className="w-full max-w-md p-6 bg-opacity-30 bg-black rounded-lg shadow-lg backdrop-blur-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Cast Your Vote</h2>

        <form className="space-y-4" onSubmit={handleCastVote}>
          {/* Voter ID Field */}
          <div>
            <label htmlFor="voterId" className="block text-sm font-medium mb-2">
              Voter ID
            </label>
            <select
              id="voterId"
              className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              defaultValue=""
              ref={voterIdRef}
            >
              <option value="" disabled >
                Select Voter ID
              </option>
              <option value="1">Voter 1</option>
              <option value="2">Voter 2</option>
              <option value="3">Voter 3</option>
            </select>
          </div>

          {/* Candidate ID Field */}
          <div>
            <label
              htmlFor="candidateId"
              className="block text-sm font-medium mb-2"
            >
              Candidate ID
            </label>
            <select
              id="candidateId"
              className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              defaultValue=""
              ref={candidateIdRef} 
            >
              <option value="" disabled>
                Select Candidate ID
              </option>
              <option value="1">Candidate 1</option>
              <option value="2">Candidate 2</option>
              <option value="3">Candidate 3</option>
              <option value="4">Candidate 4</option>
              <option value="5">Candidate 5</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90"
          >
            Cast Vote
          </button>
        </form>
      </div>
    </div>
  )
}

export default CastVote