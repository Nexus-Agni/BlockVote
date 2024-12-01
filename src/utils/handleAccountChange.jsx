export const handleAccountChange = async (setweb3state) => {
    const accounts = await window.ethereum.request({
        method : "eth_requestAccounts"
    })
    const selectedAccount = accounts[0]
    setweb3state((prevState)=>({
        ...prevState,
        selectedAccount
    }))
}