'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPython, FaChartLine, FaDatabase, FaAws } from 'react-icons/fa';
import { SiPandas, SiTensorflow, SiScikitlearn, SiKubernetes, SiTerraform, SiDocker } from 'react-icons/si';

const skills = [
  { name: 'Data Science', icon: <FaChartLine className="w-8 h-8" />, description: 'Machine Learning, Statistical Analysis, Data Visualization' },
  { name: 'Python', icon: <FaPython className="w-8 h-8" />, description: 'Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch' },
  { name: 'DevOps', icon: <SiDocker className="w-8 h-8" />, description: 'Docker, Kubernetes, CI/CD, Infrastructure as Code' },
  { name: 'Cloud', icon: <FaAws className="w-8 h-8" />, description: 'AWS, GCP, Azure, Serverless Computing' },
  { name: 'Data Engineering', icon: <FaDatabase className="w-8 h-8" />, description: 'ETL, Data Pipelines, Big Data' },
  { name: 'Economic Science', icon: <FaChartLine className="w-8 h-8" />, description: 'Econometrics, Time Series Analysis, Financial Modeling' },
];

const projects = [
  {
    title: 'Economic Forecasting Model',
    description: 'Time series forecasting model for economic indicators using ARIMA and LSTM',
    tags: ['Python', 'TensorFlow', 'Pandas', 'StatsModels'],
    github: '#'
  },
  {
    title: 'Data Pipeline Automation',
    description: 'Automated ETL pipeline for processing large datasets with Airflow',
    tags: ['Python', 'Apache Airflow', 'Docker', 'PostgreSQL'],
    github: '#'
  },
  {
    title: 'ML Model Deployment',
    description: 'End-to-end machine learning model deployment with FastAPI and Kubernetes',
    tags: ['Python', 'FastAPI', 'Kubernetes', 'Docker'],
    github: '#'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Bruno Lambreht
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Bruno Lambreht</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
              Data Scientist | Python Developer | DevOps Engineer
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Transforming data into actionable insights and building scalable data solutions at the intersection of technology and economics.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-400 font-medium hover:bg-blue-900/30 transition-colors duration-300"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <div className="text-lg text-gray-300 space-y-6">
              <p>
                I'm a passionate Data Scientist and Python Developer with a strong background in Economic Science. 
                I specialize in building data-driven solutions that bridge the gap between complex economic theories and practical business applications.
              </p>
              <p>
                With expertise in machine learning, data analysis, and cloud infrastructure, I help organizations leverage their data to make informed decisions and drive growth.
              </p>
              <p>
                My approach combines technical skills with economic insights to create robust, scalable solutions that deliver real value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A versatile skill set that combines data science, software development, and economic analysis
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors duration-300 border border-gray-700/50"
              >
                <div className="text-blue-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Some of my recent work at the intersection of data science and software engineering
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center"
                  >
                    View on GitHub
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400 mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/bruno-lambreht"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/bruno-lambreht"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
            </div>
            
            <form className="max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-left text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-left text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full md:w-auto px-8"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Bruno Lambreht. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}
