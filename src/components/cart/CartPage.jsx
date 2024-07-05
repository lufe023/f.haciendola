import React, { useEffect, useState } from 'react'
import Header from '../dashboard/Header'
import Aside from '../dashboard/Aside'
import getCartByUser from './getCartByUser'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../dashboard/Card'
import formatPrice from '../utils/formatPrice'
import updateProductQuantity from './updateProductQuantity'

const CartPage = () => {

    let menu = useSelector(state => state.pageSlice.menu)
    let cart = useSelector(state=> state.cartSlice)

    const dispatch = useDispatch();
    useEffect(() => {
      getCartByUser(dispatch);
    }, [])
    
  return (
    <div className={`g-sidenav-show bg-gray-100 ${menu?'g-sidenav-pinned':''}`}>
    <Header/>
    <Aside/>
    <main className="main-content position-relative border-radius-lg">
    <div className="container-fluid py-4">
   <div className="row">
  <div className="col-12">
    <div className="card mb-4">
      <div className="card-header pb-0">
        <h6>Mi Carrito</h6>
      </div>
      <div className="card-body px-0 pt-0 pb-2">
        <div className="table-responsive p-0">
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Producto</th>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-1">Cantidad</th> 
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Precio Unitario</th>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Valor Total</th>
                <th className="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              {console.log(cart.CartItem)}
            {cart?.CartItem?.map(product => (
                 <tr>
                 <td>
                   <div className="d-flex px-2 py-1">
                     <div>
                       <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
                     </div>
                     <div className="d-flex flex-column justify-content-center">
                       <h6 className="mb-0 text-sm">{product.productDetails.Title}</h6>
                       <p className="text-xs text-secondary mb-0">{product.productDetails.categoryDetails.name}</p>
                     </div>
                   </div>
                 </td>
                 <td>
                 <div className="input-group text-xs font-weight-bold mb-0" >
                  <button className="input-group-text text-body">-</button>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={product.quantity}
                    size={10}
                    style={{maxWidth:"20px"}}
                    />
                    <button className="input-group-text text-body" onClick={()=>updateProductQuantity(dispatch,product.id,product.quantity+1)}>+</button>
                  </div>
                 </td>
                 <td className="align-middle">
                 
                  {formatPrice(product.price)}
                 </td>
                 <td className="align-middle">
                 {formatPrice((product.quantity * product.price))}
                 </td>

                 <td className="alingn-middle">
                 <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                 <i className="fas fa-trash" />
                   </a>
                 </td>
               </tr>
               
              ))}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    <div className="row">
    {/* {cart?.CartItem?.map(product => (
                <Card key={product.id} product={product.productDetails} cartId={cart?.id}/>
              ))} */}
              </div>
    </div>
    </main>
</div>
  )
}

export default CartPage