import Hero from "./Hero";

const AboutViev = () => {
  return (
    <div className="text-center">
      <Hero text="O nas" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              delectus modi provident libero adipisci aut tempore mollitia quo
              suscipit, dicta perferendis, eveniet architecto consequuntur.
              Numquam nemo nesciunt animi rem impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutViev;
