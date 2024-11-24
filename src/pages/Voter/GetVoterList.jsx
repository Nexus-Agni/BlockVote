import React, { useEffect } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context';

const GetVoterList = () => {
  // Dummy array of voters
  const voters = [
    { name: "Alice Johnson", age: 29, gender: "Female" },
    { name: "Bob Smith", age: 35, gender: "Male" },
    { name: "Charlie Brown", age: 42, gender: "Male" },
    { name: "Daisy Miller", age: 25, gender: "Female" },
  ];

  const {contractInstance} = UseWeb3Context();
  useEffect(() => {
    const fetchVoterList = async () => {
      try {
        const voterList = await contractInstance.getVoterList();
        console.log(voterList);
      } catch (error) {
        logger.error(error);
      }
    }
    contractInstance && fetchVoterList();
  }, [contractInstance])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 text-gray-200 p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Voter List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {voters.map((voter, index) => (
          <div
            key={index}
            className="p-4 bg-opacity-30 bg-black rounded-lg shadow-lg backdrop-blur-lg"
          >
            <h3 className="text-lg font-semibold mb-2">{voter.name}</h3>
            <p className="text-sm">
              <span className="font-medium">Age:</span> {voter.age}
            </p>
            <p className="text-sm">
              <span className="font-medium">Gender:</span> {voter.gender}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetVoterList;