#!/usr/bin/env node
import { startSTDIO } from '../src/stdio.js'
import { Config, initConfig } from '../src/config.js'

async function main() {
  await initConfig()

  if (!Config.blAuthKey) {
    console.error('Error: BACKENDLESS_AUTH_KEY environment variable is required for STDIO mode')
    console.error('Usage: BACKENDLESS_AUTH_KEY=your_key npm run start:stdio')
    process.exit(1)
  }

  console.log('STDIO Authentication configured with environment variable')
  await startSTDIO()
}

main().catch(error => {
  console.error('Fatal error in main():', error)
  process.exit(1)
})
