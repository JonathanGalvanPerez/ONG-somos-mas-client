import React, { useState } from 'react' ;
import MaterialTable from 'material-table' ;
import './activities.css'
import * as FaIcons from 'react-icons/fa';

//OT34-61...inicio
import {Modal} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import FormActivitie from '../../Actividades/FormActivities/FormActivitie';
import {Button} from '@chakra-ui/react'
import Alert from '../../alertService/AlertService';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from './../../../app/config';

// import theme from '@chakra-ui/theme';
const useStyles=makeStyles((theme) =>({

    modal:{
        position:'absolute',
        width:400,
        backgroundColor:'white',
        border:'2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),  //padding: "16px 32px 24px"       
        //mostrar en medio de la pantalla
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)'
    }

}))
//OT34-61...fin


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
            type:'numeric'
        },
        
    ];
    
    const data = [
        {activitie: '1 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:1},
        {activitie: '2 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:0},
        {activitie: '3 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:1},
        {activitie: '4 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:1},
        {activitie: '5 Actividad de prueba', image:'https://via.placeholder.com/150', content: 'contenido de prueba' , deletedAt:0}
    ] ;
    
    //OT34-61...inicio
    const styles = useStyles(); 
    const [modal, setModal]=useState(false);
    const token = useSelector(state => state.login.token);

    const openCloseModal=()=>{
        setModal(!modal);
    }

    const handleDeleteButton = async (activityData) => {
        const confirmed = await Alert.confirm('Esta seguro de querer eliminar esta actividad?', 'Esta accion es irreversible');
        try{
            if(confirmed) {
                const result = await axios.delete(API_BASE_URL + '/activities/' + activityData.id, {
                    headers: { Authorization: 'Bearer ' + token }
                });
                if (result)
                    Alert.success('Hecho', 'La actividad fue eliminada');
                else
                    Alert.error('Ups', 'Parece que hubo un error. Intentelo de nuevo mas tarde');
            }
        } catch(err) {
            console.log(err)
            Alert.error('Ups', 'Parece que hubo un error. Intentelo de nuevo mas tarde');
        }
    }

   //Datos de prueba para path en el formActivitie 
    const dataPrueba ={
        name: '1 Actividad de prueba', 
        image:'https://via.placeholder.com/150', 
        content: 'contenido de prueba' }

    const body=(
        <div className = {styles.modal}>
            <div align="center">
                <FormActivitie data={dataPrueba} type="edit"/>
                <Button mt={4} colorScheme="teal"  onClick={()=>openCloseModal()}>Cancelar</Button>
            </div>                
        </div>
    )
    //OT34-61...fin

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
                            onClick:(event, rowData) => openCloseModal() 
                            
                        },
                        {
                            icon:FaIcons.FaTrash ,
                            tooltip:'Eliminar',
                            onClick:(event, rowData) => handleDeleteButton(rowData)
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
            
            {/* //OT34-61...inicio */}
                <Modal open={modal} onClose={openCloseModal}>
                    {body}
                </Modal>   
            {/* //OT34-61...fin */}

            </div>                   
        )

}

export default Actividades_Backoffice;
