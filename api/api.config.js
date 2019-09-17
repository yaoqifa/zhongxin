const config = {};

if (process.env.NODE_ENV === 'development') {
	config.API_HOST = 'dev-xxxx';
} else {
	config.API_HOST = 'pro-xxxx';
}

export default config;
