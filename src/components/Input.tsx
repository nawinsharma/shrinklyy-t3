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

  const inputStyleClasses = `rounded-xl border border-white/[0.1] py-3 pr-4 text-white outline-none bg-white/[0.05] backdrop-blur-sm
  placeholder:text-white/40 ${fullWidth && 'w-full'} ${Boolean(startIcon) ? 'pl-12' : 'pl-4'} ${error ? 'border-red-400/50' : 'border-white/[0.1]'} 
  focus:border-white/[0.2] focus:ring-2 focus:ring-blue-500/50 focus:bg-white/[0.08] transition-all duration-300`

  return (
    <div
      className={`relative ${fullWidth ? 'w-full' : 'w-fit'} ${containerClasses}`}
    >
      {startIcon && (
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${error ? 'text-red-400' : 'text-white/60'}`}
        >
          {startIcon}
        </div>
      )}

      {label && (
        <label htmlFor={inputId} className='text-sm text-white/80 mb-2 block'>
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
        <p className='text-sm text-red-400 mt-2'>{errorMessage}</p>
      )}
    </div>
  )
})

export default Input
