export const BASE_URL = "https://swapi.co/api/";

export const FILMS = "https://swapi.co/api/films";

/*
                const filmURL = `${BASE_URL}films/${index}`
                fetch(filmURL)
                .then(results => {return results.json()} )
                .then(data =>{
                        const {starships} = data
                        starships.forEach(element => {
                                fetch(element)
                                .then(response => {return response.json()})
                                .then(data => {
                                        console.log(`datos para starship ${element}` );
                                        console.log(data);                                        
                                })
                                .catch(error => {console.log(`ocurrio un error al obtener el starships solicitado: ${error}`);
                                })

                        });
                })
                .catch(error => {
                        console.log("ocurrio un error al obtener el detalle del film")
                        console.log(error);
                        
                })


}*/