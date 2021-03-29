{/* <script> */}
    function getBooks1(){
        document.getElementById('output1').innerHTML="";
        fetch("https://openlibrary.org/search.json?q="+document.getElementById("input1").value)
        .then(a =>a.json())
        .then(response=>{
            for(var i=0; i<3; i++){
                document.getElementById("output1").innerHTML+="<h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name+"<br><img src='https://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><br>";  }
        });
    }
    function getBooks2(){
        document.getElementById('output2').innerHTML="";
        fetch("https://openlibrary.org/search.json?q="+document.getElementById("input2").value)
        .then(a =>a.json())
        .then(response=>{
            for(var i=0; i<3; i++){
                document.getElementById("output2").innerHTML+="<h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name+"<br><img src='https://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><br>";  }
        });
    }
// </script>
