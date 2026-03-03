/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Timer, Play, Dumbbell, Activity, Target, Zap, Footprints, CircleDot, CheckCircle2, Menu, X, Utensils, Clock, Rocket, ChevronRight, Check, BellOff, Sun, Moon, Droplets, Brain, Lock } from 'lucide-react';
import { WORKOUTS } from './constants';
import { WorkoutBlock } from './types';

type Product = 'DESAFIO' | 'NUTRI' | '5AM' | 'COMUNIDADE';

const workoutIcons: Record<string, string> = {
  A: 'https://res.cloudinary.com/duzntztaw/image/upload/v1772513324/Treino_Superiores_nofgm1.png',
  B: 'https://res.cloudinary.com/duzntztaw/image/upload/v1772513324/Treino_Inferiores_izkxdo.png',
  C: 'https://res.cloudinary.com/duzntztaw/image/upload/v1772513351/Treino_De_Pernas_2_s5vcob.png',
  D: 'https://res.cloudinary.com/duzntztaw/image/upload/v1772513324/Abdomen_zfxfqd.png'
};

const CrocodileIcon = ({ className }: { className?: string }) => (
  <img 
    src="https://res.cloudinary.com/duzntztaw/image/upload/v1772511786/Logo_Jacare_Time_Hibrido_ahgibh.png" 
    alt="Logo Jacaré Time Híbrido"
    className={`${className} object-contain scale-[0.8]`}
    referrerPolicy="no-referrer"
  />
);

// --- Modo Híbrido 5AM Components ---

const NightChecklist = () => {
  const tasks = [
    { id: 'sleep-time', title: 'Definir horário de dormir', purpose: 'Alinhar o corpo com o relógio biológico' },
    { id: 'screens-off', title: 'Desligar telas 30 min antes', purpose: 'Reduzir estímulo mental e luz azul' },
    { id: 'prep-clothes', title: 'Preparar roupa e garrafinha', purpose: 'Diminuir atrito e fricção ao acordar' },
    { id: 'warm-shower', title: 'Tomar banho morno', purpose: 'Sinalizar relaxamento pro sistema nervoso' },
    { id: 'dark-room', title: 'Quarto escuro e organizado', purpose: 'Eliminar distrações e ruído visual' },
    { id: 'breathing', title: '2 min de respiração ou silêncio', purpose: 'Ativar o modo desligamento consciente' },
    { id: 'sleep-intent', title: 'Dormir com intenção', purpose: 'Entrar no sono com propósito e foco' },
  ];

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <label key={task.id} className="flex items-start gap-4 p-5 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-primary/20 transition-all duration-300 cursor-pointer group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
          <div className="relative flex items-center mt-1">
            <input type="checkbox" className="peer appearance-none w-6 h-6 rounded-lg border-2 border-white/10 checked:bg-primary checked:border-primary transition-all duration-300" />
            <Check className="absolute w-4 h-4 text-black opacity-0 peer-checked:opacity-100 left-1 transition-all duration-300 scale-50 peer-checked:scale-100" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-black uppercase tracking-tight text-white/90 group-hover:text-primary transition-colors duration-300">{task.title}</p>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mt-1.5 font-bold">{task.purpose}</p>
          </div>
        </label>
      ))}
    </div>
  );
};

