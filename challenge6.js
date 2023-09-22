//Main

/* let barang1 = "Buku"
let hargaBuku = 50000

let barang2 = "Pulpen"
let hargaPulpen = 20000

let barang3 = "Penghapus"
let hargaPenghapus = 10000

let barang4 = "Pensil"
let hargaPensil = 5000

let saldoAwal = 100000 */

/* function belanja(saldoAwal, hargaBarang, jenisBarang, callback) {
    
    if (saldoAwal >= hargaBarang) {
        saldoAwal -= hargaBarang
        console.log(`Membeli ${jenisBarang} dengan harga ${hargaBarang}. Dan sisa saldo adalah ${saldoAwal}`);
        callback(saldoAwal)
    }else {
        console.log("Duh uangnya ga cukup, silahkan nabung");
    }
}


belanja(saldoAwal, hargaBuku, barang1, function(sisaSaldo) {
    belanja(sisaSaldo, hargaPulpen, barang2, function(sisaSaldo) {
        belanja(sisaSaldo, hargaPenghapus, barang3, function(sisaSaldo3) {
            belanja(sisaSaldo3, hargaPensil, barang4, function (sisaSaldo4) {
                belanja(sisaSaldo4, hargaPenghapus, barang3, function(sisaSaldo5) {
                    belanja(sisaSaldo5, hargaBuku, barang1, function(_) {
                    })
                })
            })
        })
    })
})

console.log(belanja); */


//Test 1

/* console.log("===== Test 1 =====") */

/* function langkahPertama() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Langkah 1 selesai");
        }, 2000);
    });
}

function langkahKedua() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Langkah 2 selesai");
        }, 3000);
    });
}

function langkahKetiga() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Langkah 3 selesai");
        }, 1000);
    });
} */

/* langkahPertama()
    .then((result) => {
        console.log(result);
        return langkahKedua();
    })
    .then((result) => {
        console.log(result);
        return langkahKetiga();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    }); */


//Test 2

/* console.log("===== Test 2 =====")

async function jalankanLangkah() {
    try {
        const hasilLangkah1 = await langkahPertama();
        console.log(hasilLangkah1);

        const hasilLangkah2 = await langkahKedua();
        console.log(hasilLangkah2);

        const hasilLangkah3 = await langkahKetiga();
        console.log(hasilLangkah3);
    } catch (err) {
        console.error(err, "Error");
    }
}

jalankanLangkah();
 */

/* //Test 3

console.log("===== Test 3 =====")

function belanja(saldoAwal, hargaBarang, jenisBarang) {
    return new Promise((resolve, reject) => {
        if (saldoAwal >= hargaBarang) {
            saldoAwal -= hargaBarang;
            console.log(`Membeli ${jenisBarang} dengan harga ${hargaBarang}. Sisa saldo: ${saldoAwal}`);
            resolve(saldoAwal);
        } else {
            reject("Uang tidak mencukupi");
        }
    });
}

belanja(saldoAwal, hargaBuku, barang1)
    .then((sisaSaldo) => 
        belanja(sisaSaldo, hargaPulpen, barang2))
    .then((sisaSaldo) => 
        belanja(sisaSaldo, hargaPenghapus, barang3))
    .then((sisaSaldo) => 
        belanja(sisaSaldo, hargaPensil, barang4))
    .then((sisaSaldo) => 
        belanja(sisaSaldo, hargaPenghapus, barang3))
    .then((sisaSaldo) => 
        belanja(sisaSaldo, hargaBuku, barang1))
    .catch((err) => {
        console.log(err);
    }); */


//Test 4

console.log("===== Test 4 =====")

async function pembagian(pembilang, penyebut) {
    try {
        if (penyebut === 0) {
            throw new Error("Penyebut tidak boleh 0");
        }
        const hasil = pembilang / penyebut;
        return hasil;
    } catch (error) {
        throw error; // Melempar kembali kesalahan
    }
}

// Contoh penggunaan:
(async () => {
    try {
        const hasilBagi = await pembagian(10, 2);
        console.log("Hasil pembagian:", hasilBagi);

        // Cobalah dengan penyebut 0:
        const hasilBagiZero = await pembagian(5, 0);
        console.log("Hasil pembagian:", hasilBagiZero); // Tidak akan mencapai ini karena akan melempar kesalahan di dalam fungsi.
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
    }
})();

