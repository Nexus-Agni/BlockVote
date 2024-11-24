import React, { useRef } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context';

function RegisterVoter() {
  const {contractInstance} = UseWeb3Context()
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);

  const handleVoterRegistration = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const gender = genderRef.current.value;
    console.log("Name : ", name);
    console.log("Age : ", age);
    console.log("Gender : ", gender);
    // const voteCandidateId = await contractInstance.registerVoter(name, age, gender);
    // console.log(voteCandidateId);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 text-gray-200">
      <div className="w-full max-w-md p-6 bg-opacity-30 bg-black rounded-lg shadow-lg backdrop-blur-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Register Voter</h2>
  
        <form className="space-y-4" onSubmit={handleVoterRegistration}>
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
              placeholder="Enter voter's name"
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
              placeholder="Enter voter's age"
            />
          </div>
  
          {/* Gender Input */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium mb-2">
              Gender
            </label>
            <select
              id="gender"
              defaultValue=""
              className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ref={genderRef}
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
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

export default RegisterVoter