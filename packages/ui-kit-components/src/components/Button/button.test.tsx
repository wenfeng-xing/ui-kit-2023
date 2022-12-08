import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/react';

import Button from './button';

describe('Button component tests', () => {
  describe('Given render a simple button', () => {
    const fn = jest.fn(() => {});
    beforeEach(() => {
      render(<Button click={fn}>Test Button</Button>);
    });

    describe('When do the snapshots test', () => {
      it('Then should be the as same the snapshot', () => {
        expect(screen.getAllByText('Test Button')[0]).toMatchSnapshot();
      });
    });

    describe('When it is a simple button', () => {
      it('Then should have the button label `Test Button`', () => {
        expect(screen.getAllByText('Test Button')[0]).toBeInTheDocument();
      });
    });

    describe('When the button has been clicked', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByText('Test Button'));
      });
      it('Then the onClick function should be fired once', () => {
        expect(fn).toBeCalled();
      });
    });
  });

  describe('Given render a button with/without icon', () => {
    describe('When it is a simple button', () => {
      beforeEach(() => {
        render(<Button>Normal Button</Button>);
      });

      it('Then should get a normal button without icon', () => {
        expect(screen.getByTestId('normal')).toBeInTheDocument();
      });
    });

    describe('When it is a button with left icon', () => {
      beforeEach(() => {
        render(<Button icon="left">Left Button</Button>);
      });

      it('Then should get a button with left icon', () => {
        expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      });
    });

    describe('When it is a button with right icon', () => {
      beforeEach(() => {
        render(<Button icon="right">Right Button</Button>);
      });

      it('Then should get a button with left icon', () => {
        expect(screen.getByTestId('right-icon')).toBeInTheDocument();
      });
    });
  });

  describe('Given focusing a button', () => {
    beforeEach(() => {
      render(<Button>Focus Button</Button>);
    });

    describe('When the button has been focused', () => {
      it('Then should the button have different styles between focused and initial state', () => {
        const element = screen.getByTestId('normal');
        const styleDefault = window.getComputedStyle(element);

        act(() => {
          element.focus();
        });

        const styleFocus = window.getComputedStyle(element);
        expect(JSON.stringify(styleDefault)).not.toEqual(JSON.stringify(styleFocus));
      });
    });

    describe('When the button has been focused and then blurred', () => {
      it('Then should the button have the same style as the initial state after focusing and blurring', () => {
        const element = screen.getByTestId('normal');
        const styleDefault = window.getComputedStyle(element);

        act(() => {
          element.focus();
          element.blur();
        });

        const styleBlur = window.getComputedStyle(element);
        expect(JSON.stringify(styleDefault)).toEqual(JSON.stringify(styleBlur));
      });
    });
  });
});
