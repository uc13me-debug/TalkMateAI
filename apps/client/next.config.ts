const nextConfig = {
  output: 'export', // This tells Next.js to create an /out directory
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;