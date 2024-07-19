import React, { useState, useEffect, useRef } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
const Card = (props) => {

  let data = useCart()
  let dispatch = useDispatchCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOption = Object.keys(options);
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleAddToCard = async () => {
    let food =[]
    for (const item of data){
      if(item.id === props.foodItem._id){
        food=item;
        break;
      }
    }
    if(food !==[]){
      if(food.size === size){
        await dispatch({type:"UPDATE",id: props.foodItem._id,price: finalprice, qty:qty})
        return
      }
    
    else if (food.size !==size){

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalprice, qty: qty, size: size })
    return
    }
    //  console.log(data)
    return
  }
    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalprice, qty: qty, size: size })

   }
  let finalprice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])
  return (
    <div>
      <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className='container w-100'>
            <select className='m-2 h-100  bg-success rounded' onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1}>{i + 1}</option>
                )

              })}
            </select>
            <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOption.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}

            </select>
            <div className='d-inline h-100 fs-5'>
            ₹{finalprice}</div>

          </div>
          <hr>
          </hr>
          <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCard}>Add item to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Card