import React from 'react';
import { CANDIDATE_PROFILE } from '../data/architectureData';
import {
  ArrowLeft,
  Mail,
  Phone,
  Github,
  Check,
  Copy,
  Terminal,
  Cpu,
  Sparkles,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code,
  Cloud,
  Palette,
  Globe,
  FolderGit,
  Star,
  Link,
} from 'lucide-react';

interface BehindTheScenesProps {
  onBack: () => void;
  onShowToast?: (title: string, message: string, type: 'success' | 'error' | 'info' | 'warning') => void;
}

export const BehindTheScenes: React.FC<BehindTheScenesProps> = ({ onBack, onShowToast }) => {
  const [copiedContact, setCopiedContact] = React.useState(false);

  const handleCopyContact = async () => {
    const text = `Bruno Sebastian Sturniolo - Backend Developer con Cultura DevOps
Email: ${CANDIDATE_PROFILE.email}
Teléfono: ${CANDIDATE_PROFILE.phone}
GitHub: ${CANDIDATE_PROFILE.githubUrl}
Repositorio Proyecto: ${CANDIDATE_PROFILE.repositoryUrl}
Especialidad: Aplicaciones ligeras, económicas y de alto rendimiento (Java/Spring Boot, RUP, modelado BCE, persistencia híbrida, microservicios en contenedores)`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedContact(true);
      onShowToast?.('Contacto copiado', 'Datos profesionales copiados al portapapeles.', 'success');
      setTimeout(() => setCopiedContact(false), 2500);
    } catch {
      onShowToast?.('Error al copiar', 'No se pudo copiar al portapapeles.', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">

      {/* Top Bar Minimalista */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
            <span>Volver a la Wallet</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyContact}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white transition-all cursor-pointer shadow-sm"
              title="Copiar información de contacto"
            >
              {copiedContact ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedContact ? '¡Copiado!' : 'Copiar Contacto'}</span>
            </button>
            <a
              href={CANDIDATE_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Perfil de GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content: Minimalista y Directo */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 space-y-10">

        {/* 1. HERO "SOBRE MÍ": PERFIL DIRECTO Y CULTURA DEVOPS */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/20 border border-emerald-500/20 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Portfolio Profesional · Sobre el Desarrollo
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {CANDIDATE_PROFILE.fullName}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-emerald-300 mt-1">
                {CANDIDATE_PROFILE.headline}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {CANDIDATE_PROFILE.tagline}
              </p>
            </div>

            {/* Quick Badges de Eficiencia */}
            <div className="flex flex-wrap sm:flex-col gap-2 sm:items-end text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                Costos de Infraestructura: Altamente optimizados y escalables
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                Persistencia: Híbrida (Relacional y No Relacional)
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono text-[11px]">
                Arquitectura: Despliegues serverless / Nube ligera
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed max-w-4xl">
            {CANDIDATE_PROFILE.summary}
          </p>

          {/* Métricas de Eficiencia Ágiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800/80">
            {CANDIDATE_PROFILE.efficiencyMetrics.map((metric, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-emerald-500/30 transition-colors">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                  {metric.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block truncate">
                  {metric.val}
                </span>
                <span className="text-[10px] text-emerald-400 mt-0.5 block truncate">
                  {metric.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. EXPERIENCIA LABORAL */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Experiencia Profesional
            </h2>
          </div>

          <div className="space-y-4">
            {CANDIDATE_PROFILE.workExperience.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-colors space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                    <p className="text-xs text-emerald-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded-lg whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.split(', ').map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EDUCACIÓN */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Formación Académica
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-white">{CANDIDATE_PROFILE.education.degree}</h3>
                <p className="text-xs text-cyan-400 font-semibold">{CANDIDATE_PROFILE.education.university}</p>
              </div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded-lg whitespace-nowrap">
                {CANDIDATE_PROFILE.education.period}
              </span>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Enfoque</p>
              <p className="text-xs text-slate-300">{CANDIDATE_PROFILE.education.focus}</p>
            </div>
            <p className="text-xs text-emerald-300/80 italic">{CANDIDATE_PROFILE.education.highlight}</p>
          </div>
        </section>

        {/* 4. HABILIDADES TÉCNICAS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-purple-400" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Habilidades Técnicas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Backend */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-colors space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Backend & Core</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CANDIDATE_PROFILE.skills.backend.map((skill, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <Cloud className="w-4 h-4" />
                <span>DevOps & Cloud</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CANDIDATE_PROFILE.skills.devops.map((skill, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/30 transition-colors space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                <Palette className="w-4 h-4" />
                <span>Frontend & AI</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CANDIDATE_PROFILE.skills.frontend.map((skill, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Idiomas */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-colors space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>Idiomas</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {CANDIDATE_PROFILE.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-medium text-white">{lang.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PROYECTOS DESTACADOS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FolderGit className="w-4 h-4 text-amber-400" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Proyectos Destacados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CANDIDATE_PROFILE.projects.map((project, idx) => (
              <div key={idx} className="group p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-all space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-[10px] text-amber-400 font-semibold mt-0.5">{project.role}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlight */}
                <p className="text-[11px] text-emerald-300/80 italic border-l-2 border-emerald-500/30 pl-3">
                  {project.highlight}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <Link className="w-3.5 h-3.5" />
                    <span>Ver Proyecto</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repositorio</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FILOSOFÍA DEL PROYECTO: BACKEND ARTESANAL VS FRONTEND CON IA */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Filosofía del Proyecto: Rigor en Backend &amp; Aceleración con IA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tarjeta 1: Backend Artesanal */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-colors space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Backend: Diseñado a Mano (RUP &amp; BCE)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Construido paso a paso mediante iteraciones estructuradas, priorizando el control absoluto de recursos y seguridad:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                {CANDIDATE_PROFILE.backendHighlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjeta 2: Frontend con IA */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Frontend: IA Guiada con Criterio DevOps</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                La interfaz fue desarrollada guiando a la inteligencia artificial bajo directrices avanzadas de estabilidad y red:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                {CANDIDATE_PROFILE.frontendHighlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. DATOS DE CONTACTO CLAVE (PIE DE PÁGINA PROFESIONAL) */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950/20 border border-emerald-500/30 text-center space-y-4 shadow-xl">
          <div className="max-w-xl mx-auto space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Datos de Contacto Profesional
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {CANDIDATE_PROFILE.fullName}
            </h3>
            <p className="text-xs text-slate-400">
              Disponible para proyectos de backend, optimización de infraestructura y desafíos DevOps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-2">
            {/* Email */}
            <a
              href={`mailto:${CANDIDATE_PROFILE.email}`}
              className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col items-center justify-center gap-1.5 text-center group"
            >
              <Mail className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Correo Electrónico</span>
              <span className="text-xs font-medium text-white truncate max-w-full">
                {CANDIDATE_PROFILE.email}
              </span>
            </a>

            {/* Teléfono */}
            <a
              href={`tel:${CANDIDATE_PROFILE.phone.replace(/[\s-]/g, '')}`}
              className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col items-center justify-center gap-1.5 text-center group"
            >
              <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Teléfono / WhatsApp</span>
              <span className="text-xs font-mono font-medium text-white">
                {CANDIDATE_PROFILE.phone}
              </span>
            </a>

            {/* GitHub */}
            <a
              href={CANDIDATE_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col items-center justify-center gap-1.5 text-center group"
            >
              <Github className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-slate-400 uppercase font-semibold">GitHub Profile</span>
              <span className="text-xs font-medium text-white flex items-center gap-1">
                <span>brunosebastiansturniolo</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </span>
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyContact}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-950/40 cursor-pointer flex items-center gap-1.5"
            >
              {copiedContact ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedContact ? '¡Datos Copiados!' : 'Copiar Información de Contacto'}</span>
            </button>

            <button
              onClick={onBack}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la Interfaz de la Wallet</span>
            </button>
          </div>
        </section>

      </main>

      {/* Footer Minimalista */}
      <footer className="border-t border-slate-900 bg-slate-950 py-5 text-center text-xs text-slate-500">
        <p>
          {CANDIDATE_PROFILE.fullName} · {CANDIDATE_PROFILE.headline} · Infraestructura Serverless Moderna
        </p>
      </footer>

    </div>
  );
};
