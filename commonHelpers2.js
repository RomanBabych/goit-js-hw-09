import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e={email:"",message:""};const a=localStorage.getItem("feedback-form-state");a&&(e=JSON.parse(a),document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message);document.querySelector(".feedback-form").addEventListener("input",function(t){t.target.matches('input[name="email"]')?e.email=t.target.value.trim():t.target.matches('textarea[name="message"]')&&(e.message=t.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(e))});document.querySelector(".feedback-form").addEventListener("submit",function(t){t.preventDefault();const m=e.email,r=e.message;m===""||r===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},document.querySelector(".feedback-form").reset())});
//# sourceMappingURL=commonHelpers2.js.map