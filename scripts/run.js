// This script is for testing the deploy

const run = async () => {
  const DropContractFactory = await hre.ethers.getContractFactory(
    // "Name of Contract"
  );
  const dropContract = await DropContractFactory.deploy();

  await dropContract.deployed();

  console.log("Drop Contract deployed at:", dropContract.address);
};

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
