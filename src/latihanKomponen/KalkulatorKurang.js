import React, { useState } from 'react'

export default function KalkulatorPengurangan() {
    const [Angka1, setAngka1] = useState(0)
    const [Angka2, setAngka2] = useState(0)
    const [Jumlah, setJumlah] = useState(0)

    const tambah = () => {
        setJumlah(+Angka1 - +Angka2)
    }

    return (
    <div>
    <h1>Kalkulator Pengurangan</h1>
    <input type="text" value={Angka1} onChange={e=>setAngka1(e.target.value)}></input>
    -
    <input type="text" value={Angka2} onChange={e=>setAngka2(e.target.value)}></input>
    <h3>Jumlah : {Jumlah} </h3>
    <h2><button onClick={tambah}>Tambah</button></h2>
    </div>
  )
}
