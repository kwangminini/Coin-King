interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  onClick: () => void
}

export function DefaultButton({ children, className, onClick }: IButtonProps) {
  return (
    <button
      className={`border border-main-border-color px-20 rounded-sm text-sm dark:text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
