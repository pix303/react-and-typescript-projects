import { Character } from './CharacterModel';

export const CharacterCard = (props: { character: Character }) => {
  return <div className="column is-quarter card">{props.character.name}</div>;
};
