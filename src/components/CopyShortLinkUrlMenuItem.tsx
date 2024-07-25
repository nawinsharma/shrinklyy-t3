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
    })
  }

  return (
    <DropdownMenuItem onClick={handleCopyShortLinkUrl}>
      <Copy className='mr-2 h-4 w-4' />
      <span>Copy</span>
    </DropdownMenuItem>
  )
}

export default CopyShortLinkUrlMenuItem
