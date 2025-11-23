#!/usr/bin/env node
import { spawn } from "child_process";
import * as readline from "readline";

const realCommand = process.argv[2];
const realArgs = process.argv.slice(3);

if (!realCommand) {
  console.error("Usage: node mcp-proxy.js <real-command> <real-args...>");
  process.exit(1);
}

const child = spawn(realCommand, realArgs, {
  stdio: ["pipe", "pipe", "inherit"],
  env: process.env,
});

// Wrap stdin/stdout
const clientIn = readline.createInterface({ input: process.stdin });
const serverIn = readline.createInterface({ input: child.stdout });

function safeParse(json: string) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

clientIn.on("line", (line) => {
  child.stdin.write(line + "\n");
});

serverIn.on("line", (line) => {
  const msg = safeParse(line);
  if (!msg) return process.stdout.write(line + "\n");

  process.stdout.write(line + "\n");
});
