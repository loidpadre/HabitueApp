
import { Title } from "../components/title"
import { Filter } from "../components/filter"
import { Homes } from "../homes"
import { useEffect, useState } from "react"
    
export const Home = () =>{
    return(
        <>
            <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 lg:mx-60 mt-28 mb-14 gap-4 md:gap-10 lg:gap-60 items-center">
        <Title/>
        <Filter/>
    </div>
    <Homes/>

      </>
    )
} 