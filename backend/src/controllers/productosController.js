const Producto = require('../models/Productos')


const newProducto = async (reqest, response) => {
    try {
        const producto = reqest.body
        const newProducto = await Producto.create(producto)

        return response.json({
            success: true,
            data: newProducto
        })
    } catch (error) {
        console.log(error);
        return response.json({
            success: false,
            message: error.message
        })
    }


}

const buscarProducto = async (reqest, response) => {
    const { id } = reqest.body

    if (!id) {
        return response.status(400).json({
            success: false,
            menssage: 'No se proporciono el Id'
        })
    }
    const producto = await Producto.findById(id)
    console.log(producto)
    response.json({
        success: true,
        menssage: "Producto encontrado con exito",
        data: producto
    })

}

const getProductos = async (reqest, response) => {
    const producto = await Producto.find()
    console.log(producto)
    response.json({
        success: true,
        data: producto
    })

}

const modificarProducto = async (request, response) => {
    const newValues = request.body;
    try {
        const updateProducto = await Producto.findByIdAndUpdate(request.params.id, newValues)
        return response.json({
            success: true,
            data: updateProducto,
            message: "Producto modificado con exito"
        })
    } catch (error) {
        console.log(error);
        return response.json({
            success: false,
            message: error.message
        })
    }
}

const eliminarProducto = async (reqest, response) => {
    try {
        const deleteProducto = await Producto.findByIdAndDelete(reqest.params.id)
        return response.json({
            success: true,
            data: deleteProducto,
            message: "Producto eliminado con exito"
        })
    } catch (error) {
        console.log(error);
        return response.json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    buscarProducto,
    newProducto,
    eliminarProducto,
    modificarProducto,
    getProductos
}