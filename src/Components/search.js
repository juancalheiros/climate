import React,{useState,useEffect} from "react"
import { TextField } from '@material-ui/core';
import ResultClimate from "./resultClimate"
import { debounce } from "lodash";
const Search = () => {
    const [menssage, setMenssage] = useState({})
    const [searchCity, setSearchCity] = useState("")
    
    useEffect(() => {
        const handlerFetch = async () => {
            
            try {
            console.log("entrei")
            const resp = await fetch(`http://localhost:8080/search?city=${searchCity}`)  
            setMenssage(await resp.json())

            } catch (error) {
            console.log(error)
            }
            
        }

        if (searchCity.length !== 0){
            handlerFetch()
        }

    }, [searchCity])


    const handleChanger = (event) => {
        const {target:{value}} = event
        setSearchCity(value)
    }

    
    return (
        <div>
            <h3> Previsão do tempo </h3>
            <p> Busque sua cidade: </p>
            <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined" 
                onChange={debounce(handleChanger,2000)}
                placeholder="ex: Londres"
            />
            {searchCity.length !== 0 && <ResultClimate result={menssage}/>}
        </div>
    )
}


export default Search 