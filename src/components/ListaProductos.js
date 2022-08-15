import { useEffect } from "react";
import { useState } from "react";

function ListaProductos(props) {
    const [productos, setProductos] = useState([])
    
    const cargarProductosDesdeApi = async () => {
        const request = await fetch("http://localhost:4000/api/products")
        const result = await request.json()

        setProductos([...result.products])
    }

    useEffect(() => {
        cargarProductosDesdeApi()
            .then()
            .catch(error => {
                console.log("error", error)
            })
    }, [])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Product List</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Description</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">foto</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((product) => {
                        return (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.weight}</td>
                                <td>{product.description}</td>
                                <td>{product.category_id}</td>
                                <td><img src={"http://localhost:4000/img/prodImg/" + product.image} height="60" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ListaProductos;