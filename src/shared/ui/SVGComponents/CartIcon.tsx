export const CartIcon = ({ className, color }: { className?: string | undefined, color?: string | undefined }) => {
  return (
    <svg className={ className } width="12" height="12" viewBox="0 0 12 12" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.5 0.5H2.5L3.84 7.195C3.88572 7.4252 4.01095 7.63198 4.19377 7.77915C4.37659 7.92632 4.60535 8.0045 4.84 8H9.7C9.93465 8.0045 10.1634 7.92632 10.3462 7.77915C10.529 7.63198 10.6543 7.4252 10.7 7.195L11.5 3H3M5 10.5C5 10.7761 4.77614 11 4.5 11C4.22386 11 4 10.7761 4 10.5C4 10.2239 4.22386 10 4.5 10C4.77614 10 5 10.2239 5 10.5ZM10.5 10.5C10.5 10.7761 10.2761 11 10 11C9.72386 11 9.5 10.7761 9.5 10.5C9.5 10.2239 9.72386 10 10 10C10.2761 10 10.5 10.2239 10.5 10.5Z"
        stroke={color ?? '#12B76A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}