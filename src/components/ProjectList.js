// import React, { useState } from 'react';
// import Modal from './ProjModal'

// import '../styles/Projects.css'

// function ProjectList() {

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [currentProject, setCurrentProject] = useState();

//     const [projects] = useState([
//         {
//             name: 'Only Cooks',
//             photo: 'url',
//             description: '',
//             technologies: '',
//             deployedUrl: '',
//             githubRepo: '',
//         },
//         {
//             name: 'Aesthete',
//             photo: 'url',
//             description: 'A productivity tool for creatives to store visual inspiration.',
//             technologies: 'HTML, CSS, Bulma, Bootstrap, JavaScript, Express, Handlebars, mySQL, Sequelize',
//             deployedUrl: 'https://blooming-river-84199.herokuapp.com/',
//             githubRepo: 'https://github.com/zuetesei/aesthete',
//         },
//         {
//             name: 'Quality Time',
//             photo: 'url',
//             description: 'An app that helps couples find a recipe and drink pairing for your next date night at home.',
//             technologies: 'HTML, CSS, Bulma, JavaScript, MealDB, CocktailDB',
//             deployedUrl: 'https://joel57.github.io/Quality_Time/',
//             githubRepo: 'https://github.com/zuetesei/Quality_Time',
//         },
//         {
//             name: 'Weather Dashboard',
//             photo: 'url',
//             description: '',
//             technologies: 'HTML, CSS, Bootstrap, JavaScript, jQuery',
//             deployedUrl: 'https://zuetesei.github.io/weather-dashboard/',
//             githubRepo: 'https://github.com/zuetesei/weather-dashboard',
//         },
//     ]);

//     const currentProjects = projects.filter(projects => projects.photo === photo);
//     const toggleModal = (image, i) => {
//         setCurrentProject({ ...image, index: i });
//         setIsModalOpen(!isModalOpen);
//     }

//     return (
//         <div>
//             {isModalOpen && (
//                 <Modal onClose={toggleModal} currentProject={currentProject} />
//             )}
//             <div className='flex-row'>
//                 {currentProjects.map((image, i) => (
//                     <img
//                         src={require(`../assets/`)}
//                         alt={image.name}
//                         className='img-thumbnail mx-1'
//                         onClick={() => toggleModal(image, i)}
//                         key={image.name}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ProjectList;