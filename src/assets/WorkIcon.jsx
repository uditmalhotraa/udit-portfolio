const WorkIcon = (props) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 21v-4"
      stroke="fill-current"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={3}
      y={4}
      width={18}
      height={13}
      rx={1}
      stroke="fill-current"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M9 21h6"
      stroke="fill-current"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default WorkIcon
