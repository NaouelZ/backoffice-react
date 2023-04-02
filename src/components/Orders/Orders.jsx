import React from 'react'
import { groupNumber, ordersData } from '../../data'
import css from './Orders.module.css'
import IconText from '../IconText';

const Orders = () => {
    return (
        <div className={`${css.container}`}>
            <IconText text="Last orders"/>
            <table className={css.ordersTable}>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    ordersData.map((order, index) => (
                        <tr key={index}>
                           <td>{order.name}</td>
                            <td>$ {order.change}</td>
                            <td><span class={order.isPaid ? css.orderTag : css.orderTagPending}>{order.isPaid ? 'Paid' : 'Pending'}</span></td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
            <div className={`${css.stat}`}>
                <span>Total amount</span>
                <span>$ {groupNumber(4560)}</span>
            </div>

        </div>
    )
}

export default Orders