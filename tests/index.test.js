import { render } from '@testing-library/react';
import Index from '../public/index.html';

test('renders index.html correctly', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
});