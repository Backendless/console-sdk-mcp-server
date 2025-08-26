import { createClient } from 'backendless-console-sdk'
import { Config } from '../config.js'

const sessions = {}

export function provideSDKClientSession(sessionId) {
  if (!sessions[sessionId]) {
    sessions[sessionId] = createClient(Config.blConsoleURL)
  }

  return sessions[sessionId]
}