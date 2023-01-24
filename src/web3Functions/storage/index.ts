import {
  Web3FunctionSdk,
  Web3FunctionContext,
} from "@gelatonetwork/js-resolver-sdk";

Web3FunctionSdk.onChecker(async (context: Web3FunctionContext) => {
  const { storage, provider } = context;

  // Use storage to manage your execution state
  const lastBlockStr = (await storage.get("lastBlockNumber")) ?? "0";

  // Stored values are always in string
  const lastBlock = parseInt(lastBlockStr);
  console.log(`Last block: ${lastBlock}`);

  const newBlock = await provider.getBlockNumber();
  console.log(`New block: ${newBlock}`);
  if (newBlock > lastBlock) {
    // Cast value to string before storing it
    await storage.set("lastBlockNumber", newBlock.toString());
  }

  return {
    canExec: false,
    message: `Updated block number: ${newBlock.toString()}`,
  };
});
