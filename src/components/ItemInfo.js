import ImageCarousel from './ImageCarousel';
import AllItems from './AllItems';
import { QRCodeCanvas } from 'qrcode.react'
const ItemInfo = (props) => {
    const { item } = props;


    return (
        <div className="container mt-3" style={{ paddingTop: '20px' }}>
            <div className="row justify-content-center align-items-center flow-left">
                <div className="col-12 col-md-auto text-center">
                    <ImageCarousel images={item.images} />
                </div>
                <div className="col-12 col-md-auto text-center">
                    <h1>
                        {item.name}
                    </h1>
                </div>
            </div>

            <div
                className="row mt-3 flow-left"
                style={{ paddingTop: '20px' }}
            >
                <div className="col-md-6 text-center">
                    <h2><strong>Details</strong></h2> <br />
                    {item.description}
                </div>
                <div className="col-md-6 text-center">
                    <div className="table-responsive" style={{ maxWidth: '100%' }}>
                        <table className="table table-striped mx-auto strip-row" style={{width:'80%'}}>
                            <tbody>
                                <tr>
                                    <th className="p-3">Price</th>
                                    <td className="p-3">{item.price}</td>
                                </tr>
                                <tr>
                                    <th className="p-3">Width</th>
                                    <td className="p-3">{item.dimensions.width}</td>
                                </tr>
                                <tr>
                                    <th className="p-3">Height</th>
                                    <td className="p-3">{item.dimensions.height}</td>
                                </tr>
                                <tr>
                                    <th className="p-3">Thickness</th>
                                    <td className="p-3">{item.dimensions.thickness}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>Send Inquiry on whatsapp</h2>
                        <a className='btn' href={`https://wa.me/7048897540?text=I'm%20interested%20in%20this%20product.%20%0AName%20:%20${item.name}%0AId%20:%20${item.id}`} target="_blank" rel="noreferrer">
                            <img
                                src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                                alt="Whatsapp"
                                style={{ width: '40px' }}
                            />
                        </a>
                    </div>
                </div>
            </div>

            {item.qrcodeLink == null ?
                <>

                </> : <>
                    <h4>
                        Scan the below QR Code or <a href={`${item.qrcodeLink}`} target="_blank" rel="noopener noreferrer">
                            Click here
                        </a> to see a 3D view of the product
                    </h4>
                    <QRCodeCanvas value={item.qrcodeLink} size={256} />
                </>}

            <h1 className='text-center mt-5'>Related products</h1>
            <div className="row">
                <AllItems type={`${item.category}`} itemId={`${item.id}`} />
            </div>

        </div>
    );
};

export default ItemInfo;
