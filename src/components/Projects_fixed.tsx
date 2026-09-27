import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { CardContent, CardHeader, CardTitle } from './ui/card';
import { SpotlightCard } from './ui/SpotlightCard';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import {
  Bot,

  Globe,

  Github,
  ExternalLink,
  Code,
  Sparkles
} from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const getThumbnail = (categories: string[], icon: ReactNode) => {
    const gradients: Record<string, string> = {
      'AI/ML': 'from-cyan-600/30 via-blue-500/20 to-teal-600/30',
      'Full Stack': 'from-emerald-600/30 via-green-500/20 to-lime-600/30',
      'Web Development': 'from-orange-600/30 via-amber-500/20 to-yellow-600/30',
      'Backend': 'from-sky-600/30 via-blue-500/20 to-cyan-600/30',
      'Data Science': 'from-purple-600/30 via-fuchsia-500/20 to-pink-600/30',
    };
    const gradient = gradients[categories[0]] || 'from-slate-600/30 via-gray-500/20 to-zinc-600/30';
    return (
      <div className={`relative h-32 w-full rounded-t-lg bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden mb-0`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 scale-150">
          {icon}
        </div>
      </div>
    );
  };

  const projects = [
    {
      title: 'TalkX — AI-Powered Conversational Platform',
      description: '🤖 Open-source AI chat platform with multi-model support and extensible architecture',
      longDescription:
        'Built as a comprehensive AI conversation platform supporting multiple LLM providers and customizable AI personas. The system features modular backend architecture, user authentication, session management, and extensible chat services with support for advanced integrations such as voice capabilities and real-time communication. Designed for scalable deployments and flexible AI-driven applications.',

      icon: <Globe className="h-6 w-6" />,

      tech: [
        'Java',
        'Spring Boot',
        'MySQL',
        'SQLite',
        'WebSocket',
        'Netty',
        'JWT',
        'REST API',
        'AI Integration',
        'Maven'
      ],

      features: [
        'Multi-provider AI chatbot integration',
        'Custom AI personas and conversation management',
        'User authentication and secure session handling',
        'Real-time chat architecture with WebSocket support',
        'Modular backend designed for scalable deployments',
        'Supports voice and intelligent assistant extensions'
      ],

      categories: ['AI/ML', 'Full Stack'],

      status: 'Completed',

      achievement: '🚀 Open-Source AI Platform',

      github: 'https://github.com/DhruviBhuva17/TalkX',

      live: undefined
    },
    {
      title: 'CodEXE — AI-Powered Code Execution & Collaboration Platform',
      description: '💻 Full-stack platform for writing, executing, and managing code with modern web technologies',

      longDescription:
        'Developed a full-stack coding platform that enables users to write, execute, and manage code through an interactive web interface. The application includes secure authentication, project management capabilities, and a responsive UI, providing a streamlined environment for coding workflows and collaborative development.',

      icon: <Globe className="h-6 w-6" />,

      tech: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT Authentication',
        'REST API',
        'JavaScript',
        'Tailwind CSS'
      ],

      features: [
        'Interactive online code editing experience',
        'Secure user authentication and authorization',
        'Project creation and management system',
        'RESTful backend APIs for seamless communication',
        'Responsive and modern user interface',
        'Scalable full-stack architecture for future enhancements'
      ],

      categories: ['Full Stack'],

      status: 'Completed',

      achievement: '🚀 AI-Enhanced Developer Productivity Platform',

      github: 'https://github.com/DhruviBhuva17/codexe',

      live: undefined
    },
    {
      title: 'AI Chatbot — Gemini-Powered Conversational Assistant',

      description:
        '🤖 Flask-based AI chatbot integrated with Google Gemini for real-time intelligent conversations',

      longDescription:
        'Developed an interactive AI chatbot using Flask and Google Gemini API to provide natural language conversations through a clean web interface. The application supports real-time user interactions, secure API key management with environment variables, responsive frontend integration, and robust backend error handling. The project was designed with a modular architecture to simplify future enhancements and AI model upgrades.',

      icon: <Bot className="h-6 w-6" />,

      tech: [
        'Python',
        'Flask',
        'Google Gemini API',
        'HTML',
        'CSS',
        'JavaScript',
        'Jinja2',
        'python-dotenv'
      ],

      features: [
        'Google Gemini integration for AI-powered conversations',
        'Interactive chat interface with real-time request handling',
        'Secure environment variable management using .env',
        'Flask backend with REST-style request processing',
        'Responsive frontend for seamless user experience',
        'Structured logging and error handling for API interactions'
      ],

      categories: ['AI/ML', 'Full Stack'],

      status: 'Completed',

      achievement: '🚀 Gemini AI Integrated Chatbot',

      github: 'https://github.com/DhruviBhuva17/chatbot',

      live: undefined
    },
    {
      title: 'Yatra — AI-Powered Travel Booking Platform',

      description:
        '✈️ Full-stack travel booking application with intelligent trip planning and modern user experience',

      longDescription:
        'Built a comprehensive travel booking platform that enables users to explore destinations, search travel packages, and manage bookings through an intuitive interface. The application focuses on delivering a seamless travel planning experience with secure authentication, responsive design, scalable backend APIs, and a modern full-stack architecture.',

      icon: <Globe className="h-6 w-6" />,

      tech: [
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'Prisma',
        'Convex',
        'Tailwind CSS',
        'JWT',
        'REST API'
      ],

      features: [
        'Browse and discover travel destinations and packages',
        'User authentication and secure account management',
        'Responsive and modern UI for desktop and mobile devices',
        'Scalable backend with structured API architecture',
        'Efficient data management using modern database tooling',
        'Clean full-stack design with extensible project structure'
      ],

      categories: ['Full Stack'],

      status: 'Completed',

      achievement: '🌍 Modern Travel Booking Platform',

      github: 'https://github.com/DhruviBhuva17/yatra',

      live: undefined
    },
    {
      title: 'AI Splitwise Clone — Smart Expense Management Platform',

      description:
        '💰 AI-powered expense splitting application for tracking shared expenses, balances, and settlements with an intuitive modern interface.',

      longDescription:
        'Built a full-stack Splitwise-inspired application that helps users manage shared expenses, split bills, and monitor balances across groups and individuals. The platform leverages modern web technologies to provide a responsive user experience, real-time data synchronization, and AI-assisted workflows for efficient expense management and financial collaboration.',

      icon: <Bot className="h-6 w-6" />,

      tech: [
        'Next.js',
        'React',
        'TypeScript',
        'Convex',
        'Tailwind CSS',
        'Shadcn UI',
        'Inngest',
        'AI Integration'
      ],

      features: [
        'Create and manage shared expenses with friends and groups',
        'Real-time balance tracking and settlement calculations',
        'AI-assisted expense management workflows',
        'Responsive dashboard with modern UI components',
        'Scalable full-stack architecture using Convex backend',
        'Clean and intuitive interface for collaborative finance management'
      ],

      categories: ['AI/ML', 'Full Stack'],

      status: 'Completed',

      achievement: '💸 AI-Enhanced Expense Sharing Platform',

      github: 'https://github.com/DhruviBhuva17/splitwise',

      live: undefined
    },
    {
      title: 'AI Career Coach — Intelligent Career Guidance Platform',

      description:
        '🎯 AI-powered career assistant for resume optimization, cover letter generation, interview preparation, and personalized career insights.',

      longDescription:
        'Built a full-stack AI Career Coach application that helps users accelerate their job search with personalized, AI-driven tools. The platform provides resume enhancement, tailored cover letter generation, mock interview preparation, industry insights, and career recommendations using Google Gemini AI. It features secure authentication, a modern responsive interface, and scalable backend architecture powered by Next.js and Prisma.',

      icon: <Globe className="h-6 w-6" />,

      tech: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Prisma',
        'Neon PostgreSQL',
        'Google Gemini AI',
        'Clerk Authentication',
        'Inngest',
        'Shadcn UI',
        'JavaScript'
      ],

      features: [
        'AI-powered resume improvement and ATS optimization',
        'Personalized cover letter generation based on job descriptions',
        'Mock interview quizzes with AI-generated questions and feedback',
        'Industry insights and career guidance powered by Gemini AI',
        'Secure user authentication and onboarding with Clerk',
        'Modern responsive dashboard with PostgreSQL and Prisma-backed data management'
      ],

      categories: ['AI/ML', 'Full Stack'],

      status: 'Completed',

      achievement: '🚀 End-to-End AI Career Development Platform',

      github: 'https://github.com/DhruviBhuva17/AIspire',

      live: undefined
    },
    {
      title: 'Real Estate Price Prediction — ML-Based Property Valuation System',

      description:
        '🏡 Machine learning application that predicts real estate prices using property features and data-driven regression models.',

      longDescription:
        'Developed a real estate price prediction system that leverages machine learning techniques to estimate property values based on key attributes such as location, area, number of bedrooms, bathrooms, and other housing characteristics. The project includes data preprocessing, feature engineering, model training, and an interactive interface for generating instant price predictions, making it useful for buyers, sellers, and real estate analysts.',

      icon: <Bot className="h-6 w-6" />,

      tech: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Flask',
        'HTML',
        'CSS',
        'JavaScript'
      ],

      features: [
        'Predicts property prices using trained machine learning models',
        'Performs data cleaning and feature engineering for improved accuracy',
        'Supports user input for property attributes and instant predictions',
        'Interactive web interface built with Flask and frontend technologies',
        'Uses regression-based algorithms for house price estimation',
        'Provides a scalable foundation for future analytics and visualization enhancements'
      ],

      categories: ['AI/ML'],

      status: 'Completed',

      achievement: '📈 AI-Driven Real Estate Price Prediction',

      github: 'https://github.com/DhruviBhuva17/Real-Estate-Price-Prediction-main',

      live: undefined
    },
    {
      title: 'Social Media Analysis — Data Analytics & Sentiment Intelligence Platform',

      description:
        '📊 Machine learning–based social media analysis system for uncovering trends, engagement metrics, and sentiment insights.',

      longDescription:
        'Developed a data analytics platform that processes social media datasets to extract meaningful insights through data preprocessing, visualization, and machine learning techniques. The project focuses on identifying user engagement patterns, sentiment trends, and content performance using statistical analysis and interactive visualizations, enabling data-driven decision-making.',

      icon: <Bot className="h-6 w-6" />,

      tech: [
        'Python',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Scikit-learn',
        'Jupyter Notebook',
        'Data Visualization',
        'Machine Learning'
      ],

      features: [
        'Performs preprocessing and cleaning of social media datasets',
        'Analyzes user engagement and content performance metrics',
        'Applies machine learning techniques for sentiment and trend analysis',
        'Generates visual reports and charts for better data interpretation',
        'Supports exploratory data analysis (EDA) with statistical insights',
        'Provides actionable insights for social media strategy and decision-making'
      ],

      categories: ['AI/ML'],

      status: 'Completed',

      achievement: '📈 AI-Driven Social Media Analytics Dashboard',

      github: 'https://github.com/DhruviBhuva17/social-media-analysis-main',

      live: undefined
    }
  ];

  const categories = ['All', 'Full Stack', 'AI/ML'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeCategory));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return <Bot className="h-4 w-4" />;
      case 'Full Stack': return <Globe className="h-4 w-4" />;
      case 'Web Development': return <Code className="h-4 w-4" />;
      case 'Data Science': return <Sparkles className="h-4 w-4" />;
      default: return <Code className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time AI-powered platforms, and full-stack applications
            showcasing technical depth and real-world impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="flex items-center gap-2"
            >
              {category !== 'All' && getCategoryIcon(category)}
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-full cursor-pointer">
                    <SpotlightCard className="h-full hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden flex flex-col">
                      {getThumbnail(project.categories, project.icon)}
                      <CardHeader>
                        <div className="flex flex-col items-end gap-1 mb-2">
                          <Badge variant={project.status === 'Active' ? 'default' : 'secondary'} className="text-xs">{project.status}</Badge>
                          {'achievement' in project && project.achievement && <Badge variant="outline" className="text-xs bg-yellow-500/10 border-yellow-500/20">{project.achievement}</Badge>}
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-3 mt-auto">
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech) => <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>)}
                          {project.tech.length > 3 && <Badge variant="outline" className="text-xs">+{project.tech.length - 3} more</Badge>}
                        </div>
                        <Button variant="default" size="sm" className="w-full">
                          View Details
                        </Button>
                      </CardContent>
                    </SpotlightCard>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      {project.icon}
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{project.longDescription}</p>
                    <div>
                      <h4 className="mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4">
                      {'github' in project && project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button className="w-full"><Github className="mr-2 h-4 w-4" />View Code</Button>
                        </a>
                      ) : (
                        <Button disabled className="flex-1"><Github className="mr-2 h-4 w-4" />Code Private</Button>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" className="w-full"><ExternalLink className="mr-2 h-4 w-4" />Live Demo</Button>
                        </a>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
