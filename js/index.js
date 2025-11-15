const dataMobil = [
    'Ayla',
    'Calya',
    'Avanza',
    'Innova',
    'Fortuner',
    'Yaris',
    'Vios',
    'Rush',
    'Agya',
    'Sienta',
    'Land Cruiser',
]

console.log(dataMobil)
//document.writeln(dataMobil)


//TIPE DATA
const text = 'Hello World' //STRING
console.log(text)

const number = 123456789 //Number
console.log(number)

const dataBoolean = true //Boolean
console.log(dataBoolean)

//ARITMETIC OPERATOR
const hasil = 12/12
console.log(hasil)

const a = 30
const b = 50
const hasilPerhitungan = a + b
console.log(hasilPerhitungan)

const hasilPerhitungan2 = a - b
console.log(hasilPerhitungan2)


//PERBNDINGAN
const hasilLebihDari = 5 > 3
console.log(hasilLebihDari)

const hasilKurangDari = 5 < 3
console.log(hasilKurangDari)

const hasilSamaDengan = 5 == 5
console.log(hasilSamaDengan)

const hasilTidakSamaDengan = 5 != 5
console.log(hasilTidakSamaDengan)

const cekTipeData = 5 === '5'
console.log(cekTipeData)


//LOGICAL OPERATOR
const nilaiProject = 74
const nilaiLms = 76

const lulusProject = nilaiProject > 75
const lulusLms = nilaiLms > 75

const lulusSempurna = lulusProject && lulusLms
const lulusCukup = lulusProject || lulusLms

console.log('Lulus Sempurna: ',lulusSempurna)
console.log('Lulus Cukup', lulusCukup)


//CONDITIONAL IF ELSE
if(nilaiProject > 75){
    console.log('LULUS PROJECT')
}else if(nilaiLms > 75){
    console.log('LULUS LMS')
}else{
    console.log('TIDAK LULUS')
}


if(nilaiProject >= 75 && nilaiLms >= 75){
    console.log('LULUS SEMPURNA')
}else if(nilaiProject < 75 && nilaiLms >= 75){
    console.log('LULUS LMS SAJA')
}else if(nilaiProject >= 75 && nilaiLms < 75){
    console.log('LULUS PROJECT SAJA')
}else{
    console.log('TIDAK LULUS')
}

//Ternary Operator
const kelulusanSiswa = nilaiProject >= 75 && nilaiLms >= 75 ? 'LULUS SEMPURNA' : nilaiProject < 75 && nilaiLms >= 75 ? 'LULUS LMS SAJA' : nilaiProject >= 75 && nilaiLms < 75 ? 'LULUS PROJECT SAJA' : 'TIDAK LULUS'
console.log(kelulusanSiswa)


//ARRAY METHODS
console.log(dataMobil[3]) //index ke-n
console.log(dataMobil.length) //panjang array
dataMobil.push('Supra') //menambah data di akhir array
console.log(dataMobil)

const dataMotor = [
    'Ninja',
    'CBR',
    'Vixion',
    'R15',
    'PCX'
]

const gabungKendaraan = dataMobil.concat(dataMotor) //menggabungkan 2 array
console.log(gabungKendaraan)
