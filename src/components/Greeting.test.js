import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
  test('render hello', () => {
    //Arrange
    render(<Greeting />)

    //Act
    const helloElem = screen.getByText('Hello')
    expect(helloElem).toBeInTheDocument()
  })
  test('not changed', () => {
    render(<Greeting/>)
    const el = screen.getByText('Nice')
    expect(el).toBeInTheDocument()
  })
  test('changed text after click on a button', () => {
    render(<Greeting/>)
    const button = screen.getByRole('button')
    userEvent.click(button)
    const newEl = screen.getByText('Changed')
    expect(newEl).toBeInTheDocument()
  })
  test('2', () => {
    render(<Greeting/>)
    const button = screen.getByRole('button')
    userEvent.click(button)
    const el = screen.queryByText('Nice')
    expect(el).toBeNull()
  })
})
