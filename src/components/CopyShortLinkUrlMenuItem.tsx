import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useToast } from '@/components/ui/use-toast'

import { Copy } from 'lucide-react'

interface Props {
  shortLinkUrl: string
}

const CopyShortLinkUrlMenuItem = ({ shortLinkUrl }: Props) => {
  const { toast } = useToast()

  const handleCopyShortLinkUrl = async () => {
    await navigator.clipboard.writeText(shortLinkUrl)
    toast({
      title: 'Copied link',
      variant: 'success'
    })
  }

  return (
    <DropdownMenuItem 
      onClick={handleCopyShortLinkUrl}
      className='text-white hover:text-white hover:bg-white/[0.1] focus:bg-white/[0.1] focus:text-white'
    >
      <Copy className='mr-2 h-4 w-4' />
      <span>Copy</span>
    </DropdownMenuItem>
  )
}

export default CopyShortLinkUrlMenuItem
