import React from 'react'


const Vehicule = (props) => {

    // const bordure = (e)=>{
    //         e.style.borderColor ="red"
    // }

    return (
        <div>


            <li /*onChange={}*/>

                {/*               
                //     props.validite == "Non validé" ?
                    
                // <li className="red border border-danger">{props.marque}, {props.annee}, {props.couleur}, {props.carburant}, {props.validite} </li> 
                //  :      
                //  <li>{props.marque}, {props.annee}, {props.couleur}, {props.carburant}, {props.validite} }</li> 
                 */}



                <div className={props.validite === "Non validé" ? "border border-dager red"
                    :
                    ""
                }>
                    {props.marque}, {props.annee}, {props.couleur}, {props.carburant}, {props.validite} }
            
            </div>
            {/* <button onClick ={() => setValide('Validé')}>click</button> */}
            </li>





        </div>
    )
}


export default Vehicule 