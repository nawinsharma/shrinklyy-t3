import { useState } from 'react'

import { Trash } from 'lucide-react'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import DeleteShortLinkConfirmationModal from '@/components/DeleteShortLinkConfirmationModal'

interface Props {
  shortLinkId: bigint
}

const DeleteShortLinkMenuItem = ({ shortLinkId }: Props) => {
  const [open, setOpen] = useState(false)

  const handleCloseDeleteConfirmationModal = () => setOpen(false)

  const handleOpenDeleteConfirmationModal = (event: Event) => {
    event.preventDefault()
    setOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={handleOpenDeleteConfirmationModal}>
          <Trash className='mr-2 h-4 w-4' />
          <span>Delete</span>
        </DropdownMenuItem>
      </DialogTrigger>

      <DeleteShortLinkConfirmationModal
        onClose={handleCloseDeleteConfirmationModal}
        shortLinkId={shortLinkId}
      />
    </Dialog>
  )
}

export default DeleteShortLinkMenuItem
