import React, {useContext} from 'react';
import {BuahContext} from './BuahContext';
import axios from 'axios';


const BuahForm = () => {
    const [dataHargaBuah, setDataHargaBuah, selectedId, setSelectedId, input, setInput, statusForm, setStatusForm] = useContext(BuahContext)

    const handleChange = (event) => {
		const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
		}))
	}

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (statusForm == "CREATE") {
            if (input['name'].replace(/\s/g, "") !== "") {

                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
                .then(res => {
                    setDataHargaBuah([...dataHargaBuah, {name: res.data.name, price: res.data.price, weight: res.data.weight}])
                })

            }
        } else if (statusForm == "EDIT") {
            if (input['name'].replace(/\s/g, "") !== "") {
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, input)
                .then(res => {
                    let selectedBuah = dataHargaBuah.find(el => el.id === selectedId)
                    console.log(selectedBuah)
                    selectedBuah['name'] = input.name
                    selectedBuah['price'] = input.price
                    selectedBuah['weight'] = input.weight
                    setDataHargaBuah(...[dataHargaBuah])
                })
            }
        }

        setInput({name: "", price: "", weight:""})
        setSelectedId(0)
        setStatusForm("CREATE")
    }


    return (
        <form onSubmit={handleSubmit}>
                 <label htmlFor="name">Nama Buah: </label>
                 <input type="text" id="name" name="name" value={input.name} onChange={handleChange} placeholder="Nama Buah"/>
                 <br/><br/>
                 <label htmlFor="price">Harga: </label>
                 <input type="text" id="price" name="price" value={input.price} onChange={handleChange} placeholder="Harga"/>
                 <br /><br/>
                 <label htmlFor="weight">Berat: </label>
                 <input type="text" id="weight" name='weight' value={input.weight} onChange={handleChange} placeholder="Berat"/>
                 <br/><br/>
                 <input type="submit" value="Kirim!" />
            </form>
    )
}

// export const BuahAction = (props) => {
//     const [dataHargaBuah, setDataHargaBuah, selectedId, setSelectedId, input, setInput, statusForm, setStatusForm] = useContext(BuahContext)
//     const handleEdit = (e) => {
//         let idBuah = parseInt(e.target.value)
//         let buah = dataHargaBuah.find(x => x.id === idBuah)

//         setInput({name: buah.name, price: buah.price, weight: buah.weight})
//         setSelectedId(idBuah)
//         setStatusForm("EDIT")
//     }

//     const handleDelete = (e) => {
//         let idBuah = parseInt(e.target.value)
//         let deletedDaftarBuah = dataHargaBuah.filter(el => el.id != idBuah)
//         axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
//             .then(res => {
//                     console.log('Succesfully deleted: '+ res.data);
//         })

//         setDataHargaBuah(deletedDaftarBuah)
//     }

//     return(
//         <>
//           <td>
//             <button type="button"  onClick={handleEdit} value={props.id}>Edit</button>
//             &nbsp;
//             <button type="button"  onClick={handleDelete} value ={props.id}>Delete</button>
//           </td>
//         </>
//     )
// }

export default BuahForm;
