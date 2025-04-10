const apiUrl = import.meta.env.VITE_API_URL;
if (!apiUrl) {
  throw new Error('Missing required environment variable: VITE_API_URL');
}

const environment = import.meta.env.VITE_ENVIRONMENT;
if (!environment) {
  throw new Error('Missing required environment variable: VITE_ENVIRONMENT');
}

const config = {
  apiUrl,
  environment,
};

export default config;
