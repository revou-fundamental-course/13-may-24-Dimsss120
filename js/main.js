//keliling

hasil.addEventListener('click' , function add(){
  var a,b,d,c; //membuat variabel
  const output = document.getElementById('output')

  a=Number(document.getElementById("s1").value); //menangkap input angka pertama
  b=Number(document.getElementById("s2").value); //menangkap input angka kedua
  d=Number(document.getElementById("s3").value); //menangkap input angka kedua
  c = a + b + d; //melakukan penjumlahan
  document.getElementById("hasil").value= c;
  footer.innerHTML = `Keliling Segitiga dari sisi a ${a}, sisi b ${b}, dan sisi c ${d} adalah ${c}`
  })