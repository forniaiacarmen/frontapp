<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Nombre de usuario:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>¿No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import BASE_URL from '../const/BaseUrl.js';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
            
          const response = await axios.post(BASE_URL+'auth/login', {
            username: this.username,
            password: this.password,
          });
          console.log(BASE_URL+'auth/login');  
          // Almacenar el token en localStorage
          localStorage.setItem('token', response.data.token);
          
          // Redirigir al Home (o a cualquier otra página)
          
          alert('¡Inicio de sesión exitoso!');
          this.$router.push('Main');


        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          alert('Hubo un error al iniciar sesión');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos del formulario de login */
  div {
    margin: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin: 3px 0;
  }
  
  input {
    padding: 8px;
    margin: 10px 0;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  