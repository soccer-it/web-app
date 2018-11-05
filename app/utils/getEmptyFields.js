import R from 'ramda';

export default () => {
	const inputs = [ ...document.querySelectorAll('input[id]') ];

	const isEmpty = R.propSatisfies((dataSet) => dataSet && !dataSet.value, 'dataset');

	return R.filter(isEmpty, inputs);
}