const MorningRitual = () => {
  const steps = [
    { 
      id: 'no-snooze', 
      title: 'Acordar sem soneca', 
      desc: 'A soneca é uma micro-desistência. Levantou? Já venceu a primeira batalha.',
      icon: BellOff,
      quote: 'Primeira decisão do dia: levanta e parte pro corre.'
    },
    { 
      id: 'natural-light', 
      title: 'Abrir a janela', 
      desc: 'A luz natural ativa seu cérebro e regula o relógio biológico.',
      icon: Sun,
      quote: 'Encare o dia de frente.'
    },
    { 
      id: 'hydrate-move', 
      title: 'Hidratação + Movimento', 
      desc: 'Água no sistema e 3 a 5 min de mobilidade. Ligue o motor.',
      icon: Droplets,
      quote: 'O foco aqui não é cansar — é ligar o motor.'
    },
    { 
      id: 'mindset', 
      title: 'Mentalidade: Frase do Dia', 
      desc: 'Palavras moldam comportamento. Escolha sua afirmação.',
      icon: Brain,
      quote: 'A disciplina me leva onde a motivação não chega.'
    },
    { 
      id: 'start-training', 
      title: 'Comece o Treino', 
      desc: 'Agora sim: treino na prática. Você está pronto.',
      icon: Zap,
      quote: 'Envie um comando pro universo: eu tô fazendo a minha parte.'
    },
  ];

  return (
    <div className="space-y-6">
      {steps.map((step, idx) => (
        <div key={step.id} className="relative pl-10 border-l-2 border-white/5 pb-10 last:pb-0">
          <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-dark border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(212,255,0,0.4)]">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
          <div className="bg-surface/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 shadow-xl hover:border-primary/20 transition-all duration-500 group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                <step.icon className="w-5 h-5 text-primary group-hover:text-black" />
              </div>
              <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.3em]">Fase {idx + 1}</span>
            </div>
            <h4 className="text-lg font-display font-black uppercase tracking-tight text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
            <p className="text-sm text-white/40 leading-relaxed mb-6 font-medium">{step.desc}</p>
            <div className="p-4 rounded-2xl bg-black/60 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/40"></div>
              <p className="italic text-xs text-primary/90 font-medium leading-relaxed">
                "{step.quote}"
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ModoHibrido5AM = () => {
  const [activeTab, setActiveTab] = useState<'night' | 'morning'>('morning');

  return (
    <div className="p-6 pb-40">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Protocolo 5AM</span>
        </div>
        <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-3 italic">Modo Híbrido</h2>
        <p className="text-xs text-white/40 uppercase tracking-[0.15em] font-bold max-w-[240px] mx-auto leading-relaxed">
          A preparação começa no silêncio. O ataque começa no escuro.
        </p>
      </div>

      {/* Tab Switcher - Premium Style */}
      <div className="flex p-1.5 bg-white/[0.03] rounded-[2rem] border border-white/5 mb-10 relative">
        <button 
          onClick={() => setActiveTab('night')}
          className={`flex-1 py-4 rounded-[1.8rem] text-[11px] font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 z-10 ${
            activeTab === 'night' ? 'text-black' : 'text-white/40 hover:text-white'
          }`}
        >
          <Moon className={`w-4 h-4 ${activeTab === 'night' ? 'text-black' : 'text-white/20'}`} />
          Preparation
        </button>
        <button 
          onClick={() => setActiveTab('morning')}
          className={`flex-1 py-4 rounded-[1.8rem] text-[11px] font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 z-10 ${
            activeTab === 'morning' ? 'text-black' : 'text-white/40 hover:text-white'
          }`}
        >
          <Sun className={`w-4 h-4 ${activeTab === 'morning' ? 'text-black' : 'text-white/20'}`} />
          Execution
        </button>
        <motion.div 
          layoutId="tab-bg"
          className="absolute inset-y-1.5 rounded-[1.8rem] bg-primary shadow-[0_0_20px_rgba(212,255,0,0.3)]"
          initial={false}
          animate={{ x: activeTab === 'night' ? 0 : '100%' }}
          style={{ width: 'calc(50% - 6px)', left: '6px' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: activeTab === 'night' ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {activeTab === 'night' ? (
          <>
            <div className="mb-8 p-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-primary/20 blur-[50px] rounded-full"></div>
              <p className="text-sm text-primary font-black uppercase tracking-widest mb-2 italic">The Night Shift</p>
              <p className="text-xs text-white/60 leading-relaxed font-medium">
                "Se você falha na preparação, está se preparando para falhar. Domine sua noite."
              </p>
            </div>
            <NightChecklist />
          </>
        ) : (
          <>
            <div className="mb-8 p-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-primary/20 blur-[50px] rounded-full"></div>
              <p className="text-sm text-primary font-black uppercase tracking-widest mb-2 italic">The 5AM Attack</p>
              <p className="text-xs text-white/60 leading-relaxed font-medium">
                "O mundo ainda dorme enquanto você constrói sua elite. Não há espaço para hesitação."
              </p>
            </div>
            <MorningRitual />
          </>
        )}
      </motion.div>

      <div className="mt-16 p-8 rounded-[3rem] bg-surface/40 border border-white/5 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <Brain className="w-10 h-10 text-primary/40 mx-auto mb-6 group-hover:scale-110 transition-transform duration-700" />
        <h5 className="text-sm font-black uppercase tracking-[0.3em] text-white mb-4">Mentalidade Híbrida</h5>
        <p className="text-xs text-white/30 leading-relaxed uppercase tracking-tight font-bold">
          Transforme disciplina em identidade. <br/>
          O que hoje é esforço, amanhã é automático. <br/>
          <span className="text-primary/60 mt-4 block tracking-[0.5em]">STOP BEING AVERAGE</span>
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [activeProduct, setActiveProduct] = useState<Product>('DESAFIO');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(WORKOUTS[0].id);
  const [isNutritionLocked, setIsNutritionLocked] = useState(true);
  const [isNutriModalOpen, setIsNutriModalOpen] = useState(false);
  const [isComunidadeModalOpen, setIsComunidadeModalOpen] = useState(false);

  const currentWorkout = WORKOUTS.find(w => w.id === selectedWorkoutId) || WORKOUTS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [selectedWorkoutId, activeProduct]);

  const products = [
    { 
      id: 'DESAFIO', 
      name: 'Desafio Atleta Híbrido', 
      locked: false,
      icon: ({ className }: { className?: string }) => (
        <img 
          src="https://res.cloudinary.com/duzntztaw/image/upload/v1772513701/Treino_Hibrido_th39js.png" 
          alt="Desafio Híbrido"
          className={`${className} object-contain scale-[1.4] ${activeProduct === 'DESAFIO' ? 'brightness-0' : 'opacity-60'}`}
          referrerPolicy="no-referrer"
        />
      ), 
      color: 'primary' 
    },
    { id: 'NUTRI', name: 'Guia Nutricional', icon: Utensils, color: 'orange-400', locked: isNutritionLocked },
    { id: '5AM', name: 'Modo Híbrido 5AM', icon: Clock, color: 'blue-400', locked: false },
    { id: 'COMUNIDADE', name: 'Comunidade Time Híbrido', icon: Target, color: 'red-500', locked: true },
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans pb-32 selection:bg-primary selection:text-black">
      {/* Header */}
      <header className="bg-dark/40 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-50 px-6 py-5">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(212,255,0,0.2)] border border-black/10">
              <CrocodileIcon className="text-black w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-display font-black tracking-tighter uppercase leading-none italic">Atleta Híbrido</h1>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40">
                  {activeProduct === 'DESAFIO' ? 'Performance' : activeProduct === 'NUTRI' ? 'Nutrição' : 'Disciplina'}
                </p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95 group"
          >
            <Menu className="w-5 h-5 text-primary group-hover:rotate-90 transition-transform duration-500" />
          </button>
        </div>
      </header>

      {/* Product Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-surface/90 backdrop-blur-2xl border-l border-white/10 z-[201] p-8 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.2)]">
                    <CrocodileIcon className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-sm font-display font-black uppercase tracking-[0.2em] italic">Ecossistema</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 active:scale-90 transition-transform"
                >
                  <X className="w-5 h-5 text-white/50" />
                </button>
              </div>

              <div className="flex-1 space-y-8 overflow-y-auto no-scrollbar">
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">Produtos Liberados</p>
                  {products.filter(p => !p.locked).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActiveProduct(p.id as Product);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-500 relative overflow-hidden group/item ${
                        activeProduct === p.id 
                          ? 'bg-primary/10 border-primary/30 shadow-[0_10px_30px_rgba(212,255,0,0.05)]' 
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/5'
                      }`}
                    >
                      {activeProduct === p.id && (
                        <motion.div 
                          layoutId="active-item-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                        />
                      )}
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 relative ${
                          activeProduct === p.id ? 'bg-primary text-black shadow-[0_0_20px_rgba(212,255,0,0.3)]' : 'bg-white/5 text-white/30 group-hover/item:text-white'
                        }`}>
                          <p.icon className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <span className={`text-sm font-black uppercase tracking-tight block transition-colors ${
                            activeProduct === p.id ? 'text-primary' : 'text-white/60'
                          }`}>
                            {p.name}
                          </span>
                          <span className="text-[10px] text-white/20 uppercase font-black tracking-widest mt-1 block">Acessar Agora</span>
                        </div>
                      </div>
                      {activeProduct === p.id && <ChevronRight className="w-5 h-5 text-primary" />}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">Outros Produtos</p>
                  {products.filter(p => p.locked).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        if (p.id === 'NUTRI') setIsNutriModalOpen(true);
                        if (p.id === 'COMUNIDADE') setIsComunidadeModalOpen(true);
                      }}
                      className="w-full flex items-center justify-between p-5 rounded-2xl border bg-white/[0.01] border-white/5 hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden group/item"
                    >
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-10 flex items-center justify-end pr-6">
                        <div className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center shadow-lg">
                          <Lock className="w-3 h-3 text-white/40" />
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 text-white/10 flex items-center justify-center transition-all duration-500 relative">
                          <p.icon className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <span className="text-sm font-black uppercase tracking-tight block text-white/40">
                            {p.name}
                          </span>
                          <span className="text-[10px] uppercase font-black tracking-widest mt-1 block text-white/10">
                            Acesso Bloqueado
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-10">
                <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-[40px] rounded-full"></div>
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-3 italic">Suporte VIP</p>
                  <p className="text-xs text-white/40 leading-relaxed font-medium mb-6">Dúvidas sobre os produtos? Fale com nosso time.</p>
                  <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-colors">
                    Instagram @victorpareto
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="max-w-md mx-auto px-4 pt-8">
        {activeProduct === 'DESAFIO' ? (
          <>
            {/* Workout Info */}
            <motion.div
              key={currentWorkout.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[1px] w-8 bg-primary"></div>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{currentWorkout.title}</span>
              </div>
              <h2 className="text-4xl font-display font-black text-white tracking-tighter uppercase leading-[0.9] mb-4">
                {currentWorkout.subtitle}
              </h2>
              <div className="flex items-center gap-4 text-white/40">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Personalizado</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Alta Intensidade</span>
                </div>
              </div>
            </motion.div>

            {/* Blocks List */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWorkout.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-10"
                >
                  {currentWorkout.blocks.map((block, index) => (
                    <WorkoutCard key={`${currentWorkout.id}-${block.id}`} block={block} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        ) : activeProduct === 'NUTRI' ? (
          <div className="py-12 px-6 relative">
            {isNutritionLocked && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-start pt-40 px-8 bg-dark/40 backdrop-blur-md rounded-[3rem]">
                <div className="w-20 h-20 rounded-[2.5rem] bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(249,115,22,0.2)]">
                  <Lock className="w-8 h-8 text-orange-500 animate-pulse" />
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-white mb-4 text-center italic">Acesso Restrito</h3>
                <p className="text-sm text-white/40 leading-relaxed text-center font-medium mb-10 max-w-[240px]">
                  Este guia é exclusivo para membros da elite. Desbloqueie para acessar seu plano alimentar.
                </p>
                <button 
                  onClick={() => setIsNutritionLocked(false)}
                  className="w-full py-5 rounded-[2rem] bg-orange-500 text-black text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-3"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  Desbloquear Guia Nutri
                </button>
                
                <div className="mt-8 flex items-center gap-2 opacity-20">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-white">Protocolo de Segurança Ativo</span>
                </div>
              </div>
            )}

            <div className={`${isNutritionLocked ? 'opacity-20 grayscale pointer-events-none' : ''} transition-all duration-1000`}>
              <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/10">
                <Utensils className="w-4 h-4 text-orange-400" />
                <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em]">Em Desenvolvimento</span>
              </div>
              <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-4 italic">Guia Nutri</h2>
              <p className="text-sm text-white/40 leading-relaxed max-w-[280px] mx-auto font-medium">
                O combustível de elite para sustentar sua evolução híbrida.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { name: 'Café da Manhã', time: '06:30', icon: Sun },
                { name: 'Almoço Híbrido', time: '12:30', icon: Utensils },
                { name: 'Pré-Treino Elite', time: '17:00', icon: Zap },
                { name: 'Jantar Recuperação', time: '20:30', icon: Moon }
              ].map((meal, idx) => (
                <div key={meal.name} className="p-6 rounded-[2rem] bg-surface/40 border border-white/5 flex items-center justify-between group hover:border-orange-500/20 transition-all duration-500">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">
                      <meal.icon className="w-6 h-6 text-white/20 group-hover:text-black" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-1">Refeição {idx + 1}</span>
                      <span className="text-sm font-black text-white uppercase tracking-tight">{meal.name}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-orange-400/40 block mb-1 uppercase tracking-widest">Horário</span>
                    <span className="text-xs font-bold text-white/60">{meal.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-[2.5rem] bg-orange-500/5 border border-orange-500/10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 blur-[40px] rounded-full"></div>
              <h5 className="text-[11px] font-black text-orange-400 uppercase tracking-[0.3em] mb-3 italic">Aviso Importante</h5>
              <p className="text-xs text-white/40 leading-relaxed font-medium">
                Este módulo está sendo finalizado com as melhores estratégias nutricionais do mercado. Fique atento.
              </p>
            </div>
            </div>
          </div>
        ) : (
          <ModoHibrido5AM />
        )}
      </main>

      {/* Footer Branding */}
      <footer className="max-w-md mx-auto px-4 py-16 text-center mb-10">
        <div className="relative p-10 rounded-2xl bg-gradient-to-br from-surface to-dark border border-white/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
          <CrocodileIcon className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
          <h3 className="text-white text-3xl font-display font-black mb-3 tracking-tighter uppercase italic">TIME HÍBRIDO</h3>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold leading-relaxed max-w-[200px] mx-auto">
            Não ande sozinho nessa jornada. Evolua de verdade.
          </p>
        </div>
      </footer>

      {/* Modals for Locked Products */}
      <AnimatePresence>
        {isNutriModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNutriModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm bg-surface border border-white/10 rounded-[3rem] p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full -mr-16 -mt-16"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-orange-500" />
              </div>
              
              <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-white mb-4 italic">Desbloquear Guia Nutri</h3>
              
              <div className="p-5 rounded-2xl bg-orange-500/5 border border-orange-500/10 mb-8">
                <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-2">Oferta Promocional</p>
                <p className="text-sm text-white/60 leading-relaxed font-medium">
                  Acesse agora o plano alimentar completo com <span className="text-white font-black">50% de desconto</span>. O combustível que falta para o seu resultado.
                </p>
              </div>
              
              <button 
                onClick={() => {
                  setIsNutritionLocked(false);
                  setIsNutriModalOpen(false);
                  setActiveProduct('NUTRI');
                  setIsMenuOpen(false);
                }}
                className="w-full py-5 rounded-[2rem] bg-orange-500 text-black text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-3"
              >
                Aproveitar Oferta
              </button>
              
              <button 
                onClick={() => setIsNutriModalOpen(false)}
                className="w-full py-4 mt-2 text-[10px] font-black text-white/20 uppercase tracking-widest hover:text-white/40 transition-colors"
              >
                Talvez mais tarde
              </button>
            </motion.div>
          </div>
        )}

        {isComunidadeModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsComunidadeModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-gradient-to-b from-[#2a1a10] to-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-900/20 blur-[60px] rounded-full -mr-20 -mt-20"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🎯</span>
                <h3 className="text-lg font-display font-black uppercase tracking-tight text-white leading-tight">
                  Ao entrar na comunidade, <br/> você recebe:
                </h3>
              </div>
              
              <div className="space-y-5 mb-10">
                {[
                  { text: 'Treinos híbridos novos com ajustes semanais (Corrida + Musculação)' },
                  { text: 'Acompanhamento contínuo com evolução programada' },
                  { text: 'Grupo fechado com atletas híbridos de todo o Brasil' },
                  { text: 'Suporte e orientação para manter o foco no seu objetivo' },
                  { text: 'Acesso a conteúdos, desafios e encontros exclusivos' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(22,163,74,0.4)]">
                      <Check className="w-3 h-3 text-white stroke-[4]" />
                    </div>
                    <p className="text-[11px] text-white/80 font-black uppercase tracking-tight leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mb-10 px-4">
                <p className="text-[10px] text-white/50 uppercase font-black tracking-widest leading-relaxed">
                  <span className="text-lg block mb-2">📍</span> 
                  Você já deu o <span className="text-white">primeiro passo</span>. <br/>
                  Agora é hora de seguir firme com um time que te <span className="text-white">puxa pra cima</span> todos os dias.
                </p>
              </div>
              
              <button 
                onClick={() => {
                  window.open('https://pay.kiwify.com.br/xxxxx', '_blank');
                  setIsComunidadeModalOpen(false);
                }}
                className="w-full py-5 rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-3"
              >
                Quero Fazer Parte
              </button>

              <button 
                onClick={() => setIsComunidadeModalOpen(false)}
                className="w-full py-4 mt-2 text-[9px] font-black text-white/20 uppercase tracking-[0.3em] hover:text-white/40 transition-colors"
              >
                Fechar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {activeProduct === 'DESAFIO' && (
        <nav className="fixed bottom-8 left-0 right-0 z-[100] px-10">
          <div className="max-w-[280px] mx-auto flex flex-col items-center">
            {/* Extended Micro-Header (Tab Style) */}
            <div className="bg-surface/40 backdrop-blur-xl border-t border-x border-white/10 rounded-t-xl px-4 py-1.5 flex items-center gap-2 shadow-lg">
              <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[6px] font-black text-white/40 uppercase tracking-[0.4em]">Seletor de Treinos</span>
            </div>
            
            <div className="w-full bg-surface/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-1 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] flex justify-between items-center">
              {WORKOUTS.map((workout) => {
                const iconUrl = workoutIcons[workout.id];
                const isActive = selectedWorkoutId === workout.id;
                return (
                  <button
                    key={workout.id}
                    onClick={() => setSelectedWorkoutId(workout.id)}
                    className="flex-1 flex flex-col items-center justify-center py-1 relative group/nav"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 overflow-hidden ${
                      isActive 
                        ? 'bg-primary shadow-[0_0_20px_rgba(212,255,0,0.3)] scale-105' 
                        : 'bg-transparent hover:bg-white/5'
                    }`}>
                      <img 
                        src={iconUrl} 
                        alt={`Treino ${workout.id}`}
                        className={`w-7 h-7 object-contain transition-all duration-500 ${
                          isActive ? 'brightness-0' : 'opacity-30 grayscale group-hover/nav:opacity-100'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {isActive && (
                      <motion.div 
                        layoutId="active-nav-indicator"
                        className="absolute -bottom-0.5 w-4 h-1 bg-primary rounded-full shadow-[0_0_10px_#d4ff00]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

function WorkoutCard({ block, index }: { block: WorkoutBlock; index: number; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        damping: 20
      }}
      className="relative"
    >
      {/* Block Number Indicator - Brutalist Style */}
      <div className="absolute -left-3 -top-5 z-20">
        <div className="bg-primary text-black font-display font-black text-[10px] px-4 py-1.5 rounded-sm skew-x-[-12deg] shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase tracking-widest border border-black">
          Bloco {String(block.id).padStart(2, '0')}
        </div>
      </div>

      <div className="bg-surface/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group hover:border-primary/20 transition-all duration-500">
        <div className="p-8 pt-10">
          {/* Header Info */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-[1px] bg-primary/40"></div>
                <span className="text-[7px] font-black text-white/30 uppercase tracking-[0.4em]">Especificação Técnica</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#d4ff00]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/90">
                  {block.type}
                </span>
                <div className="flex gap-1 ml-1 opacity-40">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-0.5 h-0.5 rounded-full ${i <= 2 ? 'bg-primary' : 'bg-white/20'}`}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden xs:flex flex-col items-end gap-1 mr-2">
                <span className="text-[6px] font-black text-white/20 uppercase tracking-widest">System ID</span>
                <span className="text-[8px] font-mono text-white/40 tracking-tighter">AH-{String(block.id).padStart(2, '0')}-{block.type.substring(0, 3)}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/5 shrink-0">
                <Timer className="w-3 h-3 text-primary" />
                <span className="text-[11px] font-black text-white/90 tracking-tight whitespace-nowrap">{block.interval}</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-display font-black text-white mb-4 tracking-tighter uppercase leading-[1.1] group-hover:text-primary transition-colors duration-500">
            {block.title.split(' - ')[1] || block.title}
          </h3>
          
          <p className="text-sm text-white/40 font-medium mb-10 leading-relaxed max-w-[90%]">
            {block.description}
          </p>

          {/* Video Container(s) */}
          <div className="space-y-8">
            {block.videos.map((video, vIndex) => (
              <div key={vIndex} className="space-y-4">
                {video.label && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-[1px] bg-primary/30"></div>
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{video.label}</span>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`w-1 h-1 rounded-full ${i <= 2 ? 'bg-primary' : 'bg-white/10'}`}></div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 group/video">
                  <iframe
                    src={video.url}
                    title={`${block.title} - ${video.label || 'Video'}`}
                    className="absolute inset-0 w-full h-full opacity-80 group-hover/video:opacity-100 transition-all duration-700"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Status Bar */}
        <div className="px-8 py-4 bg-black/40 flex items-center justify-between border-t border-white/5">
          <div className="flex items-center gap-3">
            <Activity className="w-3.5 h-3.5 text-primary/40" />
            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Sincronizado com Planilha</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[9px] font-black text-primary uppercase tracking-tighter italic opacity-40">Atleta Híbrido</span>
            <Zap className="w-2.5 h-2.5 text-primary opacity-40" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
