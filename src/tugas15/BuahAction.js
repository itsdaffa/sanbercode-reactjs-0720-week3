import React, {useContext} from 'react'
import {BuahContext} from "./BuahContext"
import axios from 'axios'

const BuahAction = (props) => {
    const [dataHargaBuah, setDataHargaBuah, selectedId, setSelectedId, input, setInput, statusForm, setStatusForm] = useContext(BuahContext)
    const handleEdit = (e) => {
        let idBuah = parseInt(e.target.value)
        let buah = dataHargaBuah.find(x => x.id === idBuah)

        setInput({name: buah.name, price: buah.price, weight: buah.weight})
        setSelectedId(idBuah)
        setStatusForm("EDIT")
    }

    const handleDelete = (e) => {
        let idBuah = parseInt(e.target.value)
        let deletedDaftarBuah = dataHargaBuah.filter(el => el.id != idBuah)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
            .then(res => {
                    console.log('Succesfully deleted: '+ res.data);
        })

        setDataHargaBuah(deletedDaftarBuah)
    }

    return(
        <>
          <td>
            <button type="button"  onClick={handleEdit} value={props.id}>Edit</button>
            &nbsp;
            <button type="button"  onClick={handleDelete} value ={props.id}>Delete</button>
          </td>
        </>
    )
}

export default BuahAction