import React, { useRef } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context';

function RegisterCandidate() {
  const {web3state} = UseWeb3Context()
  const {contractInstance} = web3state
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const partyRef = useRef(null);
  const genderRef = useRef(null);

  const handleCandidateRegistration = async (e) => {
    try {
      e.preventDefault();
      const _name = nameRef.current.value;
      const _age = ageRef.current.value;
      const _party = partyRef.current.value;
      // const _gender = genderRef.current.value;
      const _gender = 1;
      console.log("Contract Instance : ", contractInstance);
      
      // console.log("Name : ", name);
      // console.log("Age : ", age);
      // console.log("Party : ", party);
      // console.log("Gender : ", gender);
      await contractInstance.registerCandidate(_name,_party, _age, _gender);
      // console.log(voteCandidateId);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 text-gray-200">
      <div className="w-full max-w-md p-6 bg-opacity-30 bg-black rounded-lg shadow-lg backdrop-blur-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Register Candidate</h2>
  
        <form className="space-y-4" onSubmit={handleCandidateRegistration}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter candidate's name"
            />
          </div>
  
          {/* Age Input */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              ref={ageRef}
              className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter candidate's age"
            />
          </div>
  
          {/* Gender Input */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium mb-2">
              Gender
            </label>
            <select
              id="gender"
              ref={genderRef}
              defaultValue=""
              className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="0">Other</option>
            </select>
          </div>
  
          {/* Party Input */}
          <div>
            <label htmlFor="party" className="block text-sm font-medium mb-2">
              Party
            </label>
            <input
              type="text"
              ref={partyRef}
              id="party"
              className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter candidate's party"
            />
          </div>
  
          {/* Register Button */}
          <button
            type="submit"
            className="w-full p-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default RegisterCandidate