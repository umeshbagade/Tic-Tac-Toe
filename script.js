
var oxo =[['A','A','A'],['A','A','A'],['A','A','A']];

value = 'O';
function check(but_id){

    curr = document.querySelector("#"+but_id);
    n = Number(but_id.slice(1,2));
    n--;
    var r = Math.floor(n/3);
    var c = n%3;

    

    if(oxo[r][c] ==='A')
    {
        if(value==='O') value = 'X';
        else value = 'O';
        curr.innerHTML = value;
        oxo[r][c] = value;
        
        Winner = 'A';
        if(oxo[r][1]===oxo[r][0] && oxo[r][1]==oxo[r][2]&& oxo[1][1]!='A')
            Winner = oxo[r][1];
        else if(oxo[0][c]===oxo[1][c] && oxo[1][c]===oxo[2][c] && oxo[1][1]!='A')
            Winner = oxo[0][c];
        else if(oxo[0][0]===oxo[1][1] && oxo[1][1]===oxo[2][2]&& oxo[1][1]!='A')
            Winner = oxo[1][1];
        else if(oxo[0][1]===oxo[1][1] && oxo[1][1] === oxo[2][0] && oxo[1][1]!='A')
            Winner = oxo[1][1];
    }
    
    if(Winner!='A')
    {
        heading = document.querySelector("#heading");
        heading.innerHTML = "Player "+Winner+" wins<span>&#127881;</span>";
        swal("Play Again")
        .then((value) => {
            location.reload();
        });
       
        
    }

}