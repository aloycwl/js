# js

Everything about javascript

Essential JS CDN for referencing, currently consist of:

- jquery 3.6.0 dist<br>
- web3 3.0.0 dist<br>
- moment 2.29.2<br>
- ipfs-api 26.1.2 dist<br>

<h3>Examples/</h3>

<b>IPFS_Upload.html</b><br>
The only 100% working Javascript to IPFS example currently.<br>
No node.js, no NPM, no react. Simply import from CDN and run the code.<br>
No login is required, it will return the CID.<br>
IPFS HTPP Client is obselete, IPFS API has not.

<b>IPFS_Upload_web3storage.html</b><br>
Using web3.storage API to upload in case Infura start charging

<b>ERC20_Get_Balance.html</b><br>
Fetch token from pure javascript using metamask

<b>Web3_Alchemy_or_Infura.html</b><br>
In environment such as mobile browser or anything without Metamask or related provider<br>
Can only fetch information, if need to write will require memonic phase signing

<b>IFPS_Upload_Canvas.html</b><br>
Merge multiple images to canvas and convert it into base64<br>
Convert base64 into a file object and upload to IPFS<br>
Added promise for async to only allow ipfs action after all images are loaded

<b>Web3_List_Token_Holders_getPastEvents.html</b><br>
Using ABI and contract address to get all emitted events with the owner addresses<br>
Put them into an unique only array
