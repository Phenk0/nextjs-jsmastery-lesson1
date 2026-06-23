export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-right text-3xl font-bold uppercase underline">
        Dashboard Layout
      </h1>
      {children}
    </div>
  );
}
