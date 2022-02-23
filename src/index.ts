import { DevReadyConfig } from './config'
import { DevReadyResult } from './result'

export function devready(config: DevReadyConfig): DevReadyResult[] {
  return config.environmentVariables.map(envVar => ({
    ok: !!process.env[envVar],
  }))
}
