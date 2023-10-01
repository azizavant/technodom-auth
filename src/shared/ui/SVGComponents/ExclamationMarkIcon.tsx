export const ExclamationMarkIcon = ({ className, color }: { className?: string | undefined, color?: string | undefined }) => {
  return (
    <svg className={ className } width="12" height="12" viewBox="0 0 12 12" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 4.2002V6.2002M6 8.2002H6.005M11 6.2002C11 8.96162 8.76142 11.2002 6 11.2002C3.23858 11.2002 1 8.96162 1 6.2002C1 3.43877 3.23858 1.2002 6 1.2002C8.76142 1.2002 11 3.43877 11 6.2002Z"
        stroke={ color ?? '#6172F3' } strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}