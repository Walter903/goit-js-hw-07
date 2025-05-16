     const form = document.querySelector('.login-form');

     form.addEventListener('submit', handleSubmit);

     function handleSubmit(event) {
      event.preventDefault(); 
      
      const { email, password } = event.currentTarget.elements;
      const trimmedEmail = email.value.trim();
      const trimmedPassword = password.value.trim();

      
      if (!trimmedEmail || !trimmedPassword) {
        alert('All form fields must be filled in');
        return;
      }

      const formData = {
        email: trimmedEmail,
        password: trimmedPassword,
      };
      
      console.log(formData);

      event.currentTarget.reset();
    }
 
