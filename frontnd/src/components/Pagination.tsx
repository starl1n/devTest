import { Button, Pagination } from "flowbite-react"
import { useState } from "react"

import { use_all_cons } from "../hooks/useCoins"

export const PaginationComponent = () => {

    const [init, setInit] = useState(0)

    const onNextPage = () => {
        // setInit(init + 100)
        // nextPage()
    }

    const onBackPage = () => {
        if (init <= 100) return;
        setInit(init - 100)
    }

    const { from, coins } = use_all_cons(init)

    return (
        <div className="w-full flex justify-between">
            <Button
                color={'failure'}
                onClick={onBackPage}>
                Back
            </Button>
            {from}
            <Button
                onClick={onNextPage}>
                Next
            </Button>
        </div>
    )
}
