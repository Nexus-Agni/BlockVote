import React from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context'
import { AlertTriangle } from "lucide-react";

function EmergencyDeclare() {
    const {contractInstance} = UseWeb3Context()

    const handleEmergencyDeclare = async () => {
        try {
            const result = await contractInstance.emergencyStopVoting();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 text-gray-200 flex items-center justify-center p-8">
    <button
      onClick={handleEmergencyDeclare}
      className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold text-gray-100 bg-gradient-to-r from-red-500 to-red-700 rounded-lg hover:opacity-90 transition duration-300 shadow-lg"
    >
      <AlertTriangle className="w-5 h-5" />
      <span>Emergency Stop</span>
    </button>
  </div>
  )
}

export default EmergencyDeclare