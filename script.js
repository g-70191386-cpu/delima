const API = "https://script.google.com/macros/s/AKfycbyQEwTEUWh6G9pwPebND87Bl9rKCXVgZg39GDNgTmPOqawD-Om7J3gQX1dJvQN8B5pJ/exec";

const btn = document.getElementById("btnSemak");

btn.addEventListener("click", semak);

async function semak(){

    const nama = document.getElementById("nama").value.trim();
    const ic4 = document.getElementById("ic4").value.trim();

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    result.style.display="none";
    error.style.display="none";

    if(nama==="" || ic4===""){

        error.style.display="block";
        error.innerHTML="Sila lengkapkan maklumat.";

        return;

    }

    loading.style.display="block";

    try{

        const response = await fetch(

            API+
            "?nama="+encodeURIComponent(nama)+
            "&ic4="+encodeURIComponent(ic4)

        );

        const data = await response.json();

        loading.style.display="none";

        if(data.success){

            document.getElementById("rNama").innerHTML=data.nama;
            document.getElementById("rKelas").innerHTML=data.kelas;
            document.getElementById("rID").innerHTML=data.id;
            document.getElementById("rPassword").innerHTML=data.password;

            result.style.display="block";

        }else{

            error.style.display="block";
            error.innerHTML=data.message;

        }

    }catch(e){

        loading.style.display="none";

        error.style.display="block";

        error.innerHTML="Tidak dapat berhubung dengan server.";

    }

}