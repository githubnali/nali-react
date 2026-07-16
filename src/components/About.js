import User
 from "./User";

import UserClass from "./UserClass";

const About = () => {
    return (
        <>
            <h1>This is About US</h1>
            <p>This is para</p>

            <User name="Nagaraju Nali(Functional Based)" designation="Web Developer"/>
            <UserClass name="(Class Based)" designation="Developer"/>
        </>
    )
}

export default About;