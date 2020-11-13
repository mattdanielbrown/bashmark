import test from 'ava';
import bashmark from '.';

test('title', t => {
	t.throws(() => {
		bashmark(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(bashmark('unicorns'), 'unicorns & rainbows');
});
