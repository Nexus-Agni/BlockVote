import React, { useEffect } from 'react';
import { UseWeb3Context } from '../../context/UseWeb3Context';
import { Wallet2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Wallet() {
    const { handleWallet, web3state } = UseWeb3Context();
    const { selectedAccount } = web3state;
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedAccount) {
            navigate('/register-voter');
        }
    }, [selectedAccount]);

    return (
        <button
            onClick={handleWallet}
            className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold text-gray-200 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition duration-300"
        >
            <Wallet2Icon className="w-5 h-5" />
            <span>Connect Wallet</span>
        </button>
    );
}

export default Wallet;