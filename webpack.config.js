/* module.exports = {
	resolve: {
		fallback: {
			buffer: require.resolve('buffer/'),
			crypto: require.resolve('crypto-browserify'),
			crypto: false,
			util: require.resolve('util'),
			util: false,
			stream: require.resolve('stream-browserify'),
			stream: false,
		},
	},
}; */

module.exports = {
	resolve: {
		fallback: {
			buffer: require.resolve('buffer/'),
			crypto: require.resolve('crypto-browserify'),
			//crypto: false,
			util: require.resolve('util'),
			util: false,
		},
	},
};
