export default async function About() {
  const response = await fetch('http://jsonplaceholder.typicode.com/albums');
  if (!response.ok) throw new Error('Failed to fetch response');
  const list = await response.json();
  const tenItems = list.slice(0, 10);
  return (
    <>
      <h1>About</h1>
      {tenItems.map(({ id, title }: { id: number; title: string }) => (
        <p key={id}>
          {id}: <span>{title}</span>
        </p>
      ))}
    </>
  );
}
