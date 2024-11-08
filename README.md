# Turbo NextUI Prisma GraphQL Starter

This is a high-performance, full-stack starter template using **Turborepo**, **Next.js**, **NextUI**, **Prisma**, and **GraphQL**. It provides an optimized setup for building scalable web applications with a modern stack.

## Using this example

Run the following command to clone and set up the project:

Here are the step-by-step instructions for cloning your repository and installing the necessary packages:

### 1. **Clone the Repository**

First, clone the repository to your local machine. Run the following command in your terminal:

```sh
git clone https://github.com/simpleneeraj/turbo-nextui-prisma-graphql-starter.git
```

This will clone the `turbo-nextui-prisma-graphql-starter` repository into a new folder with the same name.

### 2. **Navigate to the Project Directory**

Once the repository is cloned, navigate into the project directory:

```sh
cd turbo-nextui-prisma-graphql-starter
```

### 3. **Install Dependencies Using Yarn**

Next, install the project dependencies using Yarn. If you don't have Yarn installed, you can install it by following the instructions on the [official Yarn website](https://yarnpkg.com/getting-started/install).

Run the following command to install all necessary dependencies:

```sh
yarn install
```

This will install all dependencies listed in the `package.json` files across the different apps and packages in the monorepo.

### 4. **Run the Development Server**

Once the dependencies are installed, you can run the development server for the **Next.js** app (typically the `web` app in your setup). To start the server, run:

```sh
yarn dev
```

This will start the development server, and your app should be available at [http://localhost:3000](http://localhost:3000) by default.

With these steps, you should have the repository cloned and all necessary packages installed and ready to use. Let me know if you need further assistance!

After cloning the repo, follow the setup instructions below to get started with your Next.js, Prisma, and GraphQL project.

## What's inside?

This starter template includes the following packages/apps:

### Apps and Packages

- `web`: A **Next.js** app using **NextUI** for the user interface and **Tailwind CSS** for custom styling.
- `api`: A backend setup using **Prisma** for database management and **GraphQL** for the API layer.
- `ui`: A shared component library built with **React** and **NextUI**, shared by both the `web` and `api` applications.
- `@app/eslint-config`: Configurations for **ESLint** to enforce consistent coding styles (includes `eslint-config-next` and `eslint-config-prettier`).
- `@app/typescript-config`: Shared **TypeScript** configuration files across the monorepo.

Each package/app is fully written in **TypeScript** to ensure type safety across the project.

### Building packages/ui

This example is set up to produce compiled styles for UI components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. Here's why this approach was chosen:

- Easily share the same `tailwind.config.js` between apps and packages.
- Simple package compilation using the Next.js Compiler and **Tailwind CSS**.
- Prevent Tailwind class collisions by prefixing UI components' classes with `ui-`.
- Maintain clear package boundaries for better modularity.

If you choose to consume `packages/ui` directly from source without building, update the `tailwind.config.js` in your apps to ensure it can find all usage of Tailwind class names for CSS compilation.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
content: [
  // app content
  `src/**/*.{js,ts,jsx,tsx}`,
  // include packages if not transpiling
  "../../packages/ui/*.{js,ts,jsx,tsx}",
],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Utilities

This Turborepo comes with several essential tools preconfigured for your convenience:

- **Tailwind CSS** for utility-first styling.
- **TypeScript** for static type checking.
- **ESLint** for code linting and maintaining consistent code quality.
- **Prettier** for automatic code formatting.

---

### Final Notes

Feel free to explore and modify this template to fit your needs. You can use it as a base for building modern, scalable applications with a powerful stack (Next.js, Prisma, GraphQL) and a clean, responsive UI (via NextUI and Tailwind CSS).
