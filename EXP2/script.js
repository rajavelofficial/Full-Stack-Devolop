fetch("http://localhost:3000/1.json", { method:
"PUT", credentials: "include"})
   .then(res => res.json())
   .then(data => console.log(data))