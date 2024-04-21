var num=document.getElementById('txt-num');
var btnAdd=document.getElementById('btn-add');
var btnView=document.getElementById('btn-view');
var btnUpdate=document.getElementById('btn-update');
var btnReset=document.getElementById('btn-reset');

const arrnum=[];
btnAdd.addEventListener('click',function(){
arrnum.push(num.value);
num.value='';
})
btnView.addEventListener('click',function(){
   var txt=`
   <table  class="table table-hover table-dark text-center">
                <tr id="">
                    <th>Index</th>
                    <th>Value</th>
                </tr>
   ` ;

   arrnum.forEach(function(value,index,array){
    txt+=`
                <tr>
                    <td>${index}</td>
                    <td>${value}</td>
                </tr>
    `;
   })
   document.getElementById('demo').innerHTML=txt+ '</table>';       

})
btnUpdate.addEventListener('click',function(){
    var check=arrnum.findIndex((val)=> val==num.value);
    if(check!=-1){
        arrnum[check]=Number(prompt('Enter New number: '));
    }
    else{
        alert('value not found');
    }
})
btnReset.addEventListener('click',function(){
    var check=arrnum.findIndex((val)=> val==num.value);
    if(check!=-1){
        arrnum.splice(check,1);
    }
    else{
        alert('value not found');
    }
})

