const skills = [
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
  { name: 'HTML', icon: '/icons/html.svg' },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" style={{ maxWidth: '48px', maxHeight: '48px' }} />
            <p className="mt-2 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
