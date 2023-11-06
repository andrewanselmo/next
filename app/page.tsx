"use client"
import CountButton from "./CountButton"
import SearchBar from "./SearchBar/SearchBar"
export default function Page(){
    return <div>
     <CountButton name = {"+1"} mult ={1}/>
     <CountButton name = {"+2"} mult = {2}/>
     <a className = "tag" href ="https://github.com/andrewanselmo/next" > my github repo </a> 
     
     <SearchBar/>
    </div>
}