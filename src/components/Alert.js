import "../styles/alert.css"


function Alert({alert}) {

   
    return (    
            <div className="alert">

            <p className={`${alert.error ? "alert__error" : "alert__sucess"}`}> 
            {alert.msg}
            </p>
            </div>
       
     );
   }
   
   export default Alert;
   