import Image from 'next/image';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <Image src="/icons/javascript.svg" alt="JavaScript" width={100} height={100} />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/react.svg" alt="React" width={100} height={100} />
            <p className="mt-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/nodejs.svg" alt="Node.js" width={100} height={100} />
            <p className="mt-2">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/tailwindcss.svg" alt="Tailwind CSS" width={100} height={100} />
            <p className="mt-2">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/html.svg" alt="HTML" width={100} height={100} />
            <p className="mt-2">HTML</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
