# Frontend Interview - Website

Hey 👋

This is the base repository for the home test. The repository is created with `vite` and is empty, but contains some packages already installed, in particular:

- `react`
- `vitest`

## Install and run

```bash
# Install dependencies
# This project use `pnpm` as package manager, but you can use also `npm` or `yarn`.
pnpm install

# And run the project
pnpm dev
```

## Figma file

The figma file of the home test is available [here](https://www.figma.com/design/ESP3mNtKRj1aI458c08QBb/%F0%9F%92%BB-Website-Home-Test?node-id=0-1&t=tmrCaYq4wADJCHvD-1).


# How to run

You can run the application by
```bash
# Install dependencies
# This project use `pnpm` as package manager, but you can use also `npm` or `yarn`.
pnpm install

# And run the project
pnpm dev
```

By default the list will load using the mock data the I have created, if you want to test the error state you can do the following
-- Go to src/features/use-user-dashboard.tsx 
-- Comment out line `resolve(filtered);`
-- Uncommet out lin ` _reject()`


# Ways of working & assumptions

-- I seperate out the main atomic components in components trying to do component library, for `<Badge />` I made the assumption that the variants are correct as the named variants are no very re-usable only for this use case. 
-- Assumption: There was no instruction about how full the test/mock should be or where to find it, therefore I created my Own and it should cover all use cases.
-- Assumption: When the USer changes there search term, the fitlers reset to `undefined` 
-- If I had more time, I would improve the `Modal` component as there are a few UX issues do with keyboard command (not been able to click ESC to close the modal) and the tabbing on the modal can be improve so the User can only navigatin within the modal using tab.
-- Using uncontrolled form as the form was simple and there was no side-affected for when we change the input/search ter.
-- Decided not to Add context for User, as it was only use 2 components down, If it is more greatly used I would refactor to use the context API.


