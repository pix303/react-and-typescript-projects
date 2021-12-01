import { useEffect, useState } from 'react';
import { Character, fetchCharacter } from './CharacterModel';
import { CharacterCard } from './CharacterCard';

type CharactersBlock = {
  items: Character[];
};

const CharacterWrapper = ({ items }: CharactersBlock) => {
  return (
    <div className="columns">
      {items.map((item) => (
        <CharacterCard character={item} />
      ))}
    </div>
  );
};

export const CharacterList = () => {
  const [chars, setChars] = useState<Character[]>([]);
  const step = 4;

  useEffect(() => {
    async function fetchList() {
      const res = await fetchCharacter();
      setChars(res.data);
    }

    fetchList();
  }, []);

  return (
    <>
      <div>
        {chars.map((c, i) => {
          if (i % 4 === 0) {
            return (
              <CharacterWrapper
                key={'c' + i}
                items={chars.slice(i, i + step)}
              />
            );
          }
          return '';
        })}
      </div>
      <button onClick={() => setChars([])}>Reset chars</button>
    </>
  );
};
