
//Первое приложение 

let numberOfFilms;


function start() {  
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", " ");
   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", " ");
   }
}

start();
const personalMovieDB = {

   count:numberOfFilms,
   movies:{},
   actors:{},
   genres:[],
   privat:false
};


function detectPersonalLevel(){
   if ( personalMovieDB.count < 10 ){
      console.log('Просмотренно довольно мало фильмов');
   }else if ( personalMovieDB.count >= 10 && personalMovieDB.count <30 ){
      console.log('Вы классический зритель');
   }else if ( personalMovieDB.count >= 30 ){
      console.log('Вы киноман');
   }else{
      console.log('Произошла ошибка');
   } 
}
detectPersonalLevel();


function rememberMyFilms(){
   
   for ( let i = 0; i < 2; i++ ){
      const a = prompt('Один из последних просмотренных фильмов ?', ''),
            b = prompt('На сколько оцените его ?', '');

            if( a != '' &&  b != '' && a != null && b != null && a.length < 50 ){
               personalMovieDB.movies[a] = b;
               console.log("Done");
            }
            else{
               console.log("Error");
               i--;
            }
      }
}
rememberMyFilms();

function detectPrivate(hidden){

if(!hidden){
   console.log(personalMovieDB);
}
}
detectPrivate(personalMovieDB.privat);

function WriteYourGenres(){
   for(let i = 1; i <= 3; i++){

      let ansGen = prompt(`Ваш любимый жанр под номером ${i}`, '');
      personalMovieDB.genres[i-1] = ansGen;
   }
  }
WriteYourGenres();



/*
let num = 50;
(num == 50)? console.log("ok") : console.log("Error"); 

switch(num){

   case 100:
      console.log("Неверно");
      break;
   case 60:
      console.log("Неверно");
      break;
   case 51:
      console.log("В точку");
      break;
   default :
   console.log("Не в этот раз");
      break;

}
*/
/*
for( let i = 0; i <= 10; i++ ){
  if( i % 2 != 0 ){
     continue;
  }
  console.log(i);
}
*/
/*
// Function
for(let i = 0; i < 1; i++){
   let answ = prompt('Сколько вам лет ?', '');
   if( answ != null && answ != ''){
      function Age(answ) {
         if( answ >= 18 ){
            console.log("Совершеннолетний");
         }
         else{
            console.log("Несовершеннолетний");
         }
        }
        Age(answ);
   }
   else{
   i--;
   }   
}
// Стрелочная функция
const ShowM = () => {console.log("Hello world")};
ShowM();
*/

/*
// Methods Indexof(),slice(),substr(),math.round(Округление до ближайшего)
//parseInt(),parsefloat()
for( let i = 0; i < 1; i++ ){
   const que = prompt('Напишите название фильма : ','');
   const Movies  = [
       
      'Transformer',
      'Iron man',
      'Spider man',
      'Flesh',
      'Kingsman'
   ];
   
   let ans = Movies.lastIndexOf(que);
   if(ans != -1){
      alert('Фильм найден');
   }
   else{
      alert("Фильм не найден попробуйте ещё раз");
      i--;
   }
}

let ss = 'Название Фильма Я тебя люблю';
console.log(ss.slice(23));
*/


