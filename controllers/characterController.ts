const axios = require('axios')
import { Characters } from "../types"

//Get 
   const getAllCharactersAPI = async ():Promise<Characters[]> => {
        try {
            let characters:Characters[] = []
            const page:number = 42
            let pageNumber:number = 1

            for (let i = 1; i <= page; i++) { 
                const response = await axios(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`) 

                let object:Characters [] = response.data.results.map((pj:Characters) => {
                    return {
                        id:pj.id,
                        name:pj.name,
                        status:pj.status,
                        species:pj.species,
                        gender:pj.gender,
                        origin:pj.origin,
                        location:pj.location,
                        image:pj.image,
                        episodes:pj.episodes
                    }
                })

                characters = characters.concat(object)
                pageNumber++
            }

            return characters

        } catch (error) {
            throw new Error('Error al obtener los personajes')
        }        
   }

   const getCharacterByNameAPI = async (name:string):Promise<Characters[]> => {
    try {
        const response = await axios(`https://rickandmortyapi.com/api/character/?name=${name}`) 

        let searchResults:Characters[] = response.data.results.map((pj:Characters)=> {
            return {
                id:pj.id,
                name:pj.name,
                status:pj.status,
                species:pj.species,
                gender:pj.gender,
                origin:pj.origin,
                location:pj.location,
                image:pj.image,
                episodes:pj.episodes
            }
        })

        return searchResults

        } catch (error) {
            throw new Error('Busqueda erronea')
        }        
    }

    const getCharacterByIDAPI = async (id:number):Promise<Characters> => {
        try {
            const response = await axios(`https://rickandmortyapi.com/api/character/${id}`) 
    
            let searchResults:Characters = {
                id: response.data.results.id,
                name: response.data.results.name,
                status: response.data.results.status,
                species: response.data.results.species,
                gender: response.data.results.gender,
                origin: response.data.results.origin,
                location: response.data.results.location,
                image: response.data.results.image,
                episodes: response.data.results.episode
              };
    
            return searchResults
    
            } catch (error) {
                throw new Error('Busqueda erronea')
            }        
        }


module.exports = {
    getAllCharactersAPI,
    getCharacterByNameAPI,
    getCharacterByIDAPI,
    
}