import React from 'react';

const SpeakerNotesFeatureSlide: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl rounded-lg border border-[#2E2E1A] bg-[#141408] px-10 py-14 shadow-2xl md:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E8F63C]">
          Speaker notes
        </p>

        <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Speaker notes provide presenter context
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-[#2E2E1A] bg-[#1C1A0E]/80 px-6 py-6">
            <p className="text-lg font-semibold text-white">Private notes</p>
            <p className="mt-4 text-xl leading-relaxed text-slate-300">
              Add reminders and prompts without crowding the slide your audience sees.
            </p>
          </div>

          <div className="rounded-lg border border-[#2E2E1A] bg-[#1C1A0E]/80 px-6 py-6">
            <p className="text-lg font-semibold text-white">Synced window</p>
            <p className="mt-4 text-xl leading-relaxed text-slate-300">
              Open a separate notes view that follows the current slide as you present.
            </p>
          </div>

          <div className="rounded-lg border border-[#2E2E1A] bg-[#1C1A0E]/80 px-6 py-6">
            <p className="text-lg font-semibold text-white">Presenter hints</p>
            <p className="mt-4 text-xl leading-relaxed text-slate-300">
              Use bracketed text for emphasis when you want a prompt to stand out.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-[#E8F63C]/40 bg-[#E8F63C]/10 px-6 py-5">
          <p className="font-mono text-xl leading-relaxed text-[#E8F63C]">
            notes: [&apos;[Pause here.] Explain the transition in your own words.&apos;]
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerNotesFeatureSlide;
