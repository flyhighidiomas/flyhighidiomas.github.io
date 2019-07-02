window.onload = function main() {

    var question = document.createTextNode("Quem é Jesus?");
    var anwser = document.createTextNode("Jesus é o Filho de Deus");



    let div_el = document.createElement("div");
        div_el.className = "box-questions";
    
    let p_el_quetion = document.createElement("p");
        p_el_quetion.className = "par-question";
        p_el_quetion.appendChild(question);
    
    let input_text = document.createElement("input");
        input_text.type = "text";
        input_text.className = "input-text";
        
    
    let p_el_anwser  = document.createElement("p");
        p_el_anwser.className = "par-anwser";
        p_el_anwser.appendChild(anwser);
    
    let button_el_check = document.createElement("button");
        button_el_check.className = "btn-check";
        button_el_check.innerText = "Check your anwser";
    
    

    div_el.appendChild(p_el_quetion);
    div_el.appendChild(input_text);
    div_el.appendChild(p_el_anwser);
    div_el.appendChild(button_el_check);


    var sec_cont = document.getElementById("container-questions");

    sec_cont.appendChild(div_el);
























}