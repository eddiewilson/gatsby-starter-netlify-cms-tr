exports.onClientEntry = () => {
  console.log("We've started!");
  //callAnalyticsAPI();
};

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed");
  const animate = document.querySelectorAll(".animate");
  console.log(animate);
  Array.from(animate).map((eachAnimation) => {
    eachAnimation.classList.add("loaded");
  });
};
