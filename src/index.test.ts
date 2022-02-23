import { Chance } from 'chance'
import { devready } from '.'
import { DevReadyConfig } from './config'

it('should pass if environment variable is present', () => {
  const envVarName = Chance().word()
  try {
    const config: DevReadyConfig = {
      environmentVariables: [envVarName],
    }
    process.env[envVarName] = 'doesNotMatter'

    const result = devready(config)

    expect(result).toEqual([{ ok: true }])
  } finally {
    delete process.env[envVarName]
  }
})

it('should fail if environment variable is missing', () => {
  const config: DevReadyConfig = {
    environmentVariables: [Chance().word()],
  }

  const result = devready(config)

  expect(result).toEqual([{ ok: false }])
})
