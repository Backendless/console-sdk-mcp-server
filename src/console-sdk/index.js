import { createClient } from 'backendless-console-sdk'
import { Config } from '../config.js'

const sessions = {}

export function provideSDKClientSession(sessionId = 'default-stdio', meta) {
  const authKey = getRequestAuthorization(meta)

  if (!sessions[sessionId]) {
    sessions[sessionId] = createClient(Config.blConsoleURL, authKey)
  }

  return sessions[sessionId]
}

function getRequestAuthorization(meta) {
  const headers = meta?.requestInfo?.headers

  if (headers) {
    return headers['authkey'] || headers['authorization']?.replace(/^Bearer\s+/, '')
  }

  // change it to API KEY or long term token for STDIO and allow to use in console-sdk
  return Config.blAuthKey
}
