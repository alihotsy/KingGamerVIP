<template>
    <div class="background">
        <form action="" class="form" id="form">
            <!--Inputs-->
            <div class="grid">
                <div class="grid__campo">
                    <label for="" class="grid__campo-label">Nombre</label>
                    <input type="text" placeholder="Juanito" class="grid__campo-input" id="name" autocomplete="off">
                    <i class="icon fas fa-edit"></i>
                </div>
                <div class="grid__campo">
                    <label for="" class="grid__campo-label">Usuario</label>
                    <input type="text" placeholder="Juanito247" class="grid__campo-input" id="user" autocomplete="off">
                    <i class="icon fas fa-user"></i>
                </div>
                <div class="grid__campo">
                    <label for="" class="grid__campo-label">Apellido</label>
                    <input type="text" placeholder="Alvarado Gómez" class="grid__campo-input" id="apellido" autocomplete="off">
                    <i class="icon fas fa-edit"></i>
                </div>
                <div class="grid__campo">
                    <label for="" class="grid__campo-label">Contraseña</label>
                    <input type="password" class="grid__campo-input" id="password" autocomplete="off">
                    <i class="icon fas fa-lock"></i>
                </div>
                <div class="grid__campo">
                    <label for="" class="grid__campo-label">Correo Electrónico</label>
                    <input type="email" placeholder="example@gmail.com" class="grid__campo-input" id="email" autocomplete="off">
                    <i class="icon fas fa-envelope"></i>
                </div>
                <div class="grid__campo">
                    <label for="" class="grid__campo-label">Confirmar Contraseña</label>
                    <input type="password" placeholder="" class="grid__campo-input" id="confirmPass" autocomplete="off">
                    <i class="icon fas fa-lock"></i>
                </div>
            </div>
            <!--Inputs-->
            <!--Botón y checkbox-->
            <div class="container">
                 <div class="elements">
                    <input type="checkbox" class="elements__check" id="elements__check">
                    <label for="elements__check" class="elements__text">Acepto términos y condiciones</label>
                 </div>
                 <input type="submit" class="button" id="button" value="Aceptar">
            </div>
            <!--Botón y checkbox-->
        </form>
        <!--Botón de regresar al inicio-->
        <a href="" class="volver"><i class="icon_back fas fa-chevron-left"></i>Volver</a>
    </div>
</template>
<script>
export default {
    name:'Registro'
}
</script>
<style lang="">
    
</style>