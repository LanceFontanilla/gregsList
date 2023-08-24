import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"
import { Pop } from "../utils/Pop.js"

function _drawHouses() {
    console.log('drawing houses')
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HousesTemplate)
    console.log('drawing houses', content)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        console.log('this is the Houses Controller')
        console.log('we got houses', AppState.houses)
        _drawHouses()
        AppState.on('houses', _drawHouses)
    }

    createHouse() {
        window.event.preventDefault()
        const formEvent = window.event.target

        console.log('form event', formEvent)
        const formData = getFormData(formEvent)

        console.log('form data object', formData)

        formEvent.reset()

        housesService.createHouse(formData)
    }

    async deleteHouse(houseId) {
        if (await Pop.confirm("Are you sure you want to remove this listing?")) {
            console.log('deleting', houseId)
            housesService.deleteHouse(houseId)
        }
    }

}