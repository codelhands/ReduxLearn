import { createSlice } from "@reduxjs/toolkit"; // slice oluştur

// slice içinde , state içinde duracak verilere key vermek



// dışa aktarmamız lazım çünkü store.js dosyasında 
// reducer tanımladık oraya vereceğiz.
export const counterSlice = createSlice({
    name: 'counter', //state' ulaşmak istediğimiz zaman state.counter olarak gitmemizi sağlayacak
    initialState: { //state'in ilk oluşturulurken ki değerlerini belirlemek için
        value: 0 //veri tanımlama
    },
    reducers: { //bu bir field'dır. bunun içine stateleri güncelleyeceğimiz şeyleri yazacağız
    
    },
});

export default counterSlice.reducer;