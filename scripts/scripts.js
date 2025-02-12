// Liste des compétences
function createSkillsFromJSON(jsonData) {
  const skillsSection = document.getElementById("Skills");
  const skillsList = skillsSection.querySelector(".skills_list");

  // Supprimer les éléments existants
  skillsList.innerHTML = "";

  // Parcourir les données JSON et créer les éléments
  jsonData.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.classList.add("skills");

    const skillLogo = document.createElement("img");
    skillLogo.src = skill.imageUrl;
    skillLogo.alt = skill.content;

    const skillName = document.createElement("p");
    skillName.textContent = skill.content;

    skillElement.appendChild(skillLogo);
    skillElement.appendChild(skillName);

    skillsList.appendChild(skillElement);
  });
}

// Charger les données JSON depuis le fichier
fetch("data/skills.json")
  .then((response) => response.json())
  .then((data) => {
    // Appeler la fonction avec les données JSON
    createSkillsFromJSON(data);
  })
  .catch((error) => console.error("Une erreur s'est produite :", error));


// Liste des projets
function createProjectsFromJSON(jsonData) {
  const projectsSection = document.getElementById("Projets");
  const projectsList = projectsSection.querySelector(".box_projects");

  // Supprimer les éléments existants
  projectsList.innerHTML = "";

  // Parcourir les données JSON et créer les éléments
  jsonData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("projects");

    const projectLogo = document.createElement("img");
    projectLogo.src = project.imageUrl;
    projectLogo.alt = project.content;

    const projectName = document.createElement("p");
    projectName.textContent = project.content;

    if (project.class) {
      projectElement.classList.add(project.class);
    }

    projectElement.appendChild(projectLogo);
    projectElement.appendChild(projectName);

    if (project.hyperlink) {
      const projectLink = document.createElement("a");
      projectLink.href = project.hyperlink;
      projectLink.target = "_blank"; // Ouvrir dans un nouvel onglet
      projectLink.appendChild(projectElement);
      projectsList.appendChild(projectLink);
    } else {
      projectsList.appendChild(projectElement);
    }
  });
}

// Charger les données JSON depuis le fichier
fetch("data/projects.json")
  .then((response) => response.json())
  .then((data) => {
    // Appeler la fonction avec les données JSON
    createProjectsFromJSON(data);
  })
  .catch((error) => console.error("Une erreur s'est produite :", error));
