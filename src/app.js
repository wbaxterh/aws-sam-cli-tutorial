exports.lambdaHandler = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "What up, World!" }),
	};
};
