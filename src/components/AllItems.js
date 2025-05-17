import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import '../AllItems.css';

const AllItems = (props) => {
    const [items, setItems] = useState([]);
    const currItem = props.itemId ? props.itemId : null;

    const getAllItems = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/item/getAllItems/${props.type}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const items = await res.json();
            const allItems = items.filter(item => item.id !== currItem);
            setItems(allItems);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    useEffect(() => {
        getAllItems();
        // eslint-disable-next-line
    }, [props.type, props.itemId]); 

    return (
        <div className="container py-5">
            <div className='row justify-content-center'>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <ItemCard key={item._id || index} item={item} />
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    );
};

export default AllItems;
