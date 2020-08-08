import React, {useContext, useEffect, Component} from 'react'
import axios from 'axios';
import BuahAction from './BuahAction'
import {BuahContext} from './BuahContext'

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

const BuahList= () => {
    const [dataHargaBuah, setDataHargaBuah] = useContext(BuahContext)

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
                                <BuahAction />   
                        </td>
                        </tr>)})
                }
                </tbody>
            </table>
            </>
    )
}

export default BuahList