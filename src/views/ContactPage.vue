<template>
  <div class="contact-page">
    <div class="contact">
      <h1>Reach Out to Me</h1>
      <p>
        Have a question or a project proposal? I’m here to help. Fill out the form below, and I’ll get back to you as soon as possible.
      </p>
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
      <Toast v-if="toast.visible" :message="toast.message" :type="toast.type" />
    </div>

    <div class="contact-info">
      <h1>Contact Information</h1>
      <p>
        For any inquiries or collaboration opportunities, you can reach out to me through the following channels:
      </p>
      <div>
        <h5>Email</h5>
        <p>hemingkwabena@gmail.com</p>
      </div>
      <div>
        <h5>Address</h5>
        <p>Accra, Ghana</p>
      </div>
      <p>Connect with me on my social profile:</p>
      <div class="social-media">
        <a href="https://github.com/Aboagye-Heming" target="_blank">
          <img src="../assets//images/github.png" alt="Github" class="social-icon" />
        </a>
        <a href="www.linkedin.com/in/kwaheming" target="_blank">
          <img src="../assets/images/linkedin.png" alt="LinkedIn" class="social-icon" />
        </a>
        <a href="https://x.com/kwabena_heming" target="_blank">
          <img src="../assets/images/xlogo.png" alt="X" class="social-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import Toast from "@/components/ToastLoader.vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const toast = ref({
  visible: false,
  message: "",
  type: "success",
});

const submitForm = () => {
  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_APP_EMAILJS_USER_ID;

  const templateParams = {
    name: formData.value.name,
    email: formData.value.email,
    message: formData.value.message,
  };

  emailjs.send(serviceId, templateId, templateParams, userId).then(
    () => {
      showToast("Your message has been sent successfully!", "success");
      resetFormData();
    },
    (error) => {
      showToast("Failed to send message. Please try again later.", "error");
      console.log("FAILED...", error);
    }
  );
};

const showToast = (message, type) => {
  toast.value.message = message;
  toast.value.type = type;
  toast.value.visible = true;
  setTimeout(() => {
    toast.value.visible = false;
  }, 3000);
};

const resetFormData = () => {
  formData.value = {
    name: "",
    email: "",
    message: "",
  };
};
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
}

.contact,
.contact-info {
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  flex: 1;
}

.contact h1,
.contact-info h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
}

.contact p,
.contact-info p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 5px;
  text-align: left;
  color: white;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #ff4500;
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

.contact-info h5 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: white;
}

.social-media {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-icon {
  width: 32px;
  height: 32px;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 600px) {
  .contact-page {
    flex-direction: column;
  }

  .contact,
  .contact-info {
    padding: 20px;
  }

  .contact h1,
  .contact-info h1 {
    font-size: 2rem;
  }

  .contact p,
  .contact-info p {
    font-size: 1rem;
  }
}
</style>
