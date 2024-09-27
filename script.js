const urls = [
  'https://www.youtube.com/watch?...',
];

for (let i = 0; i < urls.length; i += 1) {
  const childProcess = Bun.spawn(['yt-dlp', `${urls[i]}`], {
    cwd: '/home/sindelio/Music', // specify a working directory
    // env: { ...process.env, FOO: "bar" }, // specify environment variables
    onExit: async (proc, exitCode, signalCode, error) => {
      if (error) {
        throw new Error(`Error copying video ${i}`);
      }
    },
  });
  await childProcess.exited;
}