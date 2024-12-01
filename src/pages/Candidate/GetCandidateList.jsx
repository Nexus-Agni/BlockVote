import React, { useEffect, useState } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context';

const GetCandidateList = () => {
  // Dummy array of candidates
  // const candidates = [
  //   { name: "John Doe", age: 45, gender: "Male", party: "Democratic Party" },
  //   { name: "Jane Smith", age: 38, gender: "Female", party: "Republican Party" },
  //   { name: "Robert Brown", age: 52, gender: "Male", party: "Independent" },
  //   { name: "Emily Davis", age: 29, gender: "Female", party: "Green Party" },
  // ];
  const [candidates, setCandidates] = useState([]);

  const {web3state} = UseWeb3Context()
  const {contractInstance} = web3state
  useEffect(() => {
    const fetchCandidateList = async () => {
      try {
        const Response = await contractInstance.getCandidateList();
        console.log("Response : ",Response);
        setCandidates(Response);
      } catch (error) {
        console.log(error);
      }
    }
    contractInstance && fetchCandidateList();
    
  }, [contractInstance])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 text-gray-200 p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Candidate List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className="p-4 bg-opacity-30 bg-black rounded-lg shadow-lg backdrop-blur-lg"
          >
            <h3 className="text-lg font-semibold mb-2">{candidate.name}</h3>
            <p className="text-sm">
              <span className="font-medium">Age:</span> {candidate.age.toString()}
            </p>
            {
              candidate.gender.toString() === "1" ? (
                <p className="text-sm">
                  <span className="font-medium">Gender:</span> Male
                </p>
              ) : (
                <p className="text-sm">
                  <span className="font-medium">Gender:</span> Female
                </p>
              )
            }
            <p className="text-sm">
              <span className="font-medium">Party:</span> {candidate.party}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetCandidateList;
