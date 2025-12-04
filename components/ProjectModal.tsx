'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check, Play } from 'lucide-react';
import { Project } from '@/data/projects';
import { Button } from './ui/Button';
import { ImageGallery } from './ImageGallery';
import { cn } from '@/lib/utils';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [showImageGallery, setShowImageGallery] = React.useState(false);
  const [galleryIndex, setGalleryIndex] = React.useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!project) return null;

  const categoryLabels: Record<string, string> = {
    'product-landing': 'Product Landing Page',
    'saas': 'SaaS Application',
    'ecommerce': 'E-commerce',
    'custom': 'Custom Solution',
  };

  const openImageGallery = (index: number) => {
    setGalleryIndex(index);
    setShowImageGallery(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="glass-strong backdrop-blur-xl rounded-2xl p-6 md:p-8 lg:p-12 max-w-6xl mx-auto border border-white/20">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 glass backdrop-blur-md rounded-full hover:scale-110 transition-transform z-10 border border-white/15"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-white" />
                </button>

                {/* Hero Image */}
                <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden cursor-pointer group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 glass-strong backdrop-blur-xl rounded-full text-sm font-medium text-white border border-white/20">
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  {project.videoUrl && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="p-4 glass-strong backdrop-blur-xl rounded-full border border-white/20">
                        <Play size={32} className="text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Title and Links */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <h2 id="modal-title" className="text-4xl md:text-5xl font-bold text-white">{project.title}</h2>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="primary" size="sm">
                            <ExternalLink size={18} className="mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" size="sm">
                            <Github size={18} className="mr-2" />
                            Code
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-white/80 leading-relaxed">{project.fullDescription}</p>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass backdrop-blur-md rounded-lg text-white/90 font-medium border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80">
                          <Check size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges Solved */}
                  {project.challengesSolved && project.challengesSolved.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Challenges Solved</h3>
                      <ul className="space-y-2">
                        {project.challengesSolved.map((challenge, index) => (
                          <li key={index} className="text-white/70 flex items-start gap-3">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Results */}
                  {project.results && project.results.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {project.results.map((result, index) => (
                          <div key={index} className="glass backdrop-blur-md p-4 rounded-lg text-center border border-white/10">
                            <div className="text-3xl font-bold gradient-text mb-1">
                              {result.value}
                            </div>
                            <div className="text-white/70 text-sm">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Image Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => openImageGallery(index)}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonial */}
                  {project.testimonial && (
                    <div className="glass backdrop-blur-md p-6 rounded-xl border border-white/15">
                      <p className="text-white/90 text-lg italic mb-4">&ldquo;{project.testimonial.quote}&rdquo;</p>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-semibold text-white">{project.testimonial.author}</div>
                          <div className="text-white/60 text-sm">
                            {project.testimonial.role}
                            {project.testimonial.company && ` at ${project.testimonial.company}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Image Gallery Modal */}
      {project.images && project.images.length > 0 && (
        <ImageGallery
          images={project.images}
          title={project.title}
          isOpen={showImageGallery}
          onClose={() => setShowImageGallery(false)}
          initialIndex={galleryIndex}
        />
      )}
    </>
  );
};

