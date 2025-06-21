import { api } from '@/trpc/react'

import { Loader2, AlertTriangle } from 'lucide-react'

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
    <DialogContent className='max-w-lg rounded-2xl border border-white/[0.08] bg-black/[0.5] p-8 backdrop-blur-md'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <AlertTriangle className='h-16 w-16 text-red-400' />
        <h2 className='text-2xl font-bold text-white'>
          Delete Short Link
        </h2>
        <p className='text-white/70'>Are you sure you want to delete this short link? This action cannot be undone.</p>
        <div className='mt-4 flex w-full items-center gap-4'>
          <Button 
            onClick={onClose} 
            variant='secondary'
            className='w-full rounded-xl border border-white/[0.1] bg-white/[0.05] py-3 font-semibold text-white/80 transition-colors hover:bg-white/[0.1]'
          >
            Cancel
          </Button>
          <Button
            variant='destructive'
            onClick={handleDeleteShortLink}
            disabled={isLoading}
            className='w-full rounded-xl py-3 font-semibold'
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
