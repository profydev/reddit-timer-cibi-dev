import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom';
// import fetchMock from 'jest-fetch-mock';
// import mockResponse from './__mocks__/subreddit-reactjs-response.json';
import App from './App';

// fetchMock.enableMocks();

test('renders App', () => {
  render(<App />);
});

// function setup() {
//   return render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>,
//   );
// }

// describe('Header', () => {
// test('"How it works" link points to the correct page', () => {
//   setup();
//   const link = screen.getByRole('link', { name: /how it works/i });
//   userEvent.click(link);
//   expect(
//     screen.getByRole('heading', { name: /how it works/i }),
//   ).toBeInTheDocument();
// });
// });

// test('loads posts and renders them on the page', async () => {
//   setup();

//   const subredditInput = screen.getByLabelText('r /');
//   userEvent.type(subredditInput, 'reactjs');

//   const submitButton = screen.getByRole('button', { name: /search/i });
//   userEvent.click(submitButton);

//   const loadingMessage = screen.getByText(/is loading/i);
//   expect(loadingMessage).toBeInTheDocument();

//   const numberOfTopPosts = await screen.findByText(/number of top posts:/i);
//   screen.debug(numberOfTopPosts);
// });

// describe('Subreddit form', () => {
//   test('loads posts and renders them on the page', async () => {
//     fetch.once(JSON.stringify(mockResponse));
//     setup();

//     const subredditInput = screen.getByLabelText('r /');
//     userEvent.type(subredditInput, 'reactjs');

//     const submitButton = screen.getByRole('button', { name: /search/i });
//     userEvent.click(submitButton);

//     expect(screen.getByText(/is loading/i)).toBeInTheDocument();

//     expect(await screen.findByText(/Number of top posts: 25/i)).toBeInTheDocument();
//     expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/reactjs/top.json');
//   });
// });
