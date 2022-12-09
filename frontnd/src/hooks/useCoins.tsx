import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ApiBase } from "../api/api";
import { Coins } from "../interfaces/coins";



export const get_coins = async(from: number):Promise<Coins[]> => {

    const { data } = await ApiBase.get<Coins[]>(`/coins?from=${from}`)
    return data.reverse();
}

interface Props{
    from?: number
}

export const use_all_cons = (from: number) => {


    const coins = useQuery(
        ['all_queries', from],
        () => get_coins(from),
        {
            refetchInterval: 5000
        }
    )



    return { 
        coins,
        from,
    }

}