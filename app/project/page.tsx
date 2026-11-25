export const metadata = {
  title: "Projects | Loui",
};

const projects = [
  { id: 1, name: "Profile Website", description: "A personal website." },
  { id: 2, name: "Task App", description: "A task management application." },
  { id: 3, name: "Portfolio", description: "My personal portfolio." },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">My Projects</h1>

      {projects.map((project) => (
        <div key={project.id} className="border p-4 m-4">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  );
}