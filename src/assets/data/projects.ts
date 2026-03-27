import type { Project } from "../../types/project";

import discgolfVideo from "../video/discgolf-demo.mp4";
import projectImg1 from "../images/recsys1.png";
import predan from "../images/predan.png";
import ppodriving from "../video/ppo_driving.mp4";
import luminactiytrailer from "../video/Luminacity_Trailer.mp4";

export const projects: Project[] = [
  {
    title: "Discgolf Mobile App",
    type: "video",
    media: discgolfVideo,
    tech: ["React Native", "TypeScript", "TailwindCSS", "Firebase", "GO lang", "postgreSQL"],
    role: "Lead Frontend Developer",
    description:
      "Discgolf app built with React Native, designed to help disc golf players track their scores, analyze their performance, and connect with other players.",
    contributions: [
      "Leading the development of the mobile app using React Native and TypeScript.",
      "Implemented crucial systems such as course creation, score tracking, and player profiles.",
      "Collaborated with the backend team to create an intuitive user interface.",
    ],
    mobilePreview: true,
  },
  {
    title: "Steam game recommendation system",
    type: "image",
    media: projectImg1,
    tech: ["Python", "Pandas", "Scikit-learn","numpy", "React", "TailwindCSS"],
    role: "Designer & Developer",
    description:
      "Developed a game recommendation system using machine learning techniques to analyze game features and user preferences, providing personalized game suggestions based game search",
    contributions: [
      "Conducted data preprocessing and feature engineering to prepare the dataset for modeling.",
      "Designed and implemented a recommendation algorithm using collaborative filtering and content-based filtering techniques.",
      "Assisted in frontend development to create a user-friendly interface for displaying game recommendations.",
    ],
    link:"https://github.com/Stenoliv/Beslutsstodsystem-och-verifikation-projekt"
  },
  {
    title: "Data Visualization Project",
    type: "image",
    media: predan,
    tech: ["Python", "Pandas", "Matplotlib", "seaborn", "sklearn" ,"pmdarima"],
    role: "Developer",
    description:
      "Course project where we analyzed a imaginary dataset of a country's population and exports. We performed data cleaning, exploratory data analysis, and built a predictive model to forecast future export trends based on historical data.",
    contributions: [
      "Created data visualizations to explore relationships between population growth and export trends.",
      "Made a predictive model using ARIMA to forecast future export trends based on historical data.",
      "Created visualizations to communicate our findings and insights effectively.",
    ],
    link:"https://github.com/Stenoliv/Predictive-analytics-assignment"
  },
  {
    title: "Machine Learning Based Driving Simulation",
    type: "video",
    media: ppodriving,
    tech: ["Python", "Stable Baselines3", "Machine Learning", "Reinforcement Learning", "torch"],
    role: "Machine Learning Developer",
    description:
      "Solved gym environment car racing V2 using Proximal Policy Optimization (PPO) algorithm and deep q network (DQN). The project involved training a reinforcement learning agent to navigate a car through a racing track, optimizing its performance over time.",
    contributions: [
      "Created and trained a reinforcement learning agent using the PPO algorithm to navigate the car through the racing track.",
      "Implemented a DQN agent to compare its performance with the PPO agent.",
      "Designed clean and modular code structure to facilitate experimentation with different algorithms and hyperparameters.",
    ],
    link:"https://github.com/Stenoliv/Preskriptiv-analytik-Projekt"
  },
  {
    title: "Tile based city builder game",
    type: "video",
    media: luminactiytrailer,
    tech: ["Unity", "C#", "Blender"],
    role: "Lead game designer and helperdeveloper",
    description:
      "Made a tile based city builder game in Unity in a team of 3. Game features a blank hexagonal grid where players can place different types of buildings to create their own city. The game includes resource management, building placement, and random events.",
    contributions: [
      "Designed and implemented the core gameplay systems for the tile-based city builder.",
      "Approved and managed game assets using Blender and other design tools.",
      "Collaborated with the development team to ensure smooth integration of game features.",
    ],
    link:"https://github.com/Stenoliv/Luminacity"
  },
];