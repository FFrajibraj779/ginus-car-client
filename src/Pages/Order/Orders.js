import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';
import OrderDetails from './OrderDetails';

const Orders = () => {
    const { user, logOut } = useContext(UserContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(` https://car-servar-side.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();

                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setOrder(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const agreed = window.confirm('are you sure delete')
        if (agreed) {

            fetch(` https://car-servar-side.vercel.app/orders/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = order.filter(odr => odr._id !== id)
                        setOrder(remaining)
                        alert('delete succesfully')
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const handleUpdate = id => {
        fetch(` https://car-servar-side.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
              
            },
            body: JSON.stringify({ status: 'Approved' })

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = order.filter(odr => odr._id !== id)
                    const approving = order.find(Order => Order._id === id)
                    approving.status = "approved"
                    const newOrders = [approving, ...remaining]
                    setOrder(newOrders)
                    console.log(newOrders);
                }

            })
    }



    return (
        <div>
            <h1 className='text-4xl'> Total Order: {order?.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order?.length && order.map(orderInfo => <OrderDetails
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                                key={orderInfo._id} orderInfo={orderInfo}></OrderDetails>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;