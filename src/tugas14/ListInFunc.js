import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';


class Header extends Component {
    render() {
        return <th>{this.props.name}</th>
    }
}

class Cell extends Component {
    render() {
        return <td>{this.props.name}</td>
    }
}

const ListInFunc = () => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [input, setInput] = useState({name: "", price: "", weight:""})
    const [selectedId, setSelectedId]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("CREATE")

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

    useEffect( () => {
        if(dataHargaBuah===null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataHargaBuah(res.data.map(el => {return {id: el.id, name:el.name, price:el.price, weight:el.weight}}))
            })
        }
      })

    return (
        <>
            
            <h1> Tabel Harga Buah </h1>
            <table>
                <thead>
                <tr>
                    <Header name={'No.'} />
                    <Header name={'Buah'} />
                    <Header name={'Harga'} />
                    <Header name={'Berat'} />
                    <Header name={'Aksi'} />
                </tr>
                </thead>
                <tbody>
                {dataHargaBuah !== null && dataHargaBuah.map((isi, index) => {
                return( <tr key={index}>
                        <Cell name={index+1} />
                        <Cell name={isi.name} />
                        <Cell name={isi.price} />
                        <Cell name={isi.weight} />
                        <td style={{textAlign: "center"}}>
                                <button onClick ={handleEdit} value={isi.id}>Edit</button>
                                &nbsp;
                                <button onClick={handleDelete} value={isi.id}>Delete</button>   
                        </td>
                        </tr>)})
                }
                </tbody>
            </table>

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
           
           </>
    )
}

export default ListInFunc;