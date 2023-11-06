const EMAIL_VALIDATIONS = {
    required: {
      value: true,
      message: "Este campo es obligatorio",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Ingresa un correo electrónico válido",
    },
  };
  
  const PASSWORD_VALIDATIONS = {
    required: {
      value: true,
      message: "Este campo es obligatorio",
    },
    maxLength: {
      value: 50,
      message: "Este campo acepta un máximo de 50 caracteres",
    },
    minLength: {
      value: 4,
      message: "Este campo acepta un mínimo de 4 caracteres",
    },
  };
  
  const FIRST_NAME_VALIDATIONS = {
    required: {
      value: true,
      message: "Este campo es obligatorio",
    },
    maxLength: {
      value: 50,
      message: "Este campo acepta un máximo de 50 caracteres",
    },
    minLength: {
      value: 2,
      message: "Este campo acepta un mínimo de 2 caracteres",
    },
  };
  
  const LAST_NAME_VALIDATIONS = {
    required: {
      value: true,
      message: "This field is required",
    },
    maxLength: {
      value: 50,
      message: "Este campo acepta un máximo de 50 caracteres",
    },
    minLength: {
      value: 2,
      message: "Este campo acepta un mínimo de 2 caracteres",
    },
  };
  
  export { FIRST_NAME_VALIDATIONS, LAST_NAME_VALIDATIONS, EMAIL_VALIDATIONS, PASSWORD_VALIDATIONS };
  