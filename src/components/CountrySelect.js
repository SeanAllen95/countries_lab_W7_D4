import ListItem from "./ListItem"


const CountrySelect = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const selectedCountry = countries[event.target.value]
        console.log(event.target.value)
        onCountrySelected(selectedCountry)
    }
    
    
    
    const countryItems = countries.map((country, index) => {
        
        return (

        <ListItem 
        country={country} 
        key={index} 
        onCountrySelected={onCountrySelected}
        />
    )

    
    
})

return (
    <label> Pick a Country: 
    
    <select name="countrySelected" onChange={handleChange} >
        <option value=""></option>
        {countryItems}
    </select>
    </label>
)
} 

export default CountrySelect