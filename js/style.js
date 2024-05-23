
// variabel


hasil.addEventListener('click' , function add(){
  var a,t,c; //membuat variabel
  const pern = document.getElementById('output')

  a=Number(document.getElementById("alas").value); //menangkap input angka pertama
  t=Number(document.getElementById("tinggi").value); //menangkap input angka kedua
  c = 0.5*a*t; //melakukan penjumlahan
  document.getElementById("hitung").value= c;
  output.innerHTML = `Luas Segitiga adalah ${c}`
  })





