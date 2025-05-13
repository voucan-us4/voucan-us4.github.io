window.addEventListener('DOMContentLoaded', () => {
	const CB = localStorage.getItem('custombare');
	if (CB && self.__uv$config) {
		self.__uv$config.bare = CB;
		console.log('bare set to', CB);
	} else {
		console.warn('No custom bare set in localStorage ornot defined.');
	}
});
