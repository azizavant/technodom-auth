export const EmailIcon = ({className, color}: {className?: string | undefined, color?: string | undefined}) => {
  return (
    <svg className={className} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3327 2.99999C18.3327 2.08333 17.5827 1.33333 16.666 1.33333H3.33268C2.41602 1.33333 1.66602 2.08333 1.66602 2.99999M18.3327 2.99999V13C18.3327 13.9167 17.5827 14.6667 16.666 14.6667H3.33268C2.41602 14.6667 1.66602 13.9167 1.66602 13V2.99999M18.3327 2.99999L9.99935 8.83333L1.66602 2.99999"
            stroke={ color ?? '#FFBA1F' }
            strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}