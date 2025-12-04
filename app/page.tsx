'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ProjectFilter } from '@/components/ProjectFilter';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { Categories } from '@/components/Categories';
import { Features } from '@/components/Features';
import { TechStack } from '@/components/TechStack';
import { Testimonials } from '@/components/Testimonials';
import { StatsCounter } from '@/components/StatsCounter';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { projects, ProjectCategory, Project } from '@/data/projects';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: projects.length,
      'product-landing': projects.filter(p => p.category === 'product-landing').length,
      'saas': projects.filter(p => p.category === 'saas').length,
      'ecommerce': projects.filter(p => p.category === 'ecommerce').length,
      'custom': projects.filter(p => p.category === 'custom').length,
    };
    return counts;
  }, []);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Explore some of my recent work showcasing modern web development and design.
            </p>
          </AnimatedSection>

          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            projectCounts={projectCounts}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <AnimatedSection>
              <div className="text-center py-12">
                <p className="text-white/60 text-lg">No projects found in this category.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <Categories />
      <Features />
      <TechStack />

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatsCounter value="10+" label="Projects Delivered" />
              <StatsCounter value="100%" label="Client Satisfaction" />
              <StatsCounter value="24/7" label="Support Available" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-strong rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Ready to start your project?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to bring your vision to life. Get in touch to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <Button size="lg" className="text-lg px-8 py-4">
                    View Pricing
                  </Button>
                </Link>
                <Link href="/pricing#contact">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

