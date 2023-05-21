import ListItem from "./ListItem"


const CountrySelect = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const selectedCountry = countries[event.target.value]
        // console.log(event.target.value)
        onCountrySelected(selectedCountry)
    }
    
    const countryItems = countries.map((country, index) => {
        
        return (

        <ListItem 
        country={country} 
        key={index} 
        index={index}
        />
    )
})

return (
    
    <select defaultValue="" onChange={handleChange} >
        <option value="" >What is the capital of?</option>
        {countryItems}
    </select>
)
} 

export default CountrySelect