import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <div className=" w-5/6 mx-auto my-10 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            As your application grows, it helps to be more intentional about how
            your state is organized and how the data flows between your
            components. Redundant or duplicate state is a common source of bugs.
            In this chapter, you’ll learn how to structure your state well, how
            to keep your state update logic maintainable, and how to share state
            between distant components.
          </p>
        </div>
      </div>
      <div className=" w-5/6 mx-auto my-10 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            How does prototypical inheritance work?
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the{" "}
            <strong>Prototype</strong> of an object, we use Object.
            getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div className=" w-5/6 mx-auto my-10 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div className=" w-5/6 mx-auto my-10 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">React vs. Angular vs. Vue?</h2>
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
