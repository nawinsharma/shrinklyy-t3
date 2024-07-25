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
        className='invisible group-hover/card:visible'
      >
        <IconButton className='invisible absolute right-2 top-2 rounded-full border-2 border-transparent transition-colors duration-300 active:border-gray-400 group-hover/card:visible'>
          <IoEllipsisVerticalSharp />
        </IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
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
