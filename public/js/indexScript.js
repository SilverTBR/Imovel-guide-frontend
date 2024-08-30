const hamburgerBtn = document.getElementById("hamburger-btn");
const tel1P = document.getElementById("tel1");
const tel2P = document.getElementById("tel2");
const navList = document.querySelector(".div-menu");
const cpfInput = document.getElementById("cpf")
const telInput = document.getElementById("tel")
const inputNum1 = document.getElementById("num1")
const inputNum2 = document.getElementById("num2")
const inputNum3 = document.getElementById("num3")


let mascCPF = IMask(cpfInput, { mask: '000.000.000-00'})
let mascTel = IMask(telInput, { mask: '(00) 00000-0000'})


hamburgerBtn.addEventListener("click", () => {
        navList.classList.toggle("active");
})

tel1P.addEventListener("click", () => {
        tel1P.innerHTML = "(11) 94772-8922";
        tel1P.style.cursor = "default";
})

tel2P.addEventListener("click", () => {
        tel2P.innerHTML = "(44) 98512-7522";
        tel2P.style.cursor = "default";
})

document.getElementById("sendMsgBtn").addEventListener("click", () => {
        alert("Mensagem enviada com sucesso");
})

document.getElementById("calcularBtn").addEventListener("click", () => {
        if(inputNum1.value !== '' && inputNum2.value !== '' && inputNum3.value !== ''){
                document.getElementById("res").value = (inputNum2.value * inputNum3.value) / inputNum1.value;   
        }else{
                alert("Preencha todos os campos")
        }
})

document.getElementById("modalBtn").addEventListener("click", () => {
        document.getElementById("modal").style.display = "flex"
})

document.getElementById("modalCloseBtn").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none"
})

document.getElementById("downloadBtn").addEventListener("click", () => {
        html2canvas(document.getElementById("retanguloCard")).then((canvas)=>{
                const base64image = canvas.toDataURL("image/png");
                var anchor = document.createElement('a');
                anchor.href = base64image;
                anchor.download = "imagem";
                anchor.click();
        })
})