
export interface ProfileType {
    name: string | number,
    age: number,
    address?:{
        city: string,
        street: string,
        house: number
    }[],
    lessons?: string[],
    role?: "admin" | "user" | "guest" | null,
}

interface ProfileProps {
    profile: ProfileType
}

// {
//     name:'ssss',
//     age:2323,
//     role:null
// }

const ProfileName = ({ name }: {name:ProfileType['name']}) => {
    return <h3>Name: {name}</h3>
}


const Profile = ({profile}:ProfileProps):JSX.Element => {
    const {name, age, address} = profile;
    return (
        <div>
        <h1>Profile</h1>
        <p><ProfileName name={name} /></p>
        <p>Age: {age}</p>
        {address && address.map(({city, street, house}, i) => (
            <p key={i}>Address: {city}, {street} {house}</p>
        ))}
        
        </div>
    );
}

export default Profile;