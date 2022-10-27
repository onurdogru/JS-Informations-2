// Değişken Türleri


////Primitive Types


//string
var name ='Onur';
//console.log(typeof name);

//number
var age = 24

//boolean
var online = true;
//console.log(typeof online);


////Reference Types - objects

//Array
var cars =['volvo', 'BMW' , 'Mercedes']

//objects
var person ={
    name:'Onur',
    age:24
}

//function

var isAlive = function() { //fonksiyonlar kısmı karmaşık gelebilir, en azından bu şekilde yazıldığını bil
    return 0;
}

//console.log(typeof cars);


/////
///////
//////////
////////////


//Operatörler
var sonuc;
const x=60;
const y=12;

//Aritmatik O.

sonuc = x + y;



//Atama O.
sonuc2 = x; //60 değeri sonuca aktarılır
sonuc2 += x;




//Karşılaştırma O.



//Mantıksal O.

//&& (VE)

//|| (veya) altgr+tire

// ! (Not Değil)

//d.setFullYear(1990);

//Date object
var d = new Date()

//console.log(d);

//get methods //Bu metot ile console.log'da yazan bilgileri alırız
//console.log(d.getFullYear()); //konsolda 2022 yazar.
//console.log(d.getMonth());



//set methpds// bu metot ile console.log'da yazan bilgileri değiştirirz.

//
///
///
/////STRING METOTLAR DETAYLI//////

const ad = 'Onur';
const soyad = 'Dogru';
var t = ad +' '+ soyad;

//t = ad.length;

t = soyad.toUpperCase();


t= t.substring(0,4);
//console.log(t)
////////////////////


/////

////////
///////////
//NUMBER METOTLARI;

var sayi = 10;
sayi = Math.PI;
sayi = Math.ceil(3.8); //yukarıya yuvarlayan metot
sayi=Math.min(32,54,6,76,77,86); //seri içindeki en küçük sayıyı getirir.
console.log(sayi)

///
/////
////////
//IF-ELSE METOTLARI
var name2 ='Onur';
var age2 = 32;
var drivingLicence = false;


if(name2 =='Onur')
{
console.log('Adım Onur')
}

if (drivingLicence==true)
{
    console.log('Araç kullanabilirisinz')
}
else 
{
console.log('Araç KULLANAMAZSIN')
}



age3 = 15

if(age3>18)
{
    console.log('Araç kullanabilirsiniz')
}
else
{
console.log('Küçüksünüz')
}


//switch-case

let category = 'coffee';

switch(category)
{
    case 'coffee':
        console.log('Sade Kahveniz Hazırlanıyor');
        break;

    case 'tea':
        console.log('Cayiniz Hazirlaniyor');
        break;

        default:
        console.log('Hatali Ürün Seçtiniz')
}

