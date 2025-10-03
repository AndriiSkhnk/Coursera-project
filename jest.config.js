import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders form and handles submission with valid input', () => {
  const mockSubmit = jest.fn();
  render(<BookingForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });

  fireEvent.click(screen.getByText(/submit/i));

  expect(mockSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    guests: '4',
  });
});
 