const dispatchCustomEvent = (eventData) => {
	const { name } = eventData;
	const event = new CustomEvent(name, {
		detail: eventData
	});
	document.dispatchEvent(event);
};

export default dispatchCustomEvent;
