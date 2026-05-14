import React from 'react';

const setupCommands = [
  'git clone git@github.com:LostWarrior/Calliope-Canvas.git',
  'cd Calliope-Canvas',
  'npm install',
  'npm run dev',
];

const LocalSetupSlide: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl rounded-lg border border-[#2E2E1A] bg-[#141408] px-10 py-14 shadow-2xl md:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E8F63C]">
          Run it locally
        </p>

        <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Clone the repo and run the deck on your laptop
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-lg border border-[#2E2E1A] bg-[#1C1A0E]/80 px-6 py-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Repository
            </p>
            <a
              className="mt-4 block break-all font-mono text-2xl font-semibold leading-relaxed text-[#E8F63C] underline decoration-[#E8F63C]/40 underline-offset-4"
              href="https://github.com/LostWarrior/Calliope-Canvas"
              rel="noreferrer"
              target="_blank"
            >
              github.com/LostWarrior/Calliope-Canvas
            </a>

            <p className="mt-7 text-2xl leading-relaxed text-slate-300">
              Calliope Canvas is a local web app. You develop and present it from a dev server running on your own machine.
            </p>
          </section>

          <section className="rounded-lg border border-[#E8F63C]/40 bg-[#E8F63C]/10 px-6 py-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8F63C]">
              Terminal
            </p>
            <pre className="mt-4 overflow-x-auto rounded-md bg-[#141408] p-5 text-lg leading-relaxed text-[#E8F63C]">
              <code>{setupCommands.join('\n')}</code>
            </pre>

            <div className="mt-5 grid gap-3 text-xl text-slate-200">
              <p>
                <span className="font-mono text-[#E8F63C]">npm run dev</span> opens the local deck at <span className="font-mono text-[#E8F63C]">localhost:3000</span>.
              </p>
              <p>
                <span className="font-mono text-[#E8F63C]">npm run build</span> checks and bundles it; <span className="font-mono text-[#E8F63C]">npm run preview</span> serves that build.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LocalSetupSlide;
