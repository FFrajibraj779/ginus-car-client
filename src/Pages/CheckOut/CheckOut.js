import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const CheckOut = () => {
    const { title, price, _id } = useLoaderData();
    const { user } = useContext(UserContext)

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.FirstName.value} ${form.LastName.value}`
        const email = user?.email || 'unRegister';
        const message = form.message.value;
        const phone = form.phone.value;

        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            phone,
            email,
            message,

        }
        if (message.length < 20) {
            alert('message should be longer')
        }
        console.log(name, message, email);

        fetch(' https://car-servar-side.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    form.reset()
                    alert('order submitted')
                }
                console.log(data);
            })
            .catch(error => console.error(error))

    }


    return (
        <div>
            <h3 className='text-3xl font-bold '>you are order {title}</h3>
            <h4 className='text-2xl font-bold'>Price: ${price}</h4>
            <form onSubmit={handleOrder} >
                <div className='grid  grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='FirstName' type="text" placeholder="First Name" className="input w-full max-w-xs input-bordered" />
                    <input name='LastName' type="text" placeholder="Last Name" className="input w-full max-w-xs input-bordered" />
                    <input name='phone' type="text" placeholder="phon" className="input w-full max-w-xs input-bordered" required />
                    <input name='email' type="email" placeholder="email" defaultValue={user?.email} className="input w-full max-w-xs input-bordered" />
                </div>
                <div>
                    <textarea name='message' className="textarea textarea-ghost w-full h-full mt-5 input-bordered" placeholder="message" required></textarea>
                </div>
                <button type='submit' className="btn btn-outline btn-primary">place Order</button>
            </form>
        </div>
    );
};

export default CheckOut;