import React, { useState } from 'react';

type ExecutionStep = {
  line: number;
  note: string;
  output?: string;
};

const codeLines = [
  'fiber = Fiber.new do',
  '  puts "inside fiber"',
  '  Fiber.yield',
  '  puts "back inside fiber"',
  'end',
  '',
  'fiber.resume',
  'puts "outside fiber"',
  'fiber.resume',
];

const executionSteps: ExecutionStep[] = [
  {
    line: 1,
    note: 'Create the fiber. The block is stored, but it has not run yet.',
  },
  {
    line: 7,
    note: 'Resume enters the fiber for the first time.',
  },
  {
    line: 2,
    note: 'The first line inside the fiber runs.',
    output: 'inside fiber',
  },
  {
    line: 3,
    note: 'The fiber yields, handing control back to the caller.',
  },
  {
    line: 8,
    note: 'The caller continues after the first resume.',
    output: 'outside fiber',
  },
  {
    line: 9,
    note: 'Resume continues the fiber from the yield point.',
  },
  {
    line: 4,
    note: 'The fiber finishes the remaining work.',
    output: 'back inside fiber',
  },
];

const getOutputForStep = (stepIndex: number) =>
  executionSteps
    .slice(0, stepIndex + 1)
    .map(step => step.output)
    .filter(Boolean);

const InteractiveFiberDebuggerSlide: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = executionSteps[stepIndex];
  const output = getOutputForStep(stepIndex);
  const isComplete = stepIndex === executionSteps.length - 1;

  const advance = () => {
    setStepIndex(current => {
      if (current === executionSteps.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl rounded-lg border border-slate-700 bg-slate-950 px-10 py-14 shadow-2xl md:px-14 md:py-18">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Interactive fiber example
        </p>

        <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Ask a coding agent for an interactive slide
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <section className="rounded-lg border border-slate-700 bg-slate-900/70 px-5 py-5">
            <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-400">
              Code
            </h3>
            <pre className="mt-4 overflow-x-auto rounded-md bg-slate-950 p-4 text-lg leading-relaxed text-slate-100">
              <code>
                {codeLines.map((line, index) => {
                  const lineNumber = index + 1;
                  const isActive = currentStep.line === lineNumber;

                  return (
                    <span
                      key={`${lineNumber}-${line}`}
                      className={`block rounded px-3 ${
                        isActive
                          ? 'bg-emerald-400 text-slate-950'
                          : 'text-slate-300'
                      }`}
                    >
                      <span className="mr-4 inline-block w-5 select-none text-right opacity-60">
                        {lineNumber}
                      </span>
                      {line || ' '}
                    </span>
                  );
                })}
              </code>
            </pre>
          </section>

          <section className="flex flex-col gap-4">
            <div className="min-h-40 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Current step
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-slate-100">
                {currentStep.note}
              </p>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-900/70 px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Output
              </p>
              <pre className="mt-4 min-h-32 rounded-md bg-slate-950 p-4 text-xl leading-relaxed text-emerald-200">
                <code>{output.length > 0 ? output.join('\n') : ' '}</code>
              </pre>
            </div>

            <button
              onClick={advance}
              className="rounded-md bg-emerald-500 px-6 py-4 text-xl font-extrabold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              {isComplete ? 'Start Again' : 'Advance'}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFiberDebuggerSlide;
