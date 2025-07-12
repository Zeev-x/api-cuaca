const axios = require('axios'); 
const url = 'https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=';

function getWeatherData(location_id) {
  return new Promise((resolve, reject) => {
    axios.get(url + location_id)
      .then(response => {
        const data = response.data.data?.[0];

        if (!data) {
          resolve({ error: 'Data kosong atau tidak ditemukan.' });
          return;
        }

        const lokasi = data.lokasi || {};
        const cuaca = data.cuaca || [];

        const hasil = {
          lokasi: {
            provinsi: lokasi.provinsi || '-',
            kotkab: lokasi.kotkab || '-', // `lokasi.kotkab` diganti `lokasi.kota` jika field aslinya seperti itu
            kecamatan: lokasi.kecamatan || '-',
            desa: lokasi.desa || '-',
            lon: lokasi.lon ? parseFloat(lokasi.lon) : null,
            lat: lokasi.lat ? parseFloat(lokasi.lat) : null,
          },
          cuaca: [cuaca[0]] // sesuai contoh kamu ingin array dalam array
        };

        resolve(hasil);
      })
      .catch(error => {
        resolve({
          error: 'Terjadi kesalahan saat mengambil data cuaca.',
          details: error.message
        });
      });
  });
}

module.exports = getWeatherData;