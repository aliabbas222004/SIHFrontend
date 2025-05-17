import React, { useState } from 'react'

const Filter = () => {
    const [category,setCategory]=useState(null);
    const [price,setPrice]=useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(price+ " " + category)
        // onApply({ price, category });
    };

    return (
        <div className='py-3 px-3' style={{ width: '300px', border: '1px solid orange', borderRadius: '5px' }}>
            <form onSubmit={handleSubmit}>
                <h3 className='text-center'>Filter By :</h3>

                <h4 className='mt-3'>Price</h4>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
                    {['<500', '<1000', '<2000', '<10000', '10000+'].map(p => (
                        <li key={p}>
                            <input
                                type="radio"
                                name="price"
                                value={p}
                                checked={price === p}
                                onChange={() => setPrice(p)}
                            /> {p}
                        </li>
                    ))}
                </ul>

                <h4 className='mt-3'>Category</h4>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
                    {['Moulding', 'WPC louvers', 'Charcoal Louvers', 'Liners', 'Laminates'].map(c => (
                        <li key={c}>
                            <input
                                type="radio"
                                name="category"
                                value={c}
                                checked={category === c}
                                onChange={() => setCategory(c)}
                            /> {c}
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-3">
                    <button className='btn btn-warning' type='submit'>Apply</button>
                </div>
            </form>
        </div>
    )
}

export default Filter
