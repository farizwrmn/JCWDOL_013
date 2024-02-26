function About() {
  function popUpSomething() {
    alert("Sudah di Klik");
  }
  return (
    <div>
      <h1>This is About section</h1>
      <button onClick={popUpSomething}>Click me</button>
    </div>
  );
}

export default About;
