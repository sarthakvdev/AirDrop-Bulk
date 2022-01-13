const bulkMint = async () => {
  const address = [
    // list of addresses in string
  ];

  // Add name of collection
  const NAME = "";

  // Add deployed contract's address
  const CONTRACT_ADDRESS = "";

  // Add link of metadata
  const metadata = "";

  const DropContractFactory = await hre.ethers.getContractFactory(NAME);
  const dropContract = DropContractFactory.attach(CONTRACT_ADDRESS);

  console.log("Contract address:", dropContract.address);

  for (let i = 0; i < address.length; i++) {
    try {
      let txn = await dropContract.safeMint(address[i], metadata);

      console.log("Mining, please wait...");
      await txn.wait();
    } catch (e) {
      console.log(e);
    } finally {
      console.log(`${i}. Address: ${address[i]}`);
    }
  }
};

bulkMint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
