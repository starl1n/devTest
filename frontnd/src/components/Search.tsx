
import React from "react"
import { Button, TextInput } from "flowbite-react"

export const Search = () => {

    const onDateChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        const { target } = event
        console.log(target.value);
    }
    return (
        <>
            <div className="flex flex-row">
                <TextInput
                    type='date'
                    sizing={'md'}
                    color='green'
                    width={10} 
                    onChange={onDateChange}/>
                <Button>
                    Find
                </Button>
            </div>

        </>
    )
}
