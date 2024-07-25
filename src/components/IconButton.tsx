import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type ForwardedRef,
} from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const IconButton = forwardRef(function iconButton(
  { children, className: extraClasses, ...btnProps }: Props,
  ref: ForwardedRef<any>,
) {
  return (
    <button
      ref={ref}
      className={`grid place-content-center rounded p-2 ${extraClasses}`}
      {...btnProps}
    >
      {children}
    </button>
  )
})

export default IconButton
