import { resolve } from 'path'
import { devready } from '..'

main()

async function main() {
  const configPath = resolve(process.cwd(), '.devready')
  const config = await import(configPath)

  const results = devready(config)

  const badResults = results.filter(r => !r.ok)
  if (badResults.length == 0) {
    process.exit(0)
  } else {
    badResults.forEach(r => console.error(r.message))
    process.exit(1)
  }
}
