export const handleChainChange = async (setweb3state) => {
    const chainIdHex = await window.ethereum.request({
        method : "eth_chainId"
    })
    const chainId = parseInt(chainIdHex, 16);
    setweb3state((prevState)=>({
        ...prevState,
        chainId
    }))
}