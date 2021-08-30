import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('async component', () => {
  test('req => render', async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 'p1',
          title: 'seriy'
        },
        {
          id: 'p2',
          title: 'sergey'
        },
      ]
    })

    render(<Async/>)

    const listItemElems = await screen.findAllByRole('listitem')
    expect(listItemElems).not.toHaveLength(0)
  })
})