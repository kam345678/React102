
interface DropButtonProps {
  index: number;
  onDrop: (index: number) => void;
}

export default function DropButton({ index, onDrop }: DropButtonProps) {
  return <button onClick={() => onDrop(index)}>ถอน</button>;
}

