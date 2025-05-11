import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = (props) => {
    return (
        <div className='col-md-3'>
            <div className="card text-center" style={{width:'18rem'}}>
                <img src={props.item.images[0]} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.item.name}</h5>
                        <Link to={`/item/${props.item._id}`} className="btn btn-primary">View more</Link>
                    </div>
            </div>
        </div>
    )
}

export default ItemCard
