import { BrowserProvider, Contract } from "ethers";
import abi from "../constant/abi.json";

export async function getWeb3State() {
    try {
        if (!window.ethereum) { // checking if metamaks is installed or not
            throw new Error("Metamask wallet is not installed");
        }
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        const selectedAccount = accounts[0];
        console.log("Selected Account: ", selectedAccount);

        const chainIdHex = await window.ethereum.request({
            method: "eth_chainId"
        });
        const chainId = parseInt(chainIdHex, 16);
        console.log("Chain ID: ", chainId);

        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        console.log("Signer: ", signer);

        const contractAddress = "0xcf4afb49fa982795fda593bc435dda15f9b1bc75";
        const contractInstance = new Contract(contractAddress, abi, signer);
        console.log("Contract Instance: ", contractInstance);

        return { contractInstance, selectedAccount, chainId };
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}