document.addEventListener("DOMContentLoaded",()=>{
    const $bgBtn = document.getElementById("cambiar-bg");
    const $body = document.getElementById("body");

    $bgBtn.addEventListener("click",()=>{
        $body.style.background="lightblue";
    });

});