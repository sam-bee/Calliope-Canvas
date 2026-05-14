import React from 'react';

const TitleSlide: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-[70vh]">
        <img src="../images/logo-on-black.png" alt="Calliope Canvas Logo" className="h-32 w-32 mb-8" />
        <h1 className="text-6xl font-extrabold text-[#E8F63C]">
            Calliope Canvas
        </h1>
        <p className="mt-4 text-2xl text-slate-400">
            Bring your presentations to life.
        </p>
        <p className="mt-12 text-lg text-slate-300">Click 'Next' to begin.</p>
        <div className="mt-8 flex items-center gap-2">
            <span className="text-sm text-slate-500">Presented by</span>
            <img src="../images/1699525139-gocardless-logo.jpg" alt="GoCardless" className="h-7 w-7 rounded-md" />
            <span className="text-sm font-semibold text-[#E8F63C]">GoCardless</span>
        </div>
    </div>
  );
};

export default TitleSlide;
