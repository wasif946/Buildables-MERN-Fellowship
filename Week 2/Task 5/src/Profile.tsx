type ProfileProps = {
  name: string;
  age: number;
};

export function Profile({ name, age }: ProfileProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
