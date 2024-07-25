import { api } from '@/trpc/react'

import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DialogContent } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'

interface Props {
  onClose: () => void
  shortLinkId: bigint
}

const DeleteShortLinkConfirmationModal = ({ shortLinkId, onClose }: Props) => {
  const { toast } = useToast()

  const { mutate: mutateDeleteShortLink, isLoading } =
    api.shortLink.delete.useMutation()
  const apiUtils = api.useUtils()

  const handleDeleteShortLink = () => {
    mutateDeleteShortLink(shortLinkId, {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSuccess: async () => {
        await apiUtils.shortLink.searchShortLinks.invalidate()
        toast({
          variant: 'destructive',
          title: 'Short link deleted',
        })
        onClose()
      },
    })
  }

  return (
    <DialogContent>
      <div className='flex flex-col gap-2'>
        <h5 className='text-xl font-semibold'>Delete short link</h5>
        <p>Do you want to remove this short link?</p>
        <div className='flex items-center gap-2'>
          <Button onClick={onClose} variant='secondary'>
            Cancel
          </Button>
          <Button
            variant='destructive'
            onClick={handleDeleteShortLink}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Delete
          </Button>
        </div>
      </div>
    </DialogContent>
  )
}

export default DeleteShortLinkConfirmationModal
