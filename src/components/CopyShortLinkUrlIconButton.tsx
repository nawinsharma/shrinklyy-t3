import { useToast } from '@/components/ui/use-toast'

import {
  TooltipContent,
  TooltipProvider,
  Tooltip as TooltipShad,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { IoCopyOutline } from 'react-icons/io5'

interface Props {
  shortLinkUrl: string
}

const CopyShortLinkUrlIconButton = ({ shortLinkUrl }: Props) => {
  const { toast } = useToast()

  const handleCopyShortLinkUrl = async () => {
    await navigator.clipboard.writeText(shortLinkUrl)
    toast({
      title: 'Copied link',
      variant: 'success'
    })
  }

  return (
    <TooltipProvider delayDuration={10}>
      <TooltipShad>
        <TooltipTrigger>
          <IoCopyOutline
            className='inline-block cursor-pointer align-middle text-lg leading-none text-white/60 hover:text-blue-400 transition-colors duration-200'
            onClick={handleCopyShortLinkUrl}
          />
        </TooltipTrigger>
        <TooltipContent side='bottom' className='px-2.5 py-2 bg-white/[0.1] border border-white/[0.1] backdrop-blur-sm'>
          <p className='p-0 text-xs text-white'>Copy</p>
        </TooltipContent>
      </TooltipShad>
    </TooltipProvider>
  )
}

export default CopyShortLinkUrlIconButton
