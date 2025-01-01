let gen = document.getElementsByClassName("gen_but")[0];
let up_check = document.getElementById("UpperCase");
let lw_check = document.getElementById("LowerCase");
let num_check = document.getElementById("Numbers");
let spl_check = document.getElementById("Special");

let opt = document.getElementById("output");

let cpy_btn =document.getElementById("cpy_btn");


class password {
    constructor(up_check, lw_check, num_check, spl_check, len) {
        this.pass = "";
        this.req_pass = "";
        this.up_check = up_check;
        this.lw_check = lw_check;
        this.num_check = num_check;
        this.spl_check = spl_check;
        this.upcas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.lwcas = this.upcas.toLowerCase();
        this.num = "0123456789";
        this.spl = "!@#$%^&*(){}[]~";
        this.len = len;
    }
    generate_pass() {
        let i = 0;
        while (i < this.len) {

            if (this.up_check.checked == true) {
                this.pass += this.upcas[Math.floor(Math.random() * this.upcas.length)];
            }
            if (this.lw_check.checked == true) {
                this.pass += this.lwcas[Math.floor(Math.random() * this.lwcas.length)];

            }
            if (this.num_check.checked == true) {
                this.pass += this.num[Math.floor(Math.random() * this.num.length)];

            }
            if (this.spl_check.checked == true) {
                this.pass += this.spl[Math.floor(Math.random() * this.spl.length)];

            }
            i++;

        }
        this.req_pass = this.pass.substring(0,this.len);

        return this.req_pass;
    }
}
gen.addEventListener("click", (e) => {
    e.preventDefault();
    let len = parseInt(document.getElementById("len").value);
    if (len < 5) {
        opt.value = "Enter Atleast 5 password Length";
        return;
    }
    if (!up_check.checked && !lw_check.checked && !num_check.checked && !spl_check.checked) {
        opt.value = "Select at least one character type!";
        return;
    }
    let obj = new password(up_check, lw_check, num_check, spl_check, len);
    opt.value = obj.generate_pass();
    cpy_btn.style.display="block";
   
})

cpy_btn.addEventListener("click", (e)=>{
    navigator.clipboard.writeText(opt.value);
    if(navigator.clipboard.writeText(opt.value)){
        alert("Password Copied !");
    }
})
