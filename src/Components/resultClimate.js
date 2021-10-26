import React from 'react';

const ResultClimate = props => {
    const {result} = props
    console.log("=====>>>>>>", result)
    return (
        <div>
            <p>temperatura: {result.temp}˚C </p>
            {/* <p>temp. Maxima: {result.forecast[0].max}˚C</p> */}
            {/* <p>temp. Minima: {result.forecast[0].min}˚C</p> */}
            <p>descrição: {result.description} </p>
            <p>cidade: {result.city}</p>
            <p>velocidade do vento: {result.wind_speedy}</p>
            <p>condições do tempo: {result.condition_slug}</p>
            <p>humidade: {result.humidity}%</p>
        </div>
    );
};


export default ResultClimate;