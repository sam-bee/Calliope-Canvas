import React from 'react';

const voiceCommands = [
  'Next Slide',
  'Previous Slide',
  'Start Animation',
  'Stop Animation',
  'Zoom In',
  'Zoom Out',
];

const VoiceActivationFeatureSlide: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl rounded-lg border border-[#2E2E1A] bg-[#141408] px-10 py-14 shadow-2xl md:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E8F63C]">
          Voice activation
        </p>

        <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Control the deck without touching the keyboard
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-lg border border-[#E8F63C]/40 bg-[#E8F63C]/10 px-7 py-6">
            <p className="text-lg font-semibold text-[#E8F63C]">
              Calliope Canvas can listen for spoken commands during a presentation.
            </p>
            <p className="mt-5 text-2xl leading-relaxed text-slate-200">
              Grant microphone permission, then move through slides, pause animations, or adjust zoom with your voice.
            </p>
          </section>

          <section className="grid gap-3 sm:grid-cols-2">
            {voiceCommands.map(command => (
              <div
                key={command}
                className="rounded-lg border border-[#2E2E1A] bg-[#1C1A0E]/80 px-5 py-4"
              >
                <p className="font-mono text-xl font-semibold text-slate-100">
                  &quot;{command}&quot;
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default VoiceActivationFeatureSlide;
