import { Button, Table } from 'flowbite-react/lib/esm/components'
import { useState } from 'react'
import { Header } from './components/Header'
import { Loading } from './components/Loading'
import { Search } from './components/Search'
import { TableData } from './components/TableData'
import { use_all_cons } from './hooks/useCoins'

function App() {
  const [init, setInit] = useState(0)

  const { coins, from } = use_all_cons(init)
  const onNextPage = () => {
    setInit(init + 100)
  }

  const onBackPage = () => {
    if (init <= 0) return;
    setInit(init - 100)
  }


  coins.data?.map(coin => {
    const date = Date.parse(coin.date)
    const newdate = new Date(date)
    // console.log(newdate.getMinutes())


  })

  const ws = new WebSocket( "wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD")

  coins.isFetching && <Loading />

  return (
    <div className="">
      <Header />
      <div className='px-10 my-3 w-3/5'>
        <Search />

      </div>
      <div className='px-10 py-15 h-100 overflow-auto scroll-mx-0'>
        <Table>
          <Table.Head>
            <Table.HeadCell>
              id
            </Table.HeadCell>
            <Table.HeadCell>
              Symbol
            </Table.HeadCell>
            <Table.HeadCell>
              Side
            </Table.HeadCell>
            <Table.HeadCell>
              Price
            </Table.HeadCell>
            <Table.HeadCell>
              Date
            </Table.HeadCell>
            <Table.HeadCell>
              Transaction id
            </Table.HeadCell>
          </Table.Head>
          {
            coins.data?.map((coin) => (
              <TableData key={coin._id} {...coin} />
            ))
          }
        </Table>
      </div>
      <div className='w-full px-15 flex justify-center content-end justify-items-end'>

        <div className="w-full mt-3 flex justify-between px-16 ">
          <Button
            color={'failure'}
            onClick={onBackPage}>
            Back
          </Button>
          <h1 className='text-md font-semibold'>{from}</h1>
          <Button
            onClick={onNextPage}>
            Next
          </Button>
        </div>
      </div>

    </div>
  )
}

export default App
