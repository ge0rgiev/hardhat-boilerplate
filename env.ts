import { Record, String } from "runtypes";

export const EnvVarsRecord = Record({
  // Hardhat Configuration
  MAINNET_FORK_URL: String,
  REPORT_GAS: String,

  // ERC20
  WETH: String,
  USDC: String,
});

const env = () => EnvVarsRecord.check(process.env);

export { env };
