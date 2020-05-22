import React, {useState} from 'react';
import Error from './Error';

const Form = ({search, setSearch, setRequest}) => {

    const [error, setError] = useState(false);

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }
    
    const handleSubmit = e => {
        
        e.preventDefault();
        if(city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        setRequest(true);

    }

    const {country, city} = search;

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="Ambos campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Pais: </label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Weather Search"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}
 
export default Form;