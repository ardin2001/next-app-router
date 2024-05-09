export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h4 className="font-semibold text-green-600">Layout Setting</h4>
      {children}
    </div>
  );
}
