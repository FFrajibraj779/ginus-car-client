import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const OrderDetails = ({ orderInfo, handleDelete, handleUpdate }) => {
    const { _id, price, customer, service, serviceName, phone, email, status } = orderInfo;
    const [orderService, setOrderService] = useState([])

    useEffect(() => {
        fetch(` https://car-servar-side.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrderService(data)
            })
    }, [service])



    return (


        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">

                            {orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS }Component" />


                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>
                price: ${price}
            </td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : "pending"}</button>
            </th>
        </tr>


    );
};

export default OrderDetails;