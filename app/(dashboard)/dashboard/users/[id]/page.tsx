export default async function User({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <h1 className="text-center text-3xl font-bold underline">
      User {id} details
    </h1>
  );
}
