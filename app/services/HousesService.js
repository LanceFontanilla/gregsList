import { AppState } from "../AppState.js";
import { saveState } from "../utils/Store.js";
import { House } from "../models/House.js";

function _saveHouses() {
    saveState('houses', AppState.houses)
}

class HousesService {
    deleteHouse(houseId) {
        let foundHouse = AppState.houses.find(house => house.id == houseId)

        let filteredHouseArr = AppState.houses.filter(house => house.id != houseId)
        console.log(filteredHouseArr)
        AppState.houses = filteredHouseArr
        _saveHouses()
    }
    createHouse(formData) {
        let newHouse = new House(formData)
        AppState.houses.push(newHouse)
        console.log(AppState.houses)
        AppState.emit('houses')
        _saveHouses()
    }
}

export const housesService = new HousesService() 