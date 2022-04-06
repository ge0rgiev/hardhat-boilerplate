/* eslint-disable no-unused-expressions */

import { run } from "hardhat";
import { TestContract } from "../typechain";
import { deploy, data } from "./test.env";

describe("UniswapV2 Spot Price Oracle", async () => {
  let testContract: TestContract;

  before(async () => {
    await run("compile");
    ({ testContract } = await deploy());
  });

  describe("Run some tests", async () => {
    it("Should or Shouldn't", async () => {
      await testContract.test();
    });
  });
});
