breakVoid = ' '


//Test 1

console.log('Latihan dimulai dalam 5 detik');
setTimeout(() => { console.log('Mulai!')}, 5000);

console.log(breakVoid);


//Test 2

let intervalSet = 1

const intervalSequence = setInterval (() => {
    console.log(`Detik ke-${intervalSet}`);
    intervalSet++;
    
    if (intervalSet > 5) {
        clearInterval(intervalSequence);
    }
}, 1000);

console.log(breakVoid);


//Test 3

console.log('Tunggu 2 detik');

setTimeout(() => {
    console.log('Mulai latihan');
    
    let runDistance = 1;

    const runSequence = setInterval(() => {
        console.log(`Lari ${runDistance} meter`);
        runDistance++;

        if (runDistance > 10) {
            clearInterval(runSequence);
        }
    }, 1000);
}, 2000);

console.log(breakVoid);


//Test 4

function arrayCallback(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }
  
  const data = [1, 2, 3, 4, 5];
  
  arrayCallback(data, (item, index) => {
    console.log(`Index: ${index}, Value: ${item}`);
  });
  

console.log(breakVoid);


//Test 5

function purchaseItem(balanceBeginning, itemPrice, itemEntity, callback) {
    if (balanceBeginning >= itemPrice) {
      balanceBeginning -= itemPrice;
      console.log(`Membeli ${itemEntity} dengan harga Rp${itemPrice}. Sisa saldo: Rp${balanceBeginning}`);
      callback(balanceBeginning);

    } else {
      console.log('Uang tidak mencukupi');
    }
  }
  
  const balanceBeginning = 100000;
  
  purchaseItem(balanceBeginning, 50000, 'Buku', (balanceMutation1) => {
    purchaseItem(balanceMutation1, 20000, 'Pulpen', (balanceMutation2) => {
        purchaseItem(balanceMutation2, 10000, 'Penghapus', (balanceMutation3) => {
            purchaseItem(balanceMutation3, 5000, 'Pensil', (balanceMutation4) => {
                console.log('Proses pembelian selesai');
        });
      });
    });
  });


console.log(breakVoid);


//Test 6

function urutkanArray(arr, compareFunc, callback) {
    for (let i = 0; i < arr.length - 1; i++) {

      for (let j = 0; j < arr.length - i - 1; j++) {

        if (compareFunc(arr[j], arr[j + 1]) > 0) {

          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    callback(arr);
  }
  
  urutkanArray([3, 1, 4, 1], (a, b) => a - b, (hasil) => {
    console.log(hasil);
  });
  

console.log(breakVoid);

