import { env as loadEnv } from "../env";

const env = loadEnv();

const ERC20 = {
  WETH: env.WETH,
  USDC: env.USDC,
};

export { ERC20 };
