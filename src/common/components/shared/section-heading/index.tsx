type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mt-6 mb-12 text-center text-4xl font-semibold uppercase">
      {children}
    </h2>
  );
}
