import React, { useEffect, useState } from 'react';
import axios from 'axios'

const FORM_ID = 'payment-form';

export default function MercadoPago() {
  const [preferenceId, setPreferenceId] = useState(null);
  console.log(preferenceId)
  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    axios.get('http://localhost:3001/patients/subcription',).then((order) => {
      setPreferenceId(order.data);
    });
  }, []);


  return (
    <a href={preferenceId} >Pagar</a>
  );
}

