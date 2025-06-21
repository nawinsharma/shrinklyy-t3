import { api } from '@/trpc/react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import type { UpdateShortLink } from '@/types/updateShortLink'
import { updateShortLinkValidation } from '@/validations/updateShortLink.validation'

import { DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

import Input from '@/components/Input'

import { Loader2 } from 'lucide-react'

interface Props {
  onClose: () => void
  shortLinkId: bigint
  defaultData: UpdateShortLink
}

const UpdateShortLinkFormModal = ({
  onClose,
  shortLinkId,
  defaultData,
}: Props) => {
  const { toast } = useToast()

  const { mutate: mutateUpdateShortLink, isLoading } =
    api.shortLink.update.useMutation()
  const apiUtils = api.useUtils()

  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
  } = useForm<UpdateShortLink>({
    resolver: zodResolver(updateShortLinkValidation),
    defaultValues: defaultData,
  })

  const handleUpdateShortLinkSubmit = handleSubmit(data => {
    mutateUpdateShortLink(
      { id: shortLinkId, data },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async () => {
          await apiUtils.shortLink.searchShortLinks.invalidate()
          onClose()
          toast({
            variant: 'success',
            title: 'Short link updated successfully',
          })
        },
      },
    )
  })

  return (
    <DialogContent className='max-w-2xl rounded-2xl border border-white/[0.08] bg-black/[0.5] p-8 backdrop-blur-md'>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleUpdateShortLinkSubmit}
      >
        <h2 className='text-center text-3xl font-bold'>
          <span className='bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
            Update Short Link
          </span>
        </h2>
        
        <Input
          fullWidth
          label="Alias"
          {...register('alias')}
          defaultValue={defaultValues?.alias ?? ''}
          placeholder='my-short-link'
          error={!!errors.alias}
          errorMessage={errors.alias?.message}
        />

        <Input
          multiline
          fullWidth
          label="Description"
          {...register('description')}
          placeholder='A short description for your link.'
          error={!!errors.description}
          errorMessage={errors.description?.message}
        />

        <Button 
          className='group relative mt-4 w-full overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:from-blue-500/30 hover:to-purple-500/30 disabled:opacity-50'
          disabled={isLoading}
        >
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          Update Link
          <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-blue-400 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-blue-400/20"></div>
        </Button>
      </form>
    </DialogContent>
  )
}

export default UpdateShortLinkFormModal
