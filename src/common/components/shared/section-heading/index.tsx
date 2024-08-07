type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="my-6 text-center text-4xl font-semibold uppercase">
      {children}
    </h2>
  );
}
