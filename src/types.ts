export type PlayerProps = {
  id: number | string;
  editMode?: boolean;
  onEdit?: (id: number | string, name: string) => void;
  onSave?: (id: number | string, name: string) => void;
  onDelete?: (id: number | string, name: string) => void;
};

export type PlayersListProps = {};
