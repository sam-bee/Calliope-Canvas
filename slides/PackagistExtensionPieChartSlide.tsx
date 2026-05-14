import React from 'react';

type ExtensionCount = {
  extension: string;
  count: number;
};

type ChartSlice = ExtensionCount & {
  color: string;
};

const extensionCounts: ExtensionCount[] = [
  { extension: 'rb', count: 13373 },
  { extension: 'md', count: 449 },
  { extension: '[no extension]', count: 354 },
  { extension: 'json', count: 294 },
  { extension: 'xlf', count: 197 },
];

const sliceColors = [
  '#38bdf8',
  '#34d399',
  '#f59e0b',
  '#f472b6',
  '#a78bfa',
];

const totalFiles = extensionCounts.reduce((sum, item) => sum + item.count, 0);
const chartData: ChartSlice[] = extensionCounts.map((item, index) => ({
  ...item,
  color: sliceColors[index],
}));

const formatCount = (count: number) => count.toLocaleString('en-US');

const formatPercent = (count: number) =>
  `${((count / totalFiles) * 100).toFixed(count / totalFiles > 0.1 ? 1 : 2)}%`;

const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeSlice = (
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  const start = polarToCartesian(centerX, centerY, radius, endAngle);
  const end = polarToCartesian(centerX, centerY, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    `M ${centerX} ${centerY}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    'Z',
  ].join(' ');
};

const PackagistExtensionPieChartSlide: React.FC = () => {
  let currentAngle = 0;

  const slices = chartData.map(slice => {
    const sliceAngle = (slice.count / totalFiles) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;

    currentAngle = endAngle;

    return {
      ...slice,
      path: describeSlice(128, 128, 112, startAngle, endAngle),
    };
  });

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl rounded-lg border border-[#2E2E1A] bg-[#141408] px-10 py-12 shadow-2xl md:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E8F63C]">
          Local repository scan
        </p>

        <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Ask an agent to scan your files, create graphs
        </h2>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="flex items-center justify-center">
            <div className="relative h-80 w-80">
              <svg
                aria-label="Pie chart of file extensions in the local Packagist repository"
                className="h-full w-full drop-shadow-2xl"
                viewBox="0 0 256 256"
              >
                {slices.map(slice => (
                  <path
                    key={slice.extension}
                    d={slice.path}
                    fill={slice.color}
                    stroke="#020617"
                    strokeWidth="2"
                  />
                ))}
                <circle cx="128" cy="128" fill="#141408" r="66" />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-extrabold text-white">
                  {formatCount(totalFiles)}
                </span>
                <span className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  files
                </span>
                <span className="mt-1 text-sm text-slate-500">
                  {extensionCounts.length} extension groups
                </span>
              </div>
            </div>
          </section>

          <section className="grid gap-3">
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 border-b border-[#2A2A1A] pb-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              <span>Extension</span>
              <span>Files</span>
              <span>Share</span>
            </div>

            {chartData.map(slice => (
              <div
                key={slice.extension}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 rounded-md bg-[#1C1A0E]/80 px-4 py-3 text-lg text-slate-100"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    className="h-3 w-3 shrink-0 rounded-sm"
                    style={{ backgroundColor: slice.color }}
                  />
                  <span className="truncate font-semibold">{slice.extension}</span>
                </span>
                <span className="font-mono text-slate-300">{formatCount(slice.count)}</span>
                <span className="font-mono text-slate-400">{formatPercent(slice.count)}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default PackagistExtensionPieChartSlide;
