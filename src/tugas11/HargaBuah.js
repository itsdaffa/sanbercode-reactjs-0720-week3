import React from 'react';

class Header extends React.Component {
    render() {
        return <h1>Tabel Harga Buah</h1>
    }
}

class TableHeader extends React.Component {
    render() {
        return (
            <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
            </tr>)
    }
}

class TableData extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.nama}</td>
                <td>{this.props.data.harga}</td>
                <td>{this.props.data.berat/1000} kg</td>
            </tr>
        )
    }
}

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class HargaBuah extends React.Component {
    render() {
        return (
            <>
            <Header />
            <table>
            <TableHeader />
            {dataHargaBuah.map(data => {
               return(
                <TableData data={data}/>
               ) 
            })}
            </table>
            </>)
    }
}


export default HargaBuah;