import { useState } from 'react'
import { motion } from 'framer-motion'

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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Button
            className='group relative overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 p-3 text-white backdrop-blur-sm hover:from-emerald-500/30 hover:to-blue-500/30 transition-all duration-300 shadow-[0_8px_32px_0_rgba(34,197,94,0.3)]'
          >
            <Plus className='mr-2 h-5 w-5' />
            <span className='font-medium'>New short link</span>
            <div className='absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-emerald-400 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-emerald-400/20'></div>
          </Button>
        </motion.div>
      </DialogTrigger>

      <CreateShortLinkFormModal onClose={handleCloseModal} />
    </Dialog>
  )
}

export default CreateShortLinkModalButton
