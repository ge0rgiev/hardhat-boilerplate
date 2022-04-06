import * as dotenv from "dotenv";

import { env as loadEnv } from "./env";
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const env = loadEnv();

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: env.MAINNET_FORK_URL,
      },
    },
  },
  gasReporter: {
    enabled: env.REPORT_GAS === "true",
    currency: "USD",
  },
};

export default config;
