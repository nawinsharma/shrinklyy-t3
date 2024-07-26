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
            className='inline-block cursor-pointer align-middle text-xl leading-none'
            onClick={handleCopyShortLinkUrl}
          />
        </TooltipTrigger>
        <TooltipContent side='bottom' className='px-2.5 py-2'>
          <p className='p-0 text-xs'>Copy</p>
        </TooltipContent>
      </TooltipShad>
    </TooltipProvider>
  )
}

export default CopyShortLinkUrlIconButton
