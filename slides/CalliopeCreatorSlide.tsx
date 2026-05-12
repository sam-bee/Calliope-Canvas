import React from 'react';

const CalliopeCreatorSlide: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="grid w-full max-w-6xl items-center gap-10 rounded-lg border border-slate-700 bg-slate-950 px-10 py-14 shadow-2xl md:grid-cols-[0.8fr_1.2fr] md:px-14">
        <div className="flex justify-center md:justify-start">
          <img
            src="../images/logo-on-black.png"
            alt="Calliope Canvas Logo"
            className="h-56 w-56 rounded-full border border-slate-700 shadow-2xl"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Created by Kirti B.
          </p>
          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Calliope Canvas is an AI first presentation tool
          </h2>
          <p className="mt-8 text-2xl leading-relaxed text-slate-300">
            Build decks as code, iterate with agents, and turn ideas into interactive slides.
          </p>
          <p className="mt-8 text-2xl leading-relaxed text-slate-300">
            Created by Kirti Bhardwaaj, with demo slides by Sam Burns.
          </p>
          <p className="mt-8 text-lg font-semibold uppercase tracking-[0.2em] text-slate-500">
            As seen at the London Ruby Usergroup
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalliopeCreatorSlide;
