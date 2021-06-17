import React, { useState, useEffect } from 'react' ;
import MaterialTable from 'material-table' ;
import './activities.css'
import * as FaIcons from 'react-icons/fa';

//OT34-61...inicio
import {makeStyles} from '@material-ui/core/styles';
import FormActivities from '../../Actividades/FormActivities/FormActivities';
// import theme from '@chakra-ui/theme';
import Modal from './../../common/ModalWrapper';
import { useDisclosure } from '@chakra-ui/react';
import { getActivities } from './getActivities';

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
            field:'name'
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

    const [data, setData] = useState([]);

    useEffect(() => {
        getActivities().then((result) => {
            setData(result);
        })
    }, [])
    
    //OT34-61...inicio
    const styles = useStyles();
    const [editData, setEditData] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleCloseModal = (success) => {
        if(success)
            getActivities().then(result =>  setData(result));
        onClose();
    }

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
                            onClick:(event, rowData) => {
                                setEditData(rowData);
                                onOpen();
                            }
                        },
                        {
                            icon:FaIcons.FaTrash ,
                            tooltip:'Eliminar',
                            onClick:(event, rowData) => alert ('vas a eliminar: ' + rowData.name)
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
            <Modal isOpen={isOpen} onClose={onClose} label={data? 'Crear Actividad': 'Editar Actividad'}>
                <FormActivities data={editData} onClose={handleCloseModal} />
            </Modal>
            {/* //OT34-61...fin */}

            </div>                   
        )

}

export default Actividades_Backoffice;
