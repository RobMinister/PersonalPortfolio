import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Page() {
  return (
    <>
      <Home />
      <Experience />
      {<Skills />}
      {<Projects />}
      {<Contact />}
    </>
  );
}
