import React from 'react';
import axios from '../../services/axios';

export default function Dashboard() {
  React.useEffect(() => {
    axios.get('appointments');
  }, []);

  return <div>Dashboard</div>;
}
