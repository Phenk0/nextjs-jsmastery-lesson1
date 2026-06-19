export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-left">RootLayout</h1>
      {children}
    </div>
  );
}
