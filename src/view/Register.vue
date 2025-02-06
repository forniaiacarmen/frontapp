<template>
    <div>
      <h2>Registrarse</h2>
      <form @submit.prevent="register">
        <div>
          <label for="username">Nombre de usuario:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div>
          <label for="firstname">Nombre:</label>
          <input type="text" id="firstname" v-model="firstname" required />
        </div>
        <div>
          <label for="lastname">Apellido:</label>
          <input type="text" id="lastname" v-model="lastname" required />
        </div>
        <div>
          <label for="country">País:</label>
          <input type="text" id="country" v-model="country" required />
        </div>
        <div>
          <label for="confirmPassword">Confirmar contraseña:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { useRouter } from 'vue-router';

  export default {
    data() {
      return {
        username: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: "",
        country: "",
      };
    },
    methods: {
      async register() {
        // Validar que las contraseñas coinciden
        if (this.password !== this.confirmPassword) {
          alert("Las contraseñas no coinciden");
          return;
        }
  
        try {
          // Enviar los datos de registro al backend
          const response = await axios.post("http://192.168.1.136:8080/auth/register", {
            username: this.username,
            password: this.password,
            firstname: this.firstname,
            lastname: this.lastname,
            country: this.country,
          });
          alert("¡Registro exitoso! Token guardado.",response.data.token);


        // Guardar el token en localStorage
        localStorage.setItem("token", response.data.token);
        alert("¡Registro exitoso! Token guardado.");
  

        const router = useRouter();
        router.push("/login");  
        } catch (error) {
          console.error("Error al registrarse:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos aquí */
  </style>
  