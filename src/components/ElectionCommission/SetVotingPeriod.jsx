import React, { useRef } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context'

const SetVotingPeriod = () => {
    const {web3state} = UseWeb3Context()
    const {contractInstance} = web3state
    const startTimeRef = useRef(null);
    const endTimeRef = useRef(null);

    const handleSetVotingPeriod = async (e) => {
      try {
        e.preventDefault();
        const startTimeDuration = startTimeRef.current.value;
        const endTimeDuration = endTimeRef.current.value;
        console.log("Start Time : ", startTimeDuration);
        console.log("End Time : ", endTimeDuration);
        await contractInstance.setVotingPeriod(startTimeDuration, endTimeDuration);
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 text-gray-200 p-8">
        <div className="w-full max-w-md p-6 bg-opacity-30 bg-black rounded-lg shadow-lg backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Set Voting Period</h2>
  
          <form className="space-y-4" onSubmit={handleSetVotingPeriod}>
            {/* Start Time Duration Input */}
            <div>
              <label htmlFor="startTime" className="block text-sm font-medium mb-2">
                Start Time Duration
              </label>
              <input
                type="number"
                id="startTime"
                ref={startTimeRef}
                className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter voting start time"
              />
            </div>
  
            {/* End Time Duration Input */}
            <div>
              <label htmlFor="endTime" className="block text-sm font-medium mb-2">
                End Time Duration
              </label>
              <input
                type="number"
                id="endTime"
                ref={endTimeRef}
                className="w-full p-3 rounded-lg bg-opacity-20 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter voting end time"
              />
            </div>
  
            {/* Set Voting Period Button */}
            <button
              type="submit"
              className="w-full p-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90"
            >
              Set Voting Period
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SetVotingPeriod;
  