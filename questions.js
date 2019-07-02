window.onload = function main() {

    let div_el = document.createElement("div");
        div_el.className = "box-questions";
    
    let p_el_quetion = document.createElement("p");
        p_el_quetion.className = "par-question";
    
    let p_el_anwser  = document.createElement("p");
        p_el_anwser.className = "par-anwser";
    
    let button_el_check = document.createElement("button");
        button_el_check.className = "btn-check";
    
    

    div_el.appendChild(p_el_quetion);
    div_el.appendChild(p_el_anwser);
    div_el.appendChild(button_el_check);


    var sec_cont = document.getElementById("container-questions");

    sec_cont.appendChild(div_el);
























}