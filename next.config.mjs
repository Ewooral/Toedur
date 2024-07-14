import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
        {
          protocol: "https",
          hostname: "cdn.dribble.com",
        },
        {
          protocol: "https",
          hostname: "i.pinimg.com",
        },
        {
        protocol: "https",
        hostname: "ewooral31.blob.core.windows.net"
        },
        {
          protocol: "https",
          hostname: "www.countryflags.com"
        }
      ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
  };

export default nextConfig;
