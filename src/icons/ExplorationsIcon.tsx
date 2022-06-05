import clsx from '~utils/clsx'

export default function ExplorationsIcon({
  className
}: {
  className?: string
}) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      className={clsx(className || 'mr-2 text-md')}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Explorations Rocket</title>
      <path d="M11 1l-5 5h-3l-3 4c0 0 3.178-0.885 5.032-0.47l-5.032 6.47 6.592-5.127c0.919 2.104-0.592 5.127-0.592 5.127l4-3v-3l5-5 1-5-5 1z" />
    </svg>
  )
}
