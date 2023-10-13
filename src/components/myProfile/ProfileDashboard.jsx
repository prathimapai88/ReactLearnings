import React from "react";
import MyProfile from "./MyProfile";
import AlexaImage from "./../../assets/alexa.png";
import siriImage from "./../../assets/siri.png";
import cortonaImage from "./../../assets/cortana.png";

function ProfileDashboard() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">My Personal Assistant</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <MyProfile 
              title="Alexa" 
              handle="@alexa" 
              image={AlexaImage} 
              description="by Amazon"
              />
            </div>
            <div className="column is-4">
              <MyProfile title="Siri" handle="@siri" image={siriImage} description="by Apple"/>
            </div>
            <div className="column is-4">
              <MyProfile
                title="Cortona"
                handle="@cortona"
                image={cortonaImage}
                description="by Microsoft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDashboard;
