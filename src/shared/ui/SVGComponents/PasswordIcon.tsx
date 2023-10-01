export const PasswordIcon = ({ className, color }: { className?: string | undefined, color?: string | undefined }) => {
  return (
    <svg className={ className } width="16" height="21" viewBox="0 0 16 21" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM5 5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5V5ZM14 19H2V9H14V19ZM8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16Z"
        fill={ color ?? '#FFBA1F' }/>
    </svg>
  )
}