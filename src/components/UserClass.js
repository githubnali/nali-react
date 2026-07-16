import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props);

        this.state = {
            userInfo: {
                name: "Test",
                location: "Dummy",
                avatar_url: "dummy",
                bio: "dummy"
            }
        }

    }

    async componentDidMount(){

        const data = await fetch('https://api.github.com/users/githubnali');
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log('component did mount called')
    }

    componentWillUnmount() {
        console.log("component will mount called")
    }

    render() {

        const {name, location, avatar_url, bio} = this.state.userInfo;

        return (
            <div className='user-card'>
                    <img src={avatar_url} alt={name}/>
                    <h1>Name: {name}</h1>
                    <h2>Location: {location}</h2>
                    {/* <button onClick={() => 
                        this.setState({
                            count: this.state.count + 1
                        })
                    }
                    >Count Increase</button> */}
                    <p>Designation: {bio}- Class</p>
                    <p>Works at: EverestIMS Technologies</p>
            </div> 
        )
    }
}

export default UserClass;