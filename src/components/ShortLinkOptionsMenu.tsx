import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import IconButton from '@/components/IconButton'
import CopyShortLinkUrlMenuItem from '@/components/CopyShortLinkUrlMenuItem'
import UpdateShortLinkMenuItem from '@/components/UpdateShortLinkMenuItem'
import DeleteShortLinkMenuItem from '@/components/DeleteShortLinkMenuItem'

import { IoEllipsisVerticalSharp } from 'react-icons/io5'

interface Props {
  shortLink: { id: bigint; alias: string | null; description: string | null }
  shortLinkUrl: string
}

const ShortLinkOptionsMenu = ({ shortLink, shortLinkUrl }: Props) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        asChild
        className='visible'
      >
        <IconButton className='visible rounded-full border border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-200 backdrop-blur-sm'>
          <IoEllipsisVerticalSharp className='text-white/60 hover:text-white' />
        </IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm'>
        <DropdownMenuGroup>
          <CopyShortLinkUrlMenuItem shortLinkUrl={shortLinkUrl} />
          <UpdateShortLinkMenuItem
            shortLinkId={shortLink.id}
            defaultData={{
              alias: shortLink.alias,
              description: shortLink.description,
            }}
          />
          <DeleteShortLinkMenuItem shortLinkId={shortLink.id} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ShortLinkOptionsMenu
