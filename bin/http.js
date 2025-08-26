#!/usr/bin/env node
import { startHTTP } from '../src/http.js'
import { initConfig } from '../src/config.js'

async function main() {
  await initConfig()

  const port = process.env.PORT

  await startHTTP({ port })
}

main().catch(error => {
  console.error('Fatal error in main():', error)
  process.exit(1)
})