import React from 'react'

const SingleOrder = ({order}) => {
    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.purchasedDate}</td>
            <td>{order.status}</td>
            <td>{order.orderedBooks}</td>
            <td>{order.totalAmount}</td>
        </tr>
    )
}

export default SingleOrder;
