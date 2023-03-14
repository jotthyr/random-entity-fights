import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

test('renders component', async () => {
    const { getByText } = render(<App/>);
    expect(getByText('RANDOM FIGHT')).toBeInTheDocument();
});

test('calculates result', async () => {
    const { getByTestId, getByText } = render(<App/>);
    const input = getByTestId('ClickIndicator');

    fireEvent.click(input);
    const text = await waitFor(() => getByText('Win!'));

    expect(text).toBeInTheDocument();
});
