import classes from "./About.module.css";

const About = () => {
  return (
    <section>
      <h1>This is made by Andrew Tran</h1>
      <p>
        I made this simple project to put together what I learned in nodejs and
        react. I used React for frontend while I used nodejs for backend.
      </p>
      <div className={classes.image}>
        <img
          src="./profilepic.jpg"
          alt="pfp"
        />
      </div>
    </section>
  );
};

export default About;
