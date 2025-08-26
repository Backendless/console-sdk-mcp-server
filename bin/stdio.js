#!/usr/bin/env node
import { startSTDIO } from '../src/stdio.js'

async function main() {
  await startSTDIO()
}

main().catch(error => {
  console.error('Fatal error in main():', error)
  process.exit(1)
})