import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/narendrakamadi");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <p>
          <img src={avatar_url} alt="avatar" width={350} />
        </p>
        <section style={{ margin: 10 }}>
          <p>
            <strong>This is rendered from class based components.</strong>
          </p>
          <p>Author: {name}</p>
          <p>Location: {location}</p>
        </section>
      </div>
    );
  }
}

export default UserClass;
