

function a(){
  const petrenEl =document.getElementById("size").value;
  let the = ''; 

  for (let i = 1; i <= petrenEl; i++){
      let row ='';

  for (let a=1; a<=i; a++){
      row += '*';
      
  }
  the += row + '<br>';
  }
  document.getElementById("petrenE").innerHTML = the;
}