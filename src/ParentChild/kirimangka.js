import React, {useState} from 'react'
import KirimAngkaChild from './kirimangkachild'

const KirimAngka = () => {
  const [Angka1, setAngka1] = useState(0)
  const [Angka2, setAngka2] = useState(0)
  const [Jumlah, setJumlah] = useState(0)

  const setAritmatika = (Aritmatika) => {
    if(Aritmatika === '+'){
      setJumlah(+Angka1 + +Angka2)
    }else if(Aritmatika === '-'){
      setJumlah(+Angka1 - +Angka2)
    }else if(Aritmatika === '*'){
      setJumlah(+Angka1 * +Angka2)
    }else{
      setJumlah(+Angka1 / +Angka2)
    }
  } 

  return (
    <div>
        <KirimAngkaChild
        setAngka1={setAngka1}
        setAngka2={setAngka2}
        jawaban = {Jumlah}
        onAritmatika = {setAritmatika}
        />
    </div>
  )
}

export default KirimAngka
