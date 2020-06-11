import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    // let oldProduct = null;
    // for(let item of context.state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }

    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      // context.cartList.push(payload)
      context.commit(ADD_TO_CART, payload)
    }

    // let oldProduct = null;
    // for(let item of state.cartList){
    //   if(item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }
    //
    // if (oldProduct) {
    //   oldProduct.count += 1
    // } else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }
  }
}
