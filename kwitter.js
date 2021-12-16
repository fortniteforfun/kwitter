function addUser(){
    username=document.getElementById("user_name").innerHTML;
localStorage.setItem("username",username);
window.location.replace("Kwitter_room.html")
}
