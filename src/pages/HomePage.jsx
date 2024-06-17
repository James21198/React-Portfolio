import { useState, useEffect } from 'react';

import API from '../utils/API';

export default function HomePage() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await API.getUsers();

    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
}
