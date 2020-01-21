import React from 'react'
import Vehicule from './Vehicule'

const Garage = (props) => {
    return (
        <div>

            
                <Vehicule marque=" Mercedes Benz S 260" annee="1991" couleur="Bleu" carburant="Essence" validite="Non validé" />
                <Vehicule marque=" Fiat 500" annee="2010" couleur="Noire" carburant="Essence" validite="Non validé" />
                <Vehicule marque="Volkswagen Crafter" annee="2016" couleur="Blanche" carburant="Diesel" validite="Validé" />
                <Vehicule marque="BMW 114" annee="2012" couleur="Bleu" carburant="Essence" validite="Non validé" />
                <Vehicule marque="Audi A3" annee="2015" couleur="rouge" carburant="Diesel" validite="Validé"  />
            

        </div>
    )
}


export default Garage