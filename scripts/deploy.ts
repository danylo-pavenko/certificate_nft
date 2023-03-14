import { ethers, run } from "hardhat";
import { SolidityDeveloperCertificate__factory } from "../typechain-types";

async function delay(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const network = await ethers.provider.getNetwork();
  const [signer] = await ethers.getSigners();
  console.log('Begin deployment a NFT');
      
  const Factory = await new SolidityDeveloperCertificate__factory(signer).deploy();
  const certificateNft = await Factory.deployed();
  console.log('NFT deployed:', certificateNft.address);

  if (network.name != 'unknown') {
    console.log('Preparing for verify...');
    await delay(30000);
    await run('verify:verify', {
      contract: 'contracts/SolidityDeveloperCertificate.sol:SolidityDeveloperCertificate',
      address: certificateNft.address,
    })
    console.log('Completed verifying.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
