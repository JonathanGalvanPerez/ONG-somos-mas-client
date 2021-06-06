import React, { Component } from 'react' ;
import MaterialTable from 'material-table' ;
import './activities.css'
import * as FaIcons from 'react-icons/fa';


function Actividades_Backoffice() {

    const columnas = [
        {
            title:'Nombre Actividad',
            field:'activitie'
        },
        {
            title:'URL image',
            field:'image'
        },
        {
            title:'Contenido',
            field:'content'
        },
        {
            title:'Eliminado',
            field:'deletedAt',
            type:'TINYINT'
        },
        
    ];
    
    const data = [
        {activitie: '1 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:1},
        {activitie: '2 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:0},
        {activitie: '3 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:1},
        {activitie: '4 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:1},
        {activitie: '5 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:0}
    ] ;

        return (

            <div  className='materialTable'>
                <MaterialTable 
                    columns={columnas}
                    data = {data}
                    title = 'Actividades'
                    actions={[
                        {
                            icon:FaIcons.FaEdit ,
                            tooltip:'Editar',
                            onClick:(event, rowData) => alert ('vas a modificar: ' + rowData.activitie)
                        },
                        {
                            icon:FaIcons.FaTrash ,
                            tooltip:'Eliminar',
                            onClick:(event, rowData) => alert ('vas a eliminar: ' + rowData.activitie)
                        }
                    ]}
                    //Agregamos las acciones en la ultima columna
                    options={{
                        actionsColumnIndex:-1
                    }}
                    //cambiamos el titulo de la ultima columna 
                    localization = {{
                        header:{
                            actions : 'Acciones'
                        }
                    }}
                />
            </div>
        )

}

export default Actividades_Backoffice;
