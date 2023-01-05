window.addEventListener("load",function(){
    //selections 
    let studentTextBox = this.document.querySelector("#fname");
    let gradeTextBox = this.document.querySelector("#grade");
    let addButton = this.document.querySelector("input[value=Add]");
    let filter = this.document.querySelector("select[name=filter]");
    let table = this.document.querySelector("table");
   

    //.......................events
     addButton.onclick=function()
     {
        let departmentValue=document.querySelector("input[name=Department]:checked").value;
/////////////////////////creating Raw///////////////////////////////////       
        let trelm = document.createElement("tr");
        trelm.classList.add(departmentValue);
/////////////////////////Name///////////////////////////////////
        let tdelm = document.createElement("td");
        tdelm.classList.add("nameClass");
        if(nameValidation(toPascalCase(studentTextBox.value)))
        {
                tdelm.innerText=toPascalCase(studentTextBox.value);
        }
        else 
        {
                alert(" not valid name ");
                return ;
        }

        trelm.append(tdelm);
/////////////////////////Grade///////////////////////////////////
        tdelm = document.createElement("td");
        tdelm.classList.add("gradeClass");
        if(gradeValidation(gradeTextBox.value))
        {
                tdelm.innerText=gradeTextBox.value;
        }
        else 
        {
                alert(" not valid grade ");
                return ;
        }
        
        trelm.append(tdelm);
/////////////////////////Delete//////////////////////////////////
        tdelm = document.createElement("td");
       let delelteButton = document.createElement("button");
       delelteButton.innerText="Delete";
       delelteButton.onclick=function(){
        this.parentElement.parentElement.remove();
       }
       tdelm.append(delelteButton);
       trelm.append(tdelm);
/////////////////////////Adding raw in Table/////////////////////
       table.append(trelm);
      }//end of onclick add button 

////////////////////////event on keypress////////////////////////
      gradeTextBox.onkeypress = function(event)
      {
        console.log(event.key);
        if ( isNaN(event.key))
        {
                event.preventDefault();
        }
      }
///////////////////////onselectevent/////////////////////////////
filter.onchange=function(event){
console.log(this.value);
filter_grades(this.value);
}
});//load

///////////////////////Name validation //////////////////////////
const nameValidation = function (textvalue)
{
 let returnValue = 1 ;
 let table_names = this.document.querySelectorAll(".nameClass");       

for ( let i = 0 ; i < table_names.length ; i ++)
{
       
 if (  textvalue == table_names[i].innerText)
 {
        console.log(textvalue);
        console.log(table_names[i].innerText);
        returnValue = 0 ;
 }

}
if ( textvalue =="")
{
        returnValue = 0;
}

console.log(returnValue);
        return returnValue ;

}

//////////////////Grade validation//////////////////////
const gradeValidation = function (gradevalue)
{
        let returnValue = 1 ;
if ( gradevalue == "")
{
        returnValue = 0;
}
else if ( Number(gradevalue) > 100 || Number(gradevalue) < 0 )
{
        returnValue = 0;
}
        console.log(returnValue);
        return returnValue ;

}

//////////////////Filter //////////////////////////////
const filter_grades = function (value){
let table_grades = this.document.querySelectorAll(".gradeClass");
/////////////////succeed//////////////////////////////////
if (value == "1")
{
table_grades.forEach(element => { 
        element.parentElement.classList.remove("hidden");
        element.parentElement.classList.add("shown");                 
        if (Number(element.innerText) > 50)
        {
        element.parentElement.classList.remove("hidden");
        element.parentElement.classList.add("shown");
        } 
        else
        {
        element.parentElement.classList.add("hidden");
        element.parentElement.classList.remove("shown");
        }
}); 

}
///////////////////failed code//////////////////////////////
else if (value == "2")
{
table_grades.forEach(element => {                  
        if (Number(element.innerText) < 50)
        {
        element.parentElement.classList.remove("hidden");
        element.parentElement.classList.add("shown");
        } 
        else
        {
        element.parentElement.classList.add("hidden");
        element.parentElement.classList.remove("shown");

        }
}); 

}
/////////////////All//////////////////////////////////////////
else{
        table_grades.forEach(element => {
              element.parentElement.classList.remove("hidden");
              element.parentElement.classList.add("shown");                 
        });   
}
}
//////////////pascal function //////////////////////////
const toPascalCase = str => 
{
    const array = str.split(" ");
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
    } 
    return array.join(" ");
}