function celciusToFran( num)
{
    return (num*1.8)+32;
}
document.getElementById("test").innerHTML = celciusToFran (30);


// c/100 = (f-32)/180
// f = (c*1.8)+32;