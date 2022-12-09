import axios from 'axios'
export const url_path = import.meta.env.VITE_HOST;


// Creando una instancia para el endpoint - dicho endpoint esta guardado en la variable de entorno
export const ApiBase = axios.create({
    baseURL: url_path
}) 
