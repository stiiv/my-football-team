import React from 'react';
import { PlayerProps } from 'types';
import { Input, Button, Typography, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
        <Input
          inputRef={inputEl}
          value={name}
          placeholder="Upišite svoje ime"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{' '}
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
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
        </Button>{' '}
      </form>
    );
  }
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography gutterBottom variant="h6" component="h6">
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Grid item>
          <Button
            startIcon={<EditIcon />}
            size="small"
            color="primary"
            onClick={() => {
              setEditable(true);
              if (typeof onEdit === 'function') onEdit(id, name);
            }}
          >
            Uredi
          </Button>{' '}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            size="small"
            onClick={() => {
              if (!confirm(`Izbrisati ${name}?`)) return;
              if (typeof onDelete === 'function') onDelete(id, name);
            }}
          >
            Briši
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.memo(Player);
