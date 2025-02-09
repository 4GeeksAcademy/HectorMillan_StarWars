import React, { useContext } from "react"; // 1
import { Context } from "../store/appContext.js";


// 5 y 2
export const Alert = () => {
    const { store } = useContext(Context);
  // 3 Code JS 
  


  // 4 
  return (
    <div className="container">
      <div className={`alert alert-${store.alert.background} ${store.alert.visible ? '' : 'd-none' }`} role="alert">
        {store.alert.text}
      </div>
    </div>
  )
}