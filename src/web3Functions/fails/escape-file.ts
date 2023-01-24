import {
  Web3FunctionSdk,
  Web3FunctionContext,
} from "@gelatonetwork/js-resolver-sdk";

Web3FunctionSdk.onChecker(async (context: Web3FunctionContext) => {
  const conf = await Deno.readTextFile("./.env");
  console.log(conf);
  return { canExec: false, message: "Sandbox escaped file system" };
});
