document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
       form.addEventListener('submit', (event) => {
        if (!validarFormulario()) {
            console.log('Error en el formulario.');
            event.preventDefault();
        } else {
            console.log('Formulario ok.');
 
        }});

const validarFormulario = () => {
    let campoValido = true;

    // Validar campo de nombre
    campoValido = validarCampo('nombre', 'El nombre es obligatorio') && campoValido;

    // Validar campo de apellido
    campoValido = validarCampo('apellido', 'El apellido es obligatorio') && campoValido;

    // Validar campo de email
    campoValido = validarCampoEmail('email', 'El correo electrónico no es válido') && campoValido;

    // Validar campo de contraseña
    campoValido= validarCampo('password', 'La contraseña es obligatoria') && campoValido;

    // Validar campo de fecha de nacimiento
    campoValido = validarCampo('fechaNacimiento', 'La fecha de nacimiento es obligatoria') && campoValido;

    // Validar campo de país
    campoValido = validarCampo('pais', 'El país es obligatorio') && campoValido;

    // Validar checkbox de términos y condiciones
    const terminos = document.getElementById('terminos').checked;
    if (!terminos) {
        campoValido = false;
        setErrorFor(document.getElementById('terminos'), 'Debes aceptar los términos y condiciones');
    } else {
        setSuccessFor(document.getElementById('terminos'));
    }
    return campoValido;};

const validarCampo = (campoId, mensajeError) => {
    const campo = document.getElementById(campoId);
    const valor = campo.value.trim();
    if (valor === '') {
        setErrorFor(campo, mensajeError);
        return false;
    } else {
        setSuccessFor(campo);
        return true;
    }};

const validarCampoEmail = (campoId, mensajeError) => {
    const campo = document.getElementById(campoId);
    const email = campo.value.trim();
    if (email === '') {
        setErrorFor(campo, 'El correo electrónico es obligatorio');
        return false;
    } else if (!esUnEmail(email)) {
        setErrorFor(campo, mensajeError);
        return false;
    } else {
        setSuccessFor(campo);
        return true;
    }};

const setErrorFor = (input, mensaje) => {
    const formControl = input.closest('div');
    const textoError = formControl.querySelector('.textoError');
    formControl.classList.add('error');
    textoError.innerText = mensaje;
    input.focus();
};

const setSuccessFor = (input) => {
    const formControl = input.closest('div');
    formControl.classList.remove('error');
    const textoError = formControl.querySelector('.textoError');
    textoError.innerText = '';
};

const esUnEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

 form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        const value = input.value.trim();
        if (value !== '') {
            setSuccessFor(input);
        }
    });
});
 form.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', () => {
        const value = select.value;
        if (value !== '') {
            setSuccessFor(select);
        }
    });
});

});
