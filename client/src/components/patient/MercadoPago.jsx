import React, { useEffect, useState } from 'react';
import axios from 'axios'

const FORM_ID = 'payment-form';

export default function MercadoPago({id}) {
  const [preferenceId, setPreferenceId] = useState(null);
  console.log(preferenceId)
  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    axios.get('/patients/subcription/'+id,).then((order) => {
      setPreferenceId(order.data);
    });
  }, []);


  return (
      <button> <a href={preferenceId} >Subscribe</a> </button>
   
  );
}

