import React, { useState } from 'react'

export default function KalkulatorPertambahan() {
    const [Angka1, setAngka1] = useState(0)
    const [Angka2, setAngka2] = useState(0)
    const [Jumlah, setJumlah] = useState(0)

    const tambah = () => {
        setJumlah(+Angka1 + +Angka2)
    }

    return (
    <div className='contact'>
    <div className='php-email-form'>
    <h1>Kalkulator Pertambahan</h1>
    <input type="text" value={Angka1} onChange={e=>setAngka1(e.target.value)}></input>
    +
    <input type="text" value={Angka2} onChange={e=>setAngka2(e.target.value)}></input>
    <h3>Jumlah : {Jumlah} </h3>
    <button className='button type="submit"' onClick={tambah}>Tambah</button>
    </div>
    </div>  
  )
}
