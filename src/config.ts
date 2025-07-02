export interface DevReadyConfig {
  checks: DevReadyCheck[]
  environmentVariables?: string[]
}

export interface DevReadyCheck {
  type: string
}

export interface EnvironmentVariableDevReadyCheck {
  type: 'environment-variable'
  variableName: string
}
