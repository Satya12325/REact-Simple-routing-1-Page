function UserCard({id,email,name,avatar}) {
    return (
        <div style={{

           
            display: 'flex',
            gap: 2,
            padding: 5,
            margin: 2,
            border: '5px solid blcak',
            background: 'aqua',
            
        }}>
            <img src={avatar} alt={id}/>
            <div style={{display: 'flex', flexDirection: 'column', gap: 3, margin: 2, padding:2}}>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>

        </div>
    );
}

export default UserCard;