<template>
  <div v-if="!isRegistered" class="form-container">
    <h2 class="form-title">ESTÁS DENTRO DEL PROTEGIDO</h2>
    <form @submit.prevent="saludar" class="form">
      <div class="form-group">
        <button type="submit" class="form-btn">FICHAR ENTRADA / SALIDA</button>
      </div>

      <div class="form-group">
        <button type="submit" class="form-btn">DESCANSO</button>
      </div>

      <div class="form-group">
        <button type="submit" class="form-btn">SOLICITAR VACACIONES</button>
      </div>

      <div class="form-group">
        <button type="submit" class="form-btn">VER VACACIONES</button>
      </div>

      <div class="form-group">
        <button type="button" @click="volver" class="form-btn">VOLVER</button>
      </div>
    </form>

    <!-- Aquí mostramos la información decodificada del token -->
    <div v-if="userInfo">
      <h3>Información del Usuario:</h3>
      <p><strong>DNI:</strong> {{ userInfo.sub}} </p>
      <p><strong>Rol:</strong> {{ userInfo.role }}</p>
    </div>
  </div>
</template>

<script>
// Cambia de jwt_decode a jwtDecode
import { jwtDecode } from 'jwt-decode'; 

export default {
  data() {
    return {
      userInfo: null, 
    };
  },
  mounted() {
    // Obtener el token de localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      const decoded = jwtDecode(token);    
      this.userInfo = decoded;
    }
  },
  methods: {
    saludar() {
      alert("¡Hola!");
    },
    volver() {
      this.$router.push('/'); // Redirige a la página principal
    }
  }
}
</script>

<style scoped>
/* Estilos del contenedor y formulario */
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

/* Estilos de los botones dentro del formulario */
.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-btn {
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.form-btn:hover {
  background-color: #45a049;
}

/* Responsive */
@media (max-width: 768px) {
  .form-container {
    padding: 15px;
    margin-top: 10px;
  }

  .form-title {
    font-size: 20px;
  }

  .form-btn {
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

  .form-btn {
    font-size: 12px;
  }
}
</style>
