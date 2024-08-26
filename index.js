const { Web3 } = require('web3');
const fs = require('fs');  
const url = 'https://public-en-cypress.klaytn.net';
const web3 = new Web3(url);
const contracts = [
	"0x5a293a1e234f4c26251fa0c69f33c83c38c091ff",
	"0x6b8f71aa8d5817d94056103886a1f07d12e78ce5",
	"0x46dbdc7965cf3cd2257c054feab941a05ff46488",
	"0x3f635476023a6422478cf288ecaeb3fdcf025e9f",
	"0x8f5aa6b6dcd2d952a22920e8fe3f798471d05901",
	"0x2da32c00c3d0a77623cb13a371b24fffbafda4a7",
	"0xe47e90c58f8336a2f24bcd9bcb530e2e02e1e8ae",
	"0x7561e492f075c4e49939772f6aa8eaf85ec60019",
	"0x90329d076a0c7c62cacfc389c523c21b3b37bd8b",
	"0x56d23f924cd526e5590ed94193a892e913e38079",
	"0xce70eef5adac126c37c8bc0c1228d48b70066d03",
	"0xa36262e0f147f1863909d8d8eaa5cf3935e4f1c7",
	"0xe2dd65c215089dda1695ae96cce77f301a1750e5",
	"0xa9f07b1260bb9eebcbaba66700b00fe08b61e1e6",
	"0x03546f472b320883a368f3247b349597eee4be28",
	"0xdf104df1b238dcd1be2d160cea47893e03b3f9b9",
	"0x93c7b98c267d37ab0fab3bfdf629ef729580f565",
	"0xe50c9ba45bc554d76ecc2fc102ec20eb8d738885",
	"0xbb915237d8b46dcdfe813c914bf98708e0dad84a",
	"0x253ebdb767f18002a22cbb26176356efeb0bf641",
	"0x4007cb1fb9d1158add29cf5d88568dd44a1f516e",
	"0xbaf8864ee1b5f2be3dcd637203aed524b86db4e4",
	"0x858dbe0ad05b545dbfacebded2b5fb1e38cc56bc",
	"0x4e24762be544f0af9235ffad146f39bbe0ec7800",
	"0xc25135732bbb479f9fd4fc29f50e7ebbcdab04fb",
	"0x16c15581818ba99472b0ff7616d05fe1fd7cd44d",
	"0xe3c2a545160b35d922f10b312da6acf5aacb0bc9",
	"0xbaf323ba21d054d2418741ac582f238b1eb930ce",
	"0xef1194e0466cebe151f825e1433aaf0f68600311",
	"0xcc41e29aa016488a6959b8be177b5fc1bf8656f8",
	"0x86b0f3dfddadb2e57b00a6d740f1a464f79179bf",
	"0x5bcdf0efc9c0ce98c69d9407b822b1970e710b68",
	"0x50b9d3364b18ca519d24214f0e78732d95ab0e78",
	"0x543e69ba92ea003b03b5882be3dc04e3eeda5867",
	"0x30b0bd905efa7503879554fa8f8714c5c82f8ebc",
	"0x14711a2b8ea06844f9b0f503bbad955ba2e6b625",
	"0x77a381e0281a9f4c1e98b99131a59c870ee2573c",
	"0x92fccc0940b5bb0e39ea31dc351e409a5056dee6",
	"0x3bf402aef11a935d715b04b8c1b53edbb4b85a63",
	"0xd8f3679b53d2f337ef6431acfc213d1725557c7a",
	"0x24bd51a7e8b4a77201071cac1118331da49a1a38",
	"0x041bf618a734e1cb224a3e28ca7a346bd6597ebc",
	"0x4247428bfbaf0aaea4984b2639c2e615a7b02bab",
	"0x3b0a9c4cfa6dd8a2cbecb1e0ad9a35336970afdf",
	"0x3ab312352eae61d7057059ca1de9cd9a3ef61068",
	"0x590744cb8cf1a698d7db509b52bf209e3cccb8e0",
	"0xce8905b85119928e6c828e5cb4e2a9fd2e128bf9",
	"0x29c42f139d2f492ffe6bf3c48ae889d74f0d4f1d",
	"0x89cd6659aab01c898bf92162349b41ba9adce6ee",
	"0x349c9e6888b774afcc6feaaeba038e71b154a88f",
	"0xd96bf5d7ce9c34447290e51d2a44eba232c041bd",
	"0x147ce12ffb364f10920c5a5617cbea16ae377c82",
	"0x3bb88f83b6b9c6286daa7dd2d1412ed2a5510c90",
	"0x852339d394b3f71538435773be09705ca764a94e",
	"0x00000000000fbb278b75de624d4968ec951ba76c",
	"0xc984335f3b02382ec7393f9e091d19b84064589b",
	"0xe74c1c78e3ebe50a74bc1d88f13a68889b076e66",
	"0x9d0d0885e05270876bb6a02478b05736c8458106",
	"0x91bffc7bfa9b4014b8c0ef6512f6d1413ffa4bba",
	"0x0ed55aee0399064cfe51dd3cc10d99734bb796c7",
	"0x22d28b7e69eb45fdeaaf7b57161a53d94c648caf",
	"0xe66a466e45e9b3ae1ee840019dd4cd4e676d3d2d",
	"0x0af3f3fe9e822b7a740ca45ce170340b2da6f4cc",
	"0x6db38a2f363c5886c4e66ce0d38e031160fd0a09",
	"0xc904e0ab77139f65c78b192bcf7266da85cc3343",
	"0x365b1f1d39a563072983f2cdbfcd9789e5f16208",
	"0x347dae26e4d32e83415aea8681ab53ff90ad9e39",
	"0x1c8a9c76ed37dd4f3d6c169c275d1e82ea9ccda7",
	"0x869353152046343556130c4393b8acf418cafb0b",
	"0xc0e6ca567b516a6e64d63023d169ca4e57e62c1c",
	"0x97a71b49ff239bc7e8d58b667de91c585240b77b",
	"0x96df13589bc6eab9e7ecac780ab9c5604b1d82a5",
	"0x0e32d036f0148056e90085df7fade9ee61d34aa4",
	"0x89a6b50a0f74910d27389a513b5f8863e9878b8f",
	"0x00268c99318c4e5a4340482af8f44fad1f7fb56c",
	"0x3b2438bec49f4edafe2b753aeb91e6444a54b939",
	"0x9b3f0538a29dc402a37ee91b0249bc74137bfeef",
	"0xf64f9ac3ae7ae02dac24c0fbea531e91e5590ce9",
	"0x8c51e5defbe9d2ba844c76bf91282ba721f9681c",
	"0xde5898368c6d250f6c1a3c2eabc6497960f78564",
	"0x4b1cd57a5df634feccd7eb82b9fd163c8fe03eaf",
	"0x6aa7984fa2ff52e6b34e1aca80b66982806b9ac4",
	"0xea73e232895d6be5a474b8de8794c73cb1aa78a4",
	"0x2e72f8e590aff99b12edef1b72bb66c22ef876a9",
	"0x29421a3c92075348fcbcb04de965e802ed187302",
	"0x9be14ee2077a3480a331ff537e7ebbc987a741ae",
	"0x3a5299fc75251c293bf8bd918e8f7e254936c275",
	"0x50851a2882519e884adaadf6215573cf4f7bd642",

]

const abi = [
    {
        "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
        "name": "ownerOf",
        "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    }
];

async function getOwners(contractAddress, startIndex = 0, writeStream, blockNumber) {
    const contract = new web3.eth.Contract(abi, contractAddress);
    let index = startIndex;
    let ownerCount = 0;

    writeStream.write(`Contract Address: ${contractAddress} at Block ${blockNumber}\n`);
    while (true) {
        try {
            const owner = await contract.methods.ownerOf(index).call({ blockTag: blockNumber });
            ownerCount++;
            writeStream.write(`  Owner #${ownerCount}: ${owner}\n`);
            index++;
        } catch (err) {
            writeStream.write(`Finished scanning contract ${contractAddress}. Total owners found: ${ownerCount}\n\n`);
            break;
        }
    }
}

async function main() {
    const blockNumber = 162691543;  // Replace with the specific block number you want to snapshot
    const writeStream = fs.createWriteStream('nft_owners_snapshot.txt', { flags: 'w' });

    for (let contractAddress of contracts) {
        await getOwners(contractAddress, 0, writeStream, blockNumber);
    }

    writeStream.end(() => {
        console.log('Finished writing to nft_owners_snapshot.txt');
    });
}

main();