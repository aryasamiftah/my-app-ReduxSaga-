
import React from 'react'

const KirimAngkaChild = (props)=> {  
    return (
        <div className='text-center'>
        <p>Operasi Kalkulator</p>
        <input type = "text" onChange={event=>props.setAngka1(event.target.value)}></input>
        <input type = "text" onChange={event=>props.setAngka2(event.target.value)}></input>
        <p>Pilih Operasi</p>
        <button onClick={()=> props.onAritmatika('+')}>+</button>
        <button onClick={()=> props.onAritmatika('-')}>-</button>
        <button onClick={()=> props.onAritmatika('*')}>*</button>
        <button onClick={()=> props.onAritmatika('/')}>/</button>
        <input type="checkbox" id="checkbox1" onChange={()=> props.onAritmatika('+')}></input>
        <label for="checkbox1">Penjumlahan</label>
        <h2>{props.jawaban}</h2>
    </div>
  )
}

export default KirimAngkaChild
