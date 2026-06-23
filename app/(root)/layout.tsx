export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-left text-3xl font-bold underline">RootLayout</h1>
      {children}
    </div>
  );
}
