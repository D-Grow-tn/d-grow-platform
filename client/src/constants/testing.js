const project = {
  id: 0,
  cover:
    "https://novakdjokovicfoundation.org/wp-content/uploads/2016/02/designing-new-projects1.jpg",
  name: "Go Manga",
  description:
    "Commenting System: Engage with readers through the integrated commenting system. Encourage discussions, receive feedback, and build a community around your blog posts.",
  status: "Ongoing",
  timeline: "Jan 2023 - Dec 2023",
  team: [
    { name: "John", role: "Project Manager" },
    { name: "Jane", role: "Consultant" },
  ],
  objectives: [
    {
      name: "Design and Development",
      status: "In progress",
      subobjects: [
        { name: "UI Design", status: "In progress" },
        { name: "Frontend Development", status: "In progress" },
        { name: "Backend Development", status: "Pending" },
        { name: "Backend Development", status: "Pending" },
        { name: "Backend Development", status: "Pending" },
      ],
    },
    {
      name: "Content Creation",
      status: "Not started",
      subobjects: [
        { name: "Write Chapter 1", status: "Not started" },
        { name: "Illustrate Chapter 1", status: "Not started" },
      ],
    },
  ],
};
const projectNode = { nodes: [], links: [] };

project.objectives.forEach((element, i) => {
  projectNode.nodes.push({ id: `node-${i.toString()}`, content: element.name });
  element.subobjects.forEach((elem, j) => {
    projectNode.nodes.push({
      id: `node-${i.toString() + j.toString()}`,
      content: elem.name,
    });
    projectNode.links.push({
      input: "node-" + i.toString(),
      output: `node-${i.toString() + j.toString()}`,
    });
  });
});
