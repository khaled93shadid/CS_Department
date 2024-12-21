alert ('welcome to computer science page');
var num1 =10;
function facilitymembers () 
{

    alert ('table of the facilitymembers in computer science department ');
    return 
}
function project() 
{

    alert ('table of students projects in computer science department ');
    return 
}
function students() 
{

    alert ('best students ');
    return 
}
function instructors() 
{

    alert ('best instructors ');
    return 
}
function aboutus() 
{

    alert ('brief information aboout computer science department ');
    return 
}
function contactus() 
{

    alert ('our department contact information ');
    return 
}

var body1= document.getElementById('body1');
var goldenedtion = document.getElementById('goldenedtion');
function gold () 
{
    if (body1.style.backgroundColor=='black'){
    body1.style.backgroundColor='goldenrod';
    goldenedtion.innerHTML='black edition';
    goldenedtion.style.color='black';
    goldenedtion.style.borderColor='black';
    localStorage.setItem('goldenedtion','goldenrod');
}
    else
    {body1.style.backgroundColor='black';
        goldenedtion.innerHTML='gold edtion';
        goldenedtion.style.color='gold';
        goldenedtion.style.borderColor='gold';
        localStorage.setItem('goldenedtion','black');
       
    return
    }

}
var pagecolor = localStorage.getItem('goldenedtion','');
function loadcolor ()
{
    body1.style.backgroundColor=pagecolor;
    return
}
loadcolor();
goldenedtion.innerHTML="change color";

var input1 = document.getElementById('input1').nodeValue ;
var input2 = document.getElementById('input2').nodeValue;
function input() 
{
    if(input1=='kh'){
        input2.innerHTML=`<a href="project.html"> </a>`;

    }
    return
}
input();