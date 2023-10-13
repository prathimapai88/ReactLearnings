import React from "react";

function MyProfile(props) {
  const { title, handle, image ,description } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img alt="image" src={image} />
        </figure>
      </div>
      <div className="card-content">
        <div>Title : {title}</div>
        <div>Handle : {handle}</div>
      </div>
      <div className="content">
        {description}
      </div>
    </div>
  );
}

export default MyProfile;
