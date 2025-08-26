#!/usr/bin/env node
import { startHTTP } from '../src/http.js'

async function main() {
  const port = process.env.PORT

  await startHTTP({ port })
}

main().catch(error => {
  console.error('Fatal error in main():', error)
  process.exit(1)
})