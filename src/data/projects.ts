
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "GAN-Based Data Augmentation",
    description: "A GAN-based approach for augmenting training data in machine learning models.",
    image: "/imgs/gan.png",
    tags: ["Python", "Augmentation", "GANs", "Deep Learning"],
    links: {
      github: "https://github.com/shashankP05/Data-Augmentation-Using-GAN-master",
      live: "",
    },
  },
  {
    id: 2,
    title: "Next Word Predictor ",
    description: "A Streamlit application that predicts the next word in a sentence using an LSTM model trained on a large corpus of text data.",
    image: "/imgs/word.png",
    tags: ["NLP", "LSTM", "streamlit"],
    links: {
      github: "https://github.com/shashankP05/Next-Word-Predictor",
      live: "",
    },
  },
   {
    id: 3,
    title: "Financial Document QA with Agentic RAG",
      description: "A financial document question-answering system using RAG and LLaMA models, enabling efficient retrieval and response generation.",
      image: "/imgs/fin.png",
    tags: ["RAG", "NLP", "LLaMA"],
    links: {
      github: "https://github.com/shashankP05/Financial-Document-QA-with-Agentic-RAG",
      live: "",
    },
  },
  {
     id: 4,
    title: "Drowsiness Detection",
    description: "A project focused on detecting drowsiness in drivers using computer vision techniques.",
    image: "/imgs/drow.png",
    tags: ["Tensorflow", "MobileNet Model", "OpenCV"],
    links: {
      github: "https://github.com/shashankP05/Driver-Drowsiness-detection-",
      live: ""
    },
  },
  {
    id: 5,
    title: "Budget Tracker",
      description: "A comprehensive budget tracking application built with React for managing personal finances.",
      image: "/imgs/buget.png",
    tags: ["React", "Firebase"],
    links: {
      github: "https://github.com/shashankP05/Budgeting-app",
      live: "https://budgeting-app-mtfn.vercel.app/",
    },
  },
  {
    id: 6,
    title: "Time Series Forecaasting",
    description: "A comprehensive time series forecasting project comparing ARIMA, SARIMA, Prophet, and LSTM models for stock price prediction.",
    image: "/imgs/NET.png",
    tags: ["Facebook Prophet", "LSTM", "ARIMA","SARIMA"],
    links: {
      github: "https://github.com/shashankP05/Time-Series-Forecasting",
      live: ""
    },
  },
  {
   id: 7,
    title: "Network Intrusion Detection ",
    description: "A React Native and Firebase app for managing internships and applications, helping students find relevant opportunities.",
    image: "/imgs/NET.png",
    tags: ["SQL", "ML pipeline", "data cleaning"],
    links: {
      github: "https://github.com/shashankP05/Intrusion-Detection-SQL-ML",
      live: ""
    },
  },
];
