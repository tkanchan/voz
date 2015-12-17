jest.dontMock('../Post.react');

describe('Button component', function () {
	it('calls handler function on click', function() {
		var React = require('react');
		var TestUtils = require('react-addons-test-utils');
		var Post = require('../Button.react');
		var hidePostView = jest.genMockFunction();

		var post = TestUtils.renderIntoDocument(
			<Post hidePostView={this.hidePostView} />
		);

		var buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

		TestUtils.Simulate.click(buttonInstance);

		expect(handleClick).toBeCalled();

		var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

		expect(numberOfCallsMadeIntoMockFunction).toBe(1);
	});
});