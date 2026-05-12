import React from 'react';

type ExtensionCount = {
  extension: string;
  count: number;
};

type ChartSlice = ExtensionCount & {
  color: string;
};

const extensionCounts: ExtensionCount[] = [
  { extension: 'php', count: 13373 },
  { extension: 'md', count: 449 },
  { extension: '[no extension]', count: 354 },
  { extension: 'json', count: 294 },
  { extension: 'xlf', count: 197 },
  { extension: 'twig', count: 185 },
  { extension: 'stub', count: 141 },
  { extension: 'html', count: 73 },
  { extension: 'svg', count: 72 },
  { extension: 'meta', count: 64 },
  { extension: 'xsd', count: 52 },
  { extension: 'txt', count: 42 },
  { extension: 'yml', count: 40 },
  { extension: 'yaml', count: 34 },
  { extension: 'xliff', count: 32 },
  { extension: 'dist', count: 30 },
  { extension: 'neon', count: 19 },
  { extension: 'rst', count: 19 },
  { extension: 'css', count: 15 },
  { extension: 'js', count: 15 },
  { extension: 'sample', count: 14 },
  { extension: 'lock', count: 11 },
  { extension: 'xml', count: 10 },
  { extension: 'tpl', count: 7 },
  { extension: 'png', count: 6 },
  { extension: 'woff2', count: 6 },
  { extension: 'sh', count: 5 },
  { extension: 'log', count: 3 },
  { extension: 'phar', count: 3 },
  { extension: '0', count: 2 },
  { extension: 'gif', count: 2 },
  { extension: 'ttf', count: 2 },
  { extension: 'asc', count: 1 },
  { extension: 'base64', count: 1 },
  { extension: 'bash', count: 1 },
  { extension: 'csv', count: 1 },
  { extension: 'dev', count: 1 },
  { extension: 'eot', count: 1 },
  { extension: 'exe', count: 1 },
  { extension: 'fish', count: 1 },
  { extension: 'ico', count: 1 },
  { extension: 'idx', count: 1 },
  { extension: 'jpg', count: 1 },
  { extension: 'jsx', count: 1 },
  { extension: 'legacy', count: 1 },
  { extension: 'markdown', count: 1 },
  { extension: 'nix', count: 1 },
  { extension: 'osd', count: 1 },
  { extension: 'pack', count: 1 },
  { extension: 'pem', count: 1 },
  { extension: 'rev', count: 1 },
  { extension: 'scss', count: 1 },
  { extension: 'ser', count: 1 },
  { extension: 'sync-conflict-20260510-021359-yivs4nb', count: 1 },
  { extension: 'template', count: 1 },
  { extension: 'test', count: 1 },
  { extension: 'toml', count: 1 },
  { extension: 'woff', count: 1 },
  { extension: 'zsh', count: 1 },
];

const sliceColors = [
  '#38bdf8',
  '#34d399',
  '#f59e0b',
  '#f472b6',
  '#a78bfa',
  '#fb7185',
  '#22c55e',
  '#f97316',
  '#06b6d4',
  '#eab308',
  '#818cf8',
  '#2dd4bf',
  '#94a3b8',
];

const visibleSliceCount = 12;
const totalFiles = extensionCounts.reduce((sum, item) => sum + item.count, 0);
const visibleExtensions = extensionCounts.slice(0, visibleSliceCount);
const otherCount = extensionCounts
  .slice(visibleSliceCount)
  .reduce((sum, item) => sum + item.count, 0);

const chartData: ChartSlice[] = [
  ...visibleExtensions.map((item, index) => ({
    ...item,
    color: sliceColors[index],
  })),
  {
    extension: 'Other',
    count: otherCount,
    color: sliceColors[visibleSliceCount],
  },
];

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
      <div className="w-full max-w-6xl rounded-lg border border-slate-700 bg-slate-950 px-10 py-12 shadow-2xl md:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Local repository scan
        </p>

        <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Packagist file extensions
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
                <circle cx="128" cy="128" fill="#020617" r="66" />
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
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 border-b border-slate-800 pb-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              <span>Extension</span>
              <span>Files</span>
              <span>Share</span>
            </div>

            {chartData.map(slice => (
              <div
                key={slice.extension}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 rounded-md bg-slate-900/80 px-4 py-3 text-lg text-slate-100"
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
