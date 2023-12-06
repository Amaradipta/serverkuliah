const mahasiswaNim = '1102020';
const updatedData = {
  nama: 'Kiboy',
  gender: 'L',
  prodi: 'TI',
  alamat: 'Cisaat'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json' // Ensure correct content type
  },
  body: JSON.stringify(updatedData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));