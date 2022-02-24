import { DevReadyConfig } from './config'
import { DevReadyResult } from './result'

export function devready(config: DevReadyConfig): DevReadyResult[] {
  return config.environmentVariables.map(envVar => {
    const ok = !!process.env[envVar]
    return {
      ok,
      message: ok ? null : `Missing environment variable: ${envVar}`,
    }
  })
}
