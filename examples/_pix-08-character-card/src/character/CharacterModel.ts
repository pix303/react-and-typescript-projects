import axios, { AxiosResponse } from 'axios';

export type Character = {
  name: string;
  alignment?: string;
  intelligence?: number;
  strength?: number;
  speed?: number;
  durability?: number;
  power?: number;
  combat?: number;
  total?: number;
};

export const fetchCharacter = async (): Promise<
  AxiosResponse<Character[], any>
> => {
  const result = await axios.get<Character[]>(
    'http://localhost:3004/characters'
  );
  return result;
};
