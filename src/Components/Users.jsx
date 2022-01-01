import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const fetchUswrs = ()=>{
    return axios.get("https://reqres.in/api/users");
}

function Users(){
    const [data,setData] = useState(null);
    const [isLoding, setIsLoading] = useState(true);

    const handleFetchUsers = async() => {
        try{
            setIsLoading(true);
            const {data} = await fetchUswrs();
            setData(data);
        }
        catch(err){
            console.log(err);
        }
        setIsLoading(false);
    };
    useEffect(()=>{
        handleFetchUsers();
    },[]);
    if(isLoding){
        return <div>...Loading</div>
    }
    return(
        <div>
            <h3 style={{textAlign: 'center'}}>Users Page</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {data?.data?.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              margin: 2,
              padding: 5,
              border: "1px solid gray",
            }}
          >
            <div>{`${item.first_name} ${item.last_name}`}</div>
            <img width="40px" src={item.avatar} alt={item.first_name} />
            <Link to={`/users/${item.id}`}>Show more info</Link>
          </div>
        ))}
            </div>
        </div>
    );
}

export default Users;