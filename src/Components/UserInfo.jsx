import { isElementType } from "@testing-library/user-event/dist/utils";

function UserInfo(props) {
    return (
      <div className="UserInfo">
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
    );
  }
  export default UserInfo;
  

  
  
  