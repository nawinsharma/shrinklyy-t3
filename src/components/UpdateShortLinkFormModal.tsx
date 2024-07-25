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
    <DialogContent>
      <form
        className='flex flex-col gap-2'
        onSubmit={handleUpdateShortLinkSubmit}
      >
        <h5 className='text-center text-2xl font-semibold'>
          Update short link
        </h5>

        <Input
          fullWidth
          {...register('alias')}
          defaultValue={defaultValues?.alias ?? ''}
          placeholder='Alias'
          error={!!errors.alias}
          errorMessage={errors.alias?.message}
        />

        <Input
          multiline
          fullWidth
          {...register('description')}
          placeholder='Description'
          error={!!errors.description}
          errorMessage={errors.description?.message}
        />

        <Button className='w-full' disabled={isLoading}>
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          Save
        </Button>
      </form>
    </DialogContent>
  )
}

export default UpdateShortLinkFormModal
