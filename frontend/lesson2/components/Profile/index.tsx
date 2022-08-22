import { useState } from 'react';
import type { MouseEvent } from 'react';
import type { ProfileType } from '../../types/Profile.types';


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


interface TitleProps {
    title: string,
    subtitle: string

}


const Lesson = ({title, handleClick}:{title:string, handleClick:(lesson:string) => void}) => {


    const lessonClick = (e:MouseEvent<HTMLSpanElement>) => {
        handleClick(title)
    }

    return <span onClick={lessonClick}>{title}</span>
}

const Lessons = ({lessons, handleClick}:{lessons:ProfileType['lessons'] | null, handleClick:(lesson:string) => void}) => {

    
    return (
        <div>
            {lessons?.map((lesson, index) => (
                <div key={index}>
                    <Lesson title={lesson} handleClick={handleClick} />
                </div>
            ))}

        </div>
    )
}


const SelectedLessons = ({lessons}:{lessons:ProfileType['lessons'] | null}) => {
    return (
        
        <div>
            <h2>Выбранные уроки</h2>
        
            {lessons?.map((lesson, index) => (
                <div key={index}>{lesson}</div>
            ))}

        </div>

    )
}

const Profile = ({profile}:ProfileProps):JSX.Element => {

    const titleObj:TitleProps = {
        title:'sssss',
        subtitle:'subtitle'
    }

    const [selectedLessons, setSelectedLessons] = useState<ProfileType['lessons'] | null>(null);
    const [title, setTitle] = useState<TitleProps[] | null>(null);
    const {name, age, address, lessons} = profile;


    const handleClick = (lesson:string) => {

        selectedLessons ? setSelectedLessons([...selectedLessons, lesson]) : setSelectedLessons([lesson]) ;
    }
    
    return (
        <div>
            <h1>Profile</h1>
            <p><ProfileName name={name} /></p>
            <p>Age: {age}</p>
            {address && address.map(({city, street, house}, i) => (
                <p key={i}>Address: {city}, {street} {house}</p>
            ))}

            <p>{ title && title[0].title }</p>
            <p>{ title && title[0].subtitle }</p>

            <button onClick={() => {
                setTitle([{
                    title:'frfrfrfr',
                    subtitle:'susdffsdfdsbtitle'
                }])
            }}>Change title</button>


            <Lessons lessons={lessons} handleClick={handleClick} />

            <SelectedLessons lessons={selectedLessons} />
        
        </div>
    );
}

export default Profile;

