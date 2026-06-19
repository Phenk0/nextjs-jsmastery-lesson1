export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-right uppercase">
        Dashboard Layout
      </h1>
      {children}
    </div>
  );
}
