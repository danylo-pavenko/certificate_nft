import { expect } from "chai";
import { ethers } from "hardhat";
import { SolidityDeveloperCertificate__factory } from "../typechain-types";

describe("Solidity Dev Certificate", function () {

  describe("Deployment", function () {
    it("Success deploy a just contract", async function () {
      const [signer] = await ethers.getSigners();
      
      const Factory = await new SolidityDeveloperCertificate__factory(signer).deploy();
      const certificateNft = await Factory.deployed();

      expect(certificateNft.address).to.exist;
      expect(await certificateNft.balanceOf(signer.address)).to.equal(1);
    });
  });
});
