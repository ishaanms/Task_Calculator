let screen=document.getElementById('screen');
let screenval=''
let firstnum=[];
const secondnum=[];
const operator=[];
const compute=[];
//check size of number
//print history

function dis(val){
    if (val === '+'){
        if (screenval===''){
            operator.pop();
            operator.push(val);
        }
        else{
            firstnum.push(screenval);
            operator.push(val);
            screenval='';
        }
        
    }
    else if (val === '-'){
        if (screenval===''){
            operator.pop();
            operator.push(val);
        }
        else{
            firstnum.push(screenval);
            operator.push(val);
            screenval='';
        }
    }
    else if (val === 'x'){
        if (screenval===''){
            operator.pop();
            operator.push(val);
        }
        else{
            firstnum.push(screenval);
            operator.push(val);
            screenval='';
        }
    }
    else if (val === '/'){
        if (screenval===''){
            operator.pop();
            operator.push(val);
        }
        else{
            firstnum.push(screenval);
            operator.push(val);
            screenval='';
        }
        
    }
    else{
        if (screenval.length > 8){
            alert("VERY LARGE NUMBER!! CALCULATION LIMIT EXCEEDED");
        }
        else{
            screenval+=val;
        }
        
    }
    screen.value=screenval;
    // console.log(val);
    // console.log(firstnum);
    // console.log(operator);
}
function calc(valu){
    let anss=0.0000;
    if (valu === '%'){
        if (screenval===''){
            operator.pop();
        }
        else{
            firstnum.push(screenval);
        }
        operator.push('%')
        secondnum.push('100');
        anss=parseFloat(firstnum[firstnum.length-1])/100;
        anss=anss.toFixed(6);
        compute.push(anss.toString());
        screen.value=anss;
        screenval=anss.toString();
        anss=0.0000;
    }
    else if (valu === '='){
        secondnum.push(screenval);
        if (operator[operator.length-1] === '+'){
            anss=parseFloat(firstnum[firstnum.length-1])+parseFloat(secondnum[secondnum.length-1]);
        }
        else if (operator[operator.length-1] === '-'){
            anss=parseFloat(firstnum[firstnum.length-1])-parseFloat(secondnum[secondnum.length-1]);   
        }
        else if (operator[operator.length-1] === 'x'){
            anss=parseFloat(firstnum[firstnum.length-1])*parseFloat(secondnum[secondnum.length-1]);   
        }
        else if (operator[operator.length-1] === '/'){
            anss=parseFloat(firstnum[firstnum.length-1])/parseFloat(secondnum[secondnum.length-1]);
            anss=anss.toFixed(4);   
        }
        if (anss > 999999999){
            alert("TOO LARGE TO COMPUTE !!! SORRY");
            screen.value='VERY LARGE VALUE!!';
            compute.push('TOO LARGE TO COMPUTE');
        }
        else{
            compute.push(anss.toString());
            screen.value=anss;
            screenval=anss.toString();
            anss=0.0000;
        }
        
    }
}
function bks(){
    screenval=screenval.substr(0,screenval.length-1);
    screen.value=screenval;
}
function clr(){
    screenval='';
    screen.value=screenval;
}
function hist(){
    let temp=1;
    let calchist=document.getElementById("rightclas");
    calchist.innerHTML='';
    calchist.innerHTML='<p>Past calculations<p><br><br>';
    for(let i=firstnum.length-1;i>=0;i--){
        if (temp>10){
            break;
        }
        else{
            calchist.innerHTML+=`<p>${firstnum[i]} ${operator[i]} ${secondnum[i]} = ${compute[i]}</p><br>`;
        }
        temp++;
    }
    if (firstnum.length>10){
        let rem=firstnum.length-10;
        for(let j=0;j<rem;j++){
            firstnum.shift();
            secondnum.shift();
            operator.shift();
        }
    }
}
console.log(firstnum);
console.log(operator);
console.log(secondnum);
