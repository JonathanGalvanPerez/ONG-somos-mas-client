export const API_BASE_URL = "localhost:3001";

// Parámetros de validación de form autenticación
export const AUTH_FORM_VALIDATIONS = {
  MIN_PASSWORD_LENGTH: 6, // Longitud minima de input password
  EMAIL_REGEX: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Expresión regular que debe cumplir el input email
}