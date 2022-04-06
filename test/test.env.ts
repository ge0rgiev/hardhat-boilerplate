import { ethers } from "hardhat";

import { ERC20 } from "../utils/constants";

const data = { ERC20 };

const prepareDeploy = (data: any) => async () => {
  const testContract = await (
    await ethers.getContractFactory("TestContract")
  ).deploy();

  return { testContract };
};

const deploy = prepareDeploy(data);

export { deploy, data };
