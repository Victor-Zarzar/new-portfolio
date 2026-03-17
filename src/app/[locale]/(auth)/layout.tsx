export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mx-auto max-w-4xl px-6 py-8">{children}</section>;
}
