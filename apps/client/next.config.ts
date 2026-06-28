const nextConfig = {
  output: 'export', // Forces creation of the /out folder
  images: {
    unoptimized: true, // Required for static export
  },
};
export default nextConfig;