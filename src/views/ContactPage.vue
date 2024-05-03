<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <p>Have a question or want to work together? Feel free to get in touch!</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          placeholder="Your Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          placeholder="Your Email"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          rows="5"
          v-model="formData.message"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  // Here you can implement the logic to send the form data (e.g., using Axios)
  console.log("Form submitted:", formData.value);
  // Reset the form after submission
  formData.value = {
    name: "",
    email: "",
    message: "",
  };
};
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.contact h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.contact p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 5px;
  text-align: left;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group textarea {
  resize: vertical;
}

button {
  background-color: #ff4500;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e64000;
}

@media screen and (max-width: 600px) {
  .contact {
    padding: 20px;
  }
  .contact h1 {
    font-size: 2rem;
  }
  .contact p {
    font-size: 1rem;
  }
}
</style>
