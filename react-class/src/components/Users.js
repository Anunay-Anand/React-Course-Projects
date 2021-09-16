// Importing React and other important libraries
import { Component } from "react";
import User from "./User";

// Importing css modules and assets
import classes from "./Users.module.css";

class Users extends Component {
  // Use constructor to manage state in class based components
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "test",
    };
  }

  toggleUsersHandler() {
    this.setState((curretState) => {
      return { showUsers: !curretState.showUsers };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.users.length === 0) {
      throw new Error("No users found");
    }
  }

  render() {
    // Helper method can be added in class Based COmponent
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
