import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemInfo from './ItemInfo';

const Item = () => {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();
  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/item/getItem/${itemId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    getItem();
  }, [itemId]); 

  return (
    <div>
        {item ? (
        <div>
          <ItemInfo item={item}/>
        </div>
      ) : (
        <p>No such item exists</p>
      )}
    </div>
  )
}

export default Item
