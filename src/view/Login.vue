<template>
  <div class="login-container">
    <h2 class="form-title">Iniciar sesión</h2>
    <form @submit.prevent="login" class="form">
      <div class="form-group">
        <label for="username">DNI:</label>
        <input type="text" id="username" v-model="dni" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="submit-btn">Iniciar sesión</button>
    </form>
    <p class="register-link">¿No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';
import BASE_URL from '../const/BaseUrl.js';

export default {
  data() {
    return {
      dni: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(BASE_URL + 'auth/login', {
          dni: this.dni.trim().toUpperCase(),
          password: this.password.trim().toUpperCase(),
        });

        if (response && response.data && response.data.token) {
          // Usar Vuex para guardar el token
          this.$store.dispatch('saveToken', response.data.token);
          alert('¡Inicio de sesión exitoso!');
          this.$router.push("/main");
        } else {
          throw new Error('No se recibió un token');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        if (error.response) {
          console.error('Error en la respuesta:', error.response.data);
          alert('Error en la respuesta de la API');
        } else if (error.request) {
          console.error('No se recibió respuesta:', error.request);
          alert('No se recibió respuesta del servidor');
        } else {
          console.error('Error general:', error.message);
          alert('Hubo un error al intentar iniciar sesión');
        }
      }
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Título */
.form-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

/* Estilo general del formulario */
.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-size: 14px;
  color: #555;
}

.form-group input {
  width: 90%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.submit-btn {
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #45a049;
}

.register-link {
  text-align: center;
  margin-top: 20px;
}

.register-link a {
  color: #4CAF50;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}

/* Media Queries para hacerlo responsive */
@media (max-width: 768px) {
  .login-container {
    padding: 15px;
    margin-top: 10px;
  }

  .form-title {
    font-size: 20px;
  }

  .form-group input {
    font-size: 14px;
  }

  .submit-btn {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .login-container {
    width: 90%;
    margin-top: 5px;
  }

  .form-title {
    font-size: 18px;
  }

  .form-group input {
    font-size: 12px;
  }

  .submit-btn {
    font-size: 12px;
  }
}
</style>
