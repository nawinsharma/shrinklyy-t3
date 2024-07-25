import {
  useId,
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    'id'
  > {
  startIcon?: ReactNode
  containerClasses?: string
  label?: string
  fullWidth?: boolean
  error?: boolean
  errorMessage?: string
  multiline?: boolean
}

const Input = forwardRef(function Component(
  {
    startIcon,
    label,
    containerClasses,
    fullWidth,
    error,
    errorMessage,
    multiline,
    className,
    defaultValue,
    ...props
  }: Props,
  ref: any,
) {
  const inputId = useId()

  const inputStyleClasses = `rounded border py-2 pr-4 text-gray-700 outline-none
  placeholder:text-gray-400 ${fullWidth && 'w-full'} ${Boolean(startIcon) ? 'pl-10' : 'pl-4'} ${error ? 'border-red-500' : 'border-gray-400'}`

  return (
    <div
      className={`relative ${fullWidth ? 'w-full' : 'w-fit'} ${containerClasses}`}
    >
      {startIcon && (
        <div
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${error ? 'text-red-500' : 'text-gray-400'}`}
        >
          {startIcon}
        </div>
      )}

      {label && (
        <label htmlFor={inputId} className='text-sm text-gray-700'>
          {label}
        </label>
      )}

      {multiline ? (
        <textarea
          rows={4}
          ref={ref}
          id={inputId}
          className={inputStyleClasses + ' resize-none ' + className}
          {...props}
        >
          {defaultValue}
        </textarea>
      ) : (
        <input
          ref={ref}
          id={inputId}
          defaultValue={defaultValue}
          className={inputStyleClasses + ' ' + className}
          {...props}
        />
      )}

      {error && errorMessage && (
        <p className='text-sm text-red-500'>{errorMessage}</p>
      )}
    </div>
  )
})

export default Input
