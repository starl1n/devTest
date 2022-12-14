import { FC } from 'react'
import { Table } from "flowbite-react"
import { Coins } from '../interfaces/coins'
import { BadgeComponent } from './Badge'
import { useParseData } from '../hooks/useDate'


export const TableData: FC<Coins> = (coin) => {
    return (
        <Table.Body className="divide-y">


            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 border hover:bg-gray-200 cursor-pointer">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {coin._id}
                </Table.Cell>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {coin.symbol}
                </Table.Cell>
                <Table.Cell className='text-center'>
                    { coin.side === 'Buy' 
                    ? <BadgeComponent color='success' data={coin.side.toUpperCase()}/>
                    : <BadgeComponent color='failure' data={ coin.side.toUpperCase() }/> }

                </Table.Cell>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {coin.price}
                </Table.Cell>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {
                    useParseData(coin.date)
                    }
                </Table.Cell>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {coin.transac_id}
                </Table.Cell>
            </Table.Row>

        </Table.Body>
    )
}
