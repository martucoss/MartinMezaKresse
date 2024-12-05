import React from 'react';
import projects from '../data/projectsData';

const Projects = () => (
    <section id="projects">
        <h1>My Projects</h1>
        <ul>
            {projects.map((project, index) => (
                <li key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                </li>
            ))}
        </ul>
    </section>
);

export default Projects;