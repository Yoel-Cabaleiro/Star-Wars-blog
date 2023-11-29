const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			current: {},
			favourites: []
			
		},
		actions: {
			getCharacters: async() => {
				const url = "https://www.swapi.tech/api/people";
				const options = {
					method: "GET"
				}
				const store = getStore()

				const response = await fetch(url, options)
				if(response.ok){
					const data = await response.json();
					setStore({characters: data.results})

				}
			},
			getPlanets: async() => {
				const url = "https://www.swapi.tech/api/planets";
				const options = {
					method: "GET"
				}
				const store = getStore()

				const response = await fetch(url, options)
				if(response.ok){
					const data = await response.json();
					setStore({planets: data.results})
				}
			},
			getStarships: async() => {
				const url = "https://www.swapi.tech/api/starships";
				const options = {
					method: "GET"
				}
				const store = getStore()

				const response = await fetch(url, options)
				if(response.ok){
					const data = await response.json();
					setStore({starships: data.results})
				}
			},
			getCurrent: async(type, id) => {
				const url = `https://www.swapi.tech/api/${type}/${id}`
				const options = {
					method: "GET"
				}
				const response = await fetch(url, options)
				if(response.ok){
					const data = await response.json()
					const store = getStore()
					setStore({current: data.result.properties})
				}
				else{
					return "Error"
				}

		
			},
			getFavourites: () => {
				let currentFavourites = localStorage.getItem("Favourites")
				const store = getStore()
				if(!currentFavourites){
					currentFavourites = []
					localStorage.setItem("Favourites", JSON.stringify([]))
				}
				else{
					setStore({favourites: JSON.parse(currentFavourites)})
				}
			},
			updateFavourites: (item) => {
				const store = getStore()
				const updatedFavourites = [...store.favourites, item]
				setStore({favourites: updatedFavourites})
				localStorage.setItem("Favourites", JSON.stringify(updatedFavourites))

			},
			deleteFavourite: (object) => {
				const store = getStore()
				const filtered = store.favourites.filter((item) => item.name !== object.name)
				setStore({favourites: filtered})
				localStorage.setItem("Favourites", JSON.stringify(filtered))

			}
			
		}
	};
};

export default getState;
