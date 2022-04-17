export interface IRate {
  code: string;
  value: number;
}

export type Rates = IRate[];

export interface ILatestResponse {
  base: string;
  date: string;
  motd: object;
  rates: {
    [key: string]: number;
  };
}

export interface IConvertResponse {
  date: string;
  historical: boolean;
  ino: object;
  motd: object;
  query: object;
  result: number;
  suces: boolean;
}
