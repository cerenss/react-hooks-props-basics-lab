import React from "react";


function About(props) {
  // console.log(props);
  function validBio() {
    if (props.bio && props.bio.length > 0) {
      return <p>{props.bio}</p>;
    }
    else {
      return null;
    }
  }
  
  
  function links() {
    return (
        <div>
            <h3>Links</h3>
            <a href={props.links.github}>{props.links.github}</a>
            <a href={props.links.linkedin}>{props.links.linkedin}</a>
        </div>
    )
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {validBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       {links()}
    </div>
  );
}

export default About;
