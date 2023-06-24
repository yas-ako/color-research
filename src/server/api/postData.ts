import { defineEventHandler } from "h3";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const prompt = (await readBody(event)) || {};
  console.log(prompt);
  const response = await fetch(process.env.GAS_URL, {
    method: "POST",
    body: JSON.stringify(prompt),
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  });
  // console.log(response.status);
  return {
    status: response.status,
    // text: response.body,
  };
});
