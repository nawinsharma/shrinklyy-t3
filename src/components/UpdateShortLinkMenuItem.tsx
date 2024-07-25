import { useState } from 'react'

import { Edit } from 'lucide-react'

import type { UpdateShortLink } from '@/types/updateShortLink'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import UpdateShortLinkFormModal from '@/components/UpdateShortLinkFormModal'

interface Props {
  shortLinkId: bigint
  defaultData: UpdateShortLink
}

const UpdateShortLinkMenuItem = ({ shortLinkId, defaultData }: Props) => {
  const [open, setOpen] = useState(false)

  const handleCloseModal = () => setOpen(false)

  const handleOpenFormUpdate = (event: Event) => {
    event.preventDefault()
    setOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={handleOpenFormUpdate}>
          <Edit className='mr-2 h-4 w-4' />
          <span>Edit</span>
        </DropdownMenuItem>
      </DialogTrigger>

      <UpdateShortLinkFormModal
        defaultData={defaultData}
        onClose={handleCloseModal}
        shortLinkId={shortLinkId}
      />
    </Dialog>
  )
}

export default UpdateShortLinkMenuItem
