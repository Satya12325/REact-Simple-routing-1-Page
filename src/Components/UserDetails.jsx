import axios from 'axios';
import {useEffect,useState} from 'react';
import{Link} from "react-router-dom";
import UserCard from '../Navbar/UserCard';
import {useParams} from 'react-router-dom';

const getUserById = (id) => {
    return axios.get("https://reqres.in/api/users/" + id);
}

// hooks

const UserDetails = () => {
    const {id} = useParams();
    const [isLoding, setIsLoading] = useState(true);
    const [data,setData] = useState(null);

    const handleGetUsers = async() => {
            try{
                setIsLoading(true);
                const {data} = await getUserById(id);
                setData(data);
                setIsLoading(false);
            }
            catch(err){
                console.log(err);
            }

    }

    useEffect(() =>{
        handleGetUsers();
    },[id]);
if(isLoding){
    <div>...Loading</div>
    console.log(data)
}
return (
    <div  style={{

        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 5,
        margin: 2,
       justifyContent: 'center',
       margin: 'auto',
        width: '400px',
  }}>
        <h3>User id: {id}</h3>
        <UserCard
        id={id}
        name={`${data?.data?.first_name} ${data?.data?.last_name}`}
        avatar={data?.data?.avatar}
        email={data?.data?.email}
        />
        <div>
        {id !=="1" && <Link to={`/users/${Number(id)}`}>Prev</Link>}
        <Link to={`/users/${Number(id)+1}`}>Next</Link>

        </div>
    </div>
);


}

export default UserDetails;