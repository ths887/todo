function validation(callback){
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");


    if((user.value.trim() ==="admin") &&(pass.value.trim()==="12345")){
        callback();

    }else{
        alert("incorrect entry");
    }

}
function todo(){
    console.log("alert");
    alert("valid login");
}
function call(){
    validation(callback);
}
function callback(){
    window.location.href = "main.html";
}



