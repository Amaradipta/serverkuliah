const mahasiswaNim = '1102020';
const updatedData = {
  nama: 'Kiboy',
  gender: 'L',
  prodi: 'SI',
  alamat: 'Cisaat'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));