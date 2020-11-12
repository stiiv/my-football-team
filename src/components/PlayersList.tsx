import React from 'react';
import { PlayersListProps } from 'types';
import Player from 'components/Player';
import { v4 as uuidv4 } from 'uuid';

type PlayerItem = {
  id: string;
  name: string;
};

type Players = Record<string, PlayerItem>;

function PlayersList({}: PlayersListProps): JSX.Element {
  const [list, addToList] = React.useState<Players>({});
  const listOFKeys = Object.keys(list);
  return (
    <>
      <button
        onClick={() => {
          const item: PlayerItem = {
            id: uuidv4(),
            name: '',
          };
          addToList((state) => ({ ...state, [item.id]: item }));
        }}
      >
        Dodaj
      </button>
      {listOFKeys.length > 0 ? (
        <ol>
          {listOFKeys.map((id: string) => (
            <li key={id}>
              <Player
                id={id}
                editMode={true}
                onSave={(id, name) => {
                  const stringId = id as string;
                  addToList((state) => {
                    return { ...state, [id]: { id: stringId, name } };
                  });
                }}
                onDelete={(id) => {
                  addToList((state) => {
                    const newState = { ...state };
                    delete newState[id];
                    return newState;
                  });
                }}
              />
            </li>
          ))}
        </ol>
      ) : null}
    </>
  );
}

export default React.memo(PlayersList);
