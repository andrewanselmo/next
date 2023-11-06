import {useState, useEffect} from "react"
import "./SearchBar.css"

export default function SearchBar(){

const [searchValue, setSearchValue] = useState("")
const [filteredProducts, setFilteredProducts] = useState([])
const handleInputChange = (event) => {
    setSearchValue(event.target.value)  
}
useEffect(fetchAPIData, [searchValue])
    
    function fetchAPIData(){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(products => {
                const filtered = products.filter((el) => {return el.title.toLowerCase().includes(searchValue)})
                const currentFilter = filtered.map((product, index) => {
                    return(
                        <div className="prodStyle">
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <img style = {{width:"100px"}} src ={product.image} />
                            
                        </div>
                    )
                })

               
                
                setFilteredProducts(currentFilter)
            })
        
    }

    const searchStyle = {
        height: "40px",
        width: "300px",
        fontSize: "16pt"
    }

    
    // useEffect(fetchAPIData, [])
    return <div>

        <input style = {searchStyle} type ="text" value = {searchValue} onChange = {handleInputChange}/>
     
        <div style = {{display:"flex", flexFlow:"row wrap"}}>{filteredProducts}</div>
    </div>
}