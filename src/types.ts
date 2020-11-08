export type PlayerProps = {
  name: string;
  onNameChange: (name: string) => void;
  editable?: boolean;
};
