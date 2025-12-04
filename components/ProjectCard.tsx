'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project } from '@/data/projects';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onViewDetails }) => {
  const categoryLabels: Record<string, string> = {
    'product-landing': 'Product Landing',
    'saas': 'SaaS',
    'ecommerce': 'E-commerce',
    'custom': 'Custom',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card hover className="h-full flex flex-col group overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              {categoryLabels[project.category]}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-strong rounded-lg hover:scale-110 transition-transform"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} className="text-white" />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-strong rounded-lg hover:scale-110 transition-transform"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} className="text-white" />
              </Link>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/70 mb-4 flex-1">{project.shortDescription}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/10 rounded text-xs text-white/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="mb-4 flex gap-4 text-sm">
              {project.results.slice(0, 2).map((result, idx) => (
                <div key={idx} className="text-white/60">
                  <span className="font-semibold text-white">{result.value}</span> {result.metric}
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => onViewDetails(project)}
          >
            <Eye size={18} className="mr-2" />
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

