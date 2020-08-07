import React, {Component} from 'react';

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

class List extends Component {
    constructor(props) {
        super (props);
        this.state = {
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            input: {
                nama: "",
                harga: "",
                berat: ""
            },

            indexofForm: -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        let input = {...this.state.input}
        input[event.target.name] = event.target.value
        this.setState(
            {input}
        )
    }

    handleSubmit(event) {
        event.preventDefault();

        let input = this.state.input;
        if (input['nama'].replace(/\s/g, "") !== "" && input['harga'].toString().replace(/\s/g, "") !== "" && input['berat'].toString().replace(/\s/g, "") !== "") {
            let newDaftarBuah = this.state.dataHargaBuah
            let index = this.state.indexofForm
            console.log(index)
            if (index === -1) {
                newDaftarBuah = [...newDaftarBuah, input]
            } else {
                newDaftarBuah[index] = input
            }

            this.setState(
                {dataHargaBuah: newDaftarBuah,
                input: {
                    nama: "",
                    harga: "",
                    berat: ""
                },
                
                indexofForm: -1}
            )
        }
    }

	handleEdit(event) {
		let index = event.target.value
		let buah = this.state.dataHargaBuah[index]
		this.setState({
			input :{
				nama: buah.nama,
				harga: buah.harga,
				berat: buah.berat				
			}, 
			indexOfForm: index
		})
	}

    handleDelete(event) {
        let index = event.target.value
        let newDaftarBuah = this.state.dataHargaBuah
        let editedDaftarBuah = newDaftarBuah[this.state.indexofForm]
        newDaftarBuah.splice(index, 1)

        if (editedDaftarBuah !== undefined) {
            let newIndex = newDaftarBuah.findIndex((el) => el === editedDaftarBuah)
            this.setState({dataHargaBuah: newDaftarBuah, indexofForm: newIndex})
        } else {
            this.setState({dataHargaBuah: newDaftarBuah})
        }

    }

    
    

    render() {
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
                {this.state.dataHargaBuah.map((isi, index) => {
                    return (
                        <tr key={index}>
                            <Cell name={index+1} />
                            <Cell name={isi.nama} />
                            <Cell name={isi.harga} />
                            <Cell name={isi.berat} />
                            <td style={{textAlign: "center"}}>
                                    <button onClick ={this.handleEdit} value={index}>Edit</button>
                                    &nbsp;
                                    <button onClick={this.handleDelete} value={index}>Delete</button>   
                            </td>
                        </tr>

                    )
                    
                 })}  
            </table>

            <form onSubmit={this.handleSubmit}>
                 <label htmlFor="nama">Nama Buah: </label>
                 <input type="text" id="nama" name="nama" value={this.state.input.nama} onChange={this.handleChange} placeholder="Nama Buah"/>
                 <br/><br/>
                 <label htmlFor="harga">Harga: </label>
                 <input type="text" id="harga" name="harga" value={this.state.input.harga} onChange={this.handleChange} placeholder="Harga"/>
                 <br /><br/>
                 <label htmlFor="berat">Berat: </label>
                 <input type="text" id="berat" name='berat' value={this.state.input.berat} onChange={this.handleChange} placeholder="Berat"/>
                 <br/><br/>
                 <input type="submit" value="Kirim!" />
            </form>
           
           </>
        )
    }


}


export default List;