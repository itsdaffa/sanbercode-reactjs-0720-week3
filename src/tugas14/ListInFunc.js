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
    const [dataHargaBuah, setDataHargaBuah] = useState([
        {name: "Semangka", price: 10000, weight: 1000}
    ])
    const [input, setInput] = useState({nama: "", harga: "", berat:""})
    const [indexOfForm, setIndexOfForm] = useState(-1)
    const [statusForm, setStatusForm] = useState("create")
	const [selectId, setSelectedId] = useState(0)


	const handleChange = (event) => {
		const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
		}))}

        const handleSubmit = (event) => {
            event.preventDefault()
            if(input['name'].replace(/\s/g, '') !== "" && input['price'].toString().replace(/\s/g, '') !== "" && input['weight'].toString().replace(/\s/g, '') !== "" ){
                if(statusForm === "create"){
                    axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
                        .then(res => {
                            console.log(res.data)
                            setDataHargaBuah([...dataHargaBuah, {name: res.data.name, price: res.data.price, weight: res.data.weight}])
                        })
                    } else if(statusForm === "edit"){
                        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectId}`, input)
                            .then(res => {
                                let buah = dataHargaBuah.find(el => el.id === selectId)
                                buah['name'] = input.name
                                buah['price'] = input.price
                                buah['weight'] = input.weight
                                setDataHargaBuah([...dataHargaBuah])
                            })
                    }
            setStatusForm("create")
			setSelectedId(0)
			setInput({
				name: "",
				price: "",
				weight: ""
			})
		}
	}

    const handleEdit = (event) => {
		let id = Number(event.target.value)
		console.log(dataHargaBuah)
		let buah = dataHargaBuah.find(x => x.id === id)
		setInput({name: buah.name, price: buah.price, weight: buah.weight})
		setSelectedId(id)
		setStatusForm("edit")
	}

    const handleDelete = (event) => {
		let id = Number(event.target.value)
		let newDataBuah = dataHargaBuah.filter(el => el.id !== id)

		axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
			.then(res => {
				console.log(res)
			})
		setDataHargaBuah([...newDataBuah])
	}

    useEffect(() =>{
		if(dataHargaBuah === null) {
			axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
				.then(res => {
					setDataHargaBuah(res.data.map(el => {return {id:el.id, name:el.name, price:el.price, weight:el.weight }}))
				})
		}
	},[dataHargaBuah] )

    return (
        <>
            
            <h1> Tabel Harga Buah </h1>
            <table>
                <tr>
                    <Header name={'No.'} />
                    <Header name={'Buah'} />
                    <Header name={'Harga'} />
                    <Header name={'Berat'} />
                    <Header name={'Aksi'} />
                </tr>
                {dataHargaBuah.map((isi, index) => {
                    return (
                        <tr key={index}>
                            <Cell name={index+1} />
                            <Cell name={isi.name} />
                            <Cell name={isi.price} />
                            <Cell name={isi.weight} />
                            <td style={{textAlign: "center"}}>
                                    <button onClick ={handleEdit} value={index}>Edit</button>
                                    &nbsp;
                                    <button onClick={handleDelete} value={index}>Delete</button>   
                            </td>
                        </tr>

                    )
                    
                 })}  
            </table>

            <form onSubmit={handleSubmit}>
                 <label htmlFor="nama">Nama Buah: </label>
                 <input type="text" id="nama" name="nama" value={input.nama} onChange={handleChange} placeholder="Nama Buah"/>
                 <br/><br/>
                 <label htmlFor="harga">Harga: </label>
                 <input type="text" id="harga" name="harga" value={input.harga} onChange={handleChange} placeholder="Harga"/>
                 <br /><br/>
                 <label htmlFor="berat">Berat: </label>
                 <input type="text" id="berat" name='berat' value={input.berat} onChange={handleChange} placeholder="Berat"/>
                 <br/><br/>
                 <input type="submit" value="Kirim!" />
            </form>
           
           </>
    )
}

export default ListInFunc;