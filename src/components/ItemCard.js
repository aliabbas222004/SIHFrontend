import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = (props) => {
    return (
        <div className='col-md-3 mt-3'>
            <div className="card text-center" style={{ width: '100%', maxWidth: '18rem', margin: '0 auto' }}>
                <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                    <img
                        src={props.item.images[0]}
                        className="card-img-top"
                        alt="..."
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}</h5>
                    <Link to={`/item/${props.item._id}`} className="btn btn-primary">View more</Link>
                </div>
            </div>
        </div>

    )
}

export default ItemCard
