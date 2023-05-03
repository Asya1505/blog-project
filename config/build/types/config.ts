export type BuidMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    html: string
}

export interface BuildOptions {
    mode: BuidMode
    paths: BuildPaths
    isDev: boolean
    port: number
}

export interface BuildEnv {
    mode: BuidMode
    port: number
}