interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  onClick: () => void
}

export function Button({ children, className, onClick }: IButtonProps) {
  return (
    <button
      className={`border border-main-border-color rounded-sm text-sm dark:text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
