import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Video, Users, Database, BarChart, Info, Brain, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const FlippedLearningModel = () => {
  const [step, setStep] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const steps = [
    {
      title: 'Pre-class',
      icon: Video,
      content: 'Students engage with multimedia content and interactive simulations.',
      data: 'Adaptive content completion: 92%',
      details: 'Incorporates spaced repetition and retrieval practice to enhance long-term retention.',
      color: 'bg-pink-200'
    },
    {
      title: 'Data Collection',
      icon: Database,
      content: 'AI-driven system collects multidimensional data on student learning patterns.',
      data: 'Neural network data points: 5000+',
      details: 'Utilizes machine learning to identify cognitive load and emotional states during learning.',
      color: 'bg-purple-200'
    },
    {
      title: 'In-class',
      icon: Users,
      content: 'Students engage in peer instruction and collaborative problem-solving.',
      data: 'Peer learning effectiveness: 89%',
      details: 'Implements dynamic grouping based on complementary strengths and learning needs.',
      color: 'bg-blue-200'
    },
    {
      title: 'Post-class',
      icon: BookOpen,
      content: 'Students complete personalized assignments and reflective journaling.',
      data: 'Metacognitive growth: 76%',
      details: 'Utilizes AI-generated prompts to encourage deep reflection and knowledge transfer.',
      color: 'bg-green-200'
    },
    {
      title: 'Analysis',
      icon: BarChart,
      content: 'Advanced analytics provide insights for curriculum design and teaching strategies.',
      data: 'Predictive accuracy: 94%',
      details: 'Employs learning analytics dashboards for real-time instructional decision-making.',
      color: 'bg-yellow-200'
    },
    {
      title: 'Cognitive Enhancement',
      icon: Brain,
      content: 'Integration of neuroscience-based techniques to optimize learning.',
      data: 'Cognitive performance boost: 31%',
      details: 'Incorporates mindfulness exercises and cognitive training to enhance focus and memory.',
      color: 'bg-red-200'
    },
    {
      title: 'Adaptive Personalization',
      icon: Zap,
      content: 'Dynamic content adaptation based on individual learning trajectories.',
      data: 'Personalization accuracy: 97%',
      details: 'Uses reinforcement learning algorithms to continuously optimize learning pathways.',
      color: 'bg-orange-200'
    }
  ];

  const nextStep = () => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
    setShowDetails(false);
  };

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-800">Advanced Data-Enhanced Flipped Learning Model</h2>
      <Progress value={(step + 1) / steps.length * 100} className="mb-4" />
      <Card className={`mb-4 ${steps[step].color}`}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-indigo-900">
            <span className="flex items-center">
              {React.createElement(steps[step].icon, { className: "mr-2" })}
              {steps[step].title}
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={toggleDetails}>
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-indigo-800">{steps[step].content}</p>
          <p className="text-sm text-indigo-600 mb-2">{steps[step].data}</p>
          {showDetails && (
            <p className="text-sm bg-white bg-opacity-50 p-2 rounded text-indigo-700">{steps[step].details}</p>
          )}
        </CardContent>
      </Card>
      <Button onClick={nextStep} className="w-full bg-indigo-600 hover:bg-indigo-700">
        Next Step <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default FlippedLearningModel;
