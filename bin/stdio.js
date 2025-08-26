#!/usr/bin/env node
import { startSTDIO } from '../src/stdio.js'
import { initConfig } from '../src/config.js'

async function main() {
  await initConfig()

  await startSTDIO()
}

main().catch(error => {
  console.error('Fatal error in main():', error)
  process.exit(1)
})