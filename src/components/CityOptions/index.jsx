import React from 'react';

const CityOptions = ({ cities }) => {
    // console.log('Seznam měst:', cities);

    return (
        <>
            <option value="">Vyberte</option>
            {cities.map(city => (
                <option key={city.code} value={city.name}>
                    {city.name}
                </option>
            ))}
        </>
    );
};

export default CityOptions;