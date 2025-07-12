# Api-Cuaca
Api cuaca ini di ambil langsung dari [BMKG](https://bmkg.go.id/)

## Cara menggunakan
```cpp
npm install api-cuaca
```

```cpp
const getWeatherData = require('api-cuaca');

kode_lokasi = '00.00.00.0000' //Gunakan kode lokasimu

getWeatherData(kode_lokasi)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });
```
kode lokasi bisa kamu dapatkan di [Kode-wilayah](https://kodewilayah.id/)

## Thanks to
[Zeev-x](https://github.com/Zeev-x)
