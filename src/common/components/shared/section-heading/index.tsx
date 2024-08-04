type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl uppercase mb-6 text-center font-semibold">
      {children}
    </h2>
  )
}
