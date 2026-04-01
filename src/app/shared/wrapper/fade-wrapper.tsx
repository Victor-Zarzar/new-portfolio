export default function FadeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="animate-fade-up">{children}</div>;
}
