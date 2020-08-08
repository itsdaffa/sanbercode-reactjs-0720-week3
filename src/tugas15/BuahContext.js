import React, {useState, createContext} from 'react';

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [input, setInput] = useState({name: "", price: "", weight:""})
    const [selectedId, setSelectedId]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("CREATE")
    
    return (
        <BuahContext.Provider value={[dataHargaBuah, setDataHargaBuah, input, setInput, selectedId, setSelectedId, statusForm, setStatusForm]}>
            {props.children}
        </BuahContext.Provider>
    )
}