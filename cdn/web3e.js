u1 = {
  internalType: 'uint256',
  name: '',
  type: 'uint256',
};
u2 = {
  internalType: 'uint256[]',
  name: '',
  type: 'uint256[]',
};
u3 = {
  internalType: 'address',
  name: '',
  type: 'address',
};
u4 = {
  internalType: 'address[]',
  name: '',
  type: 'address[]',
};
async function LB() {
  return (await contract2.methods.balanceOf(acct).call()) / 1e18;
}
async function load(a, b) {
  if (typeof ethereum != 'undefined') {
    web3a = new Web3(WB);
    web3a = web3a.eth;
    web3 = new Web3(ethereum);
    web3 = web3.eth;
    acct = await ethereum.request({ method: 'eth_requestAccounts' });
    acct = acct[0];
    frm = { from: acct };
    if ((await web3.net.getId()) != CHAIN) {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x' + CHAIN }],
      });
      location.reload();
    }
    contract = new web3.Contract(a, b);
    contract = contract.methods;
    contracta = new web3a.Contract(a, b);
    contracta = contracta.methods;
  }
}
async function load2() {
  contract2 = new web3a.Contract(
    [
      {
        inputs: [u3],
        name: 'balanceOf',
        outputs: [u1],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    CA2
  );
}
