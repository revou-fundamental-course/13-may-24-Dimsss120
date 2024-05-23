// POP UP START // POP UP START // POP UP START // POP UP START

// let welcome = 1
// let perkenalan = 1
// let hormat = 1

// // switch welcome
// switch(welcome) {
//   case 1 :
//     welcome = 'Halo Selamat Datang Di MiniCoding Saya 😄'
// }

// // switch perkenalan
// switch(perkenalan) {
//   case 1 :
//     perkenalan = 'Baiklah.. Saya Dimas, Saya Berasal Dari Sulawesi Selatan Tepatnya Di Kota Makassar ❤️'
// }

// // switch hormat
// switch(hormat) {
//   case 1 :
//     hormat = 'Terima Kasih Telah Mengunjungi Web Kecil Saya :D'
// }

// // alert 1
// alert(`${welcome}`)

// // alert 2
// alert(`${perkenalan}`)

// // alert 3
// alert(`${hormat}`)

//POP UP END //POP UP END //POP UP END //POP UP END //POP UP END


// variabel


const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')


hitung.addEventListener('click' , function(){
  let a = alas.value
  let t = tinggi.value
  let l = 0.5*a*t
  output.innerHTML = `Luas Segitiga dari alas ${a} cm dan tinggi ${t} cm adalah ${l} cm2`
})




