/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Activa el modo estricto de React para detectar problemas potenciales
    swcMinify: true,        // Habilita la minificación con SWC para mejorar el rendimiento
  
    // Configurar redirecciones
    async redirects() {
      return [
        {
          source: '/old-route',
          destination: '/new-route',
          permanent: true,   // Redirección permanente (código de estado 308)
        },
      ];
    },
    experimental: {
        appDir: true,  // Habilita el uso de la carpeta `src/app`
      },
    
  };
  
  export default nextConfig;
  