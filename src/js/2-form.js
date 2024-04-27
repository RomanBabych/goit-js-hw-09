let formData = {
    email: "",
    message: ""
  };
  
  
  const storedFormData = localStorage.getItem("feedback-form-state");
  if (storedFormData) {
    formData = JSON.parse(storedFormData);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
  
  document.querySelector('.feedback-form').addEventListener('input', function(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  });
  
  document.querySelector('.feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
      alert("Fill please all fields");
    } else {
      console.log(formData);
      localStorage.removeItem("feedback-form-state");
      formData = { email: "", message: "" };
      document.querySelector('.feedback-form').reset();
    }
  });