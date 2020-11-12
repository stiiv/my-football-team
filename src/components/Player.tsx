import React from 'react';
import { PlayerProps } from 'types';

function Player({
  id,
  editMode = false,
  onEdit = null,
  onSave = null,
  onDelete = null,
}: PlayerProps): JSX.Element {
  const [name, setName] = React.useState<string>('');
  const [editable, setEditable] = React.useState<boolean>(editMode);
  const inputEl = React.useRef(null);

  React.useEffect(() => {
    if (editable && inputEl.current) {
      inputEl.current.focus();
    }
  }, [editable]);

  if (editable) {
    return (
      <form>
        <input
          ref={inputEl}
          value={name}
          placeholder="Upišite svoje ime"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{' '}
        <button
          type="submit"
          disabled={name.trim() === ''}
          onClick={() => {
            setEditable(false);
            if (typeof onSave === 'function') {
              onSave(id, name);
            }
          }}
        >
          Spremi
        </button>
      </form>
    );
  }
  return (
    <div>
      {name}{' '}
      <button
        onClick={() => {
          setEditable(true);
          if (typeof onEdit === 'function') onEdit(id, name);
        }}
      >
        Uredi
      </button>{' '}
      <button
        onClick={() => {
          if (!confirm(`Izbrisati ${name}?`)) return;
          if (typeof onDelete === 'function') onDelete(id, name);
        }}
      >
        Briši
      </button>
    </div>
  );
}

export default React.memo(Player);
