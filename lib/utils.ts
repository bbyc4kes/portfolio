export const smoothScrollTo = ({
  e,
  id,
}: {
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  id: string
}) => {
  e.preventDefault()
  const element = document.getElementById(id) as HTMLElement
  element?.scrollIntoView({
    block: 'start',
  })
}
