import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import {APIs} from "../const/api";
import {useEffect, useState} from "react";

export const WelcomePage = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        await axios.get(APIs.STORE.PRODUCTS.GET_ALL).then(res => {
            setProducts(res.data)
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <div className="row">
                {
                    products.map(product => {
                        return <Card className={"col-sm-12 col-md-6 col-lg-4 col-xl-4"} style={{width: '18rem'}}>
                            <Card.Img variant="top"
                                      src={product.image}/>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary">Explore More</Button>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>

        </>
    );
}

