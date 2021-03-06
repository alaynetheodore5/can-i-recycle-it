import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Home = props => {
    
    const [items, setItems] = useState([]);

    const fetchItems = () => {
        axios.get("http://localhost:8000/api/item")
            .then(res => {
                console.log(res);
                setItems(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect( () => {
        fetchItems();
    }, []);

    return (
        <div>
            <Link className="btn btn-warning float-right btn-lg mb-2" to="/new">add a pet to the shelter!</Link>
            <table className="table col-sm-6 offset-sm-2">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th className="text-center"scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
            {items.map( (r, i) => 
                <tr key={r._id}>
                    <td>{r.name}</td>
                    <td>{r.isRecyclable}</td>
                </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home;