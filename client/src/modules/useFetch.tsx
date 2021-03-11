import { useEffect, useState } from "react";
import axios from "axios";

// interface RequestProps {
//   url: string;
// }



// customized hook to get all the data from database
export const useFetch = (url: string) => {
  const [users, setUsers] = useState([] as any);

  useEffect(() => {
    const fetchApi = async () => {
      await axios.get(`${url}`).then((res) => setUsers(res));
    };

    fetchApi();
  }, [url]);

  return users.data;

};
