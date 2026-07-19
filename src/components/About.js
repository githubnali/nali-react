import User
 from "./User";

import UserClass from "./UserClass";

const About = () => {
    return (
        <>
            <h1 className="m-5 font-bold">This is About US</h1>
            <p className="m-5 font-semibold">This is para</p>

            <div className="flex m-5">
                <User name="Nagaraju Nali(Functional Based)" designation="Web Developer"/>
                <UserClass name="(Class Based)" designation="Developer"/>
            </div>

        </>
    )
}

export default About;