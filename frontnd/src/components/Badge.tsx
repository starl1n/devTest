import { Badge } from 'flowbite-react'
import { FC } from 'react'

interface Props {
    color: string,
    data: string
}
export const BadgeComponent: FC<Props> = ({ color, data }) => {
    return (
        <Badge color={color} className='text-center'>
            <h2 className='text-lg'>{data}</h2>
        </Badge>
    )
}
