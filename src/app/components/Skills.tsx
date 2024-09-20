const skills = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'Tailwind CSS' },
    { name: 'HTML' },
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="min-h-screen py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  