<template>
  <div v-if="!isRegistered" class="form-container">
    <h2 class="form-title">Registrarse</h2>
    <form @submit.prevent="register" class="form">
      <div class="form-group">
        <label for="dni">DNI:</label>
        <input type="text" id="dni" v-model="dni" required />
      </div>

      <div class="form-group">
        <label for="firstname">Nombre:</label>
        <input type="text" id="firstname" v-model="firstname" required />
      </div>
      <div class="form-group">
        <label for="lastname">Apellido:</label>
        <input type="text" id="lastname" v-model="lastname" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmar contraseña:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <div class="form-group">
        <label for="role">Rol:</label>
        <select v-model="role" id="role" required>
          <option value="ADMIN">Administrador</option>
          <option value="USER">Usuario</option>
        </select>
      </div>
      <button type="submit" class="submit-btn">Registrarse</button>
    </form>
    <p class="login-link">¿Ya tienes cuenta? <router-link to="/">Inicia sesión aquí</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
import BASE_URL from '../const/BaseUrl.js';

export default {
  data() {
    return {
      dni: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      role: "USER",
      isRegistered: false,
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      try {
        const response = await axios.post(BASE_URL+"auth/register", {
          dni: this.dni.trim().toUpperCase(),
          password: this.password.trim().toUpperCase() ,
          firstname: this.firstname.trim().toUpperCase() ,
          lastname: this.lastname.trim().toUpperCase() ,
          role: this.role,
        });

        alert("¡Registro exitoso! Token guardado.");
        localStorage.setItem("token", response.data.token);
        this.isRegistered = true;
        this.$router.push("/main");
      } catch (error) {
        console.error("Error al registrarse:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Contenedor general */
.form-container {
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

.form-group input,
.form-group select {
  width: 100%;
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

.login-link {
  text-align: center;
  margin-top: 20px;
}

.login-link a {
  color: #4CAF50;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

/* Media Queries para hacer el formulario responsive */
@media (max-width: 768px) {
  .form-container {
    padding: 15px;
    margin-top: 10px;
  }

  .form-title {
    font-size: 20px;
  }

  .form-group input,
  .form-group select {
    font-size: 14px;
  }

  .submit-btn {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .form-container {
    width: 90%;
    margin-top: 5px;
  }

  .form-title {
    font-size: 18px;
  }

  .form-group input,
  .form-group select {
    font-size: 12px;
  }

  .submit-btn {
    font-size: 12px;
  }
}
</style>
