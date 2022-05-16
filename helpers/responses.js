


const messages = (code) => {
    switch(code) {
        case 200:
            return "La consulta fue realizada con exito"
        case 201:
            return "El registro fue creado con exito"
        case 202:
            return "El registro fue actualizado correctamente"
        case 203:
            return "Registro eliminado correctamente"
        case 204:
            return "El registro no existe en la base de datos"
        case 400:
            return "El servidor no puede procesar la consulta"
        case 404:
            return "No se encontro ningun resultado"
        case 500:
            return "Ocurrio un problema con el servidor"
    }
}


const response = (code, data) => {
    const dataResponse = {
        message: messages(code),
        status: code,
        data: data
    }

    return dataResponse;
}
export default response;