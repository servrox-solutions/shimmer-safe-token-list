export interface Token {
  address: string
  name: string
  symbol: string
  decimals: number
  icon: string
  explorerLink: string
}

export type Tokenlist = Token[];
