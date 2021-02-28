var keylist ="abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"
var temp = ''
function generatepass(plength){
    temp =''
    for(i =0; i< plength; i++)
    {
        if(plength <4)
        {
            temp = "Enter the lenght more than 4!"
        }
        else
        temp += keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return temp
}
function populateform(enterlength){
    document.passGen.output.value = generatepass(enterlength)
}