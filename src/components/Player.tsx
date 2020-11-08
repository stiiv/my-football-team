import React from 'react';
import { PlayerProps } from 'types';

export default function Player({
  name,
  onNameChange,
  editable = false,
}: PlayerProps) {
  if (editable) {
    return (
      <input
        value={name}
        onChange={(e) => {
          onNameChange(e.target.value);
        }}
      />
    );
  }
  return <div>{name}</div>;
}
