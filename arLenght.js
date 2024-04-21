// const arr =[12,23,34,45];
//         console.log(arr);

//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];
//             console.log(element);
//         }

// for loop
// const  array = ['Rana','Kama','Susan','Malan'];
// for (let i = 0; i < array.length; i++) {
//         const a1='';
        
//     const element = array[i];
//     console.log(element);
// }



// for in
// const ar=[1,2,3,4,5];
// console.log('for in');
// var t2='';
// for(var i in ar){
//         t2=t2+ar[i]+' ';
// }

// console.log(t2);



// for of
// const ar=[1,2,3,4,5];
// console.log('for of');
// var t2='';
// for(var i of ar){
//         console.log(i);
// }
// console.log(t2);


// for each
// const ar=[1,2,3,4,5];
// console.log('for each');
// var t2='';
// ar.forEach(function(value,index,ar){
//         t2+=value+' ';
// });
// console.log(t2);


// map
// const ar=[1,2,3,4,5];
// console.log('map');
// var t2='';
// ar.map(function(value,index,ar){
//         t2+=ar[index]+ ' ';
//         // console.log(value);
//         // console.log(index);
//         // console.log(ar);
// });
// console.log(t2);



// filter
const ar=[1,2,3,4,5];
console.log('filter');
var t2='';
ar.filter(function(value,index,ar){
        t2+=ar[index]+ ' ';
        // console.log(value);
        // console.log(index);
        // console.log(ar);
});
console.log(t2);
