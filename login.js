function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="admin")
    {
        alert("Goods login mo hehe")
        return false;
    }
    else{
        alert("Not goods login mo");
    }

}