// function App() {
//   return (
//     <>
//       <h1>Hello from Ania's App</h1>
//       <p>This is a test to check if React is rendering correctly.</p>
//     </>
//   );
// }

// export default App;
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {
  return (
    <div className ="overflow-x-hidden">
      <Hero />
      {/* <p>This is my website testing.</p> */}
      <About  />
      <Projects  />
      <Skills />
      <Contact  />
      
      <p> </p>   
      <Footer /> 

    </div>
  )
}

export default App;
