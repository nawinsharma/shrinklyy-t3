import { useState } from 'react'

import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import CreateShortLinkFormModal from '@/components/CreateShortLinkFormModal'

const CreateShortLinkModalButton = () => {
  const [open, setOpen] = useState(false)

  const handleCloseModal = () => setOpen(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='secondary'
          className='bg-emerald-500 text-white hover:bg-emerald-600'
        >
          <Plus className='mr-1 h-5 w-5' /> New short link
        </Button>
      </DialogTrigger>

      <CreateShortLinkFormModal onClose={handleCloseModal} />
    </Dialog>
  )
}

export default CreateShortLinkModalButton
