import "./Header.css"
import Image from "next/image"
import shop from "./shop.jpeg"

export default function Header(){

    return(

        <div id = "head">
            <div id = "name">
                RETAIL.COM
            </div>
            <Image src ={shop} alt = "" id = "shop-img"/>
        </div>
    )
}
