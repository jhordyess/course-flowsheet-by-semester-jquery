# Course Flowsheet by Semester

This project represents one of my first steps in programming, approximately in  2017 🤓.

I was studying Systems Engineering at the time, and I was looking for a way to organize my courses by semester, and I found a way to do it with jQuery.

## Description

It's possible to create a dynamic course flowsheet by semester, defining the semester, courses names, and courses prerequisites(post requisites will be found automatically).

All semesters and courses are grouped by HTML table and created with jQuery.

Using mouseover dynamically, the prerequisites and post requisites change of style, also with jQuery.

To test your own course flowsheet, just modify the semesters.js file.

### Technologies Used

- JS Libraries: [jQuery](https://jquery.com/)
- Programming Language: [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Font: [Archivo by Omnibus-Type](https://fonts.google.com/specimen/Archivo)
- Build tool: [Vite](https://vitejs.dev/)
- Hosting: [GitHub Pages](https://pages.github.com/)
- Dev Environment: [VSCode](https://code.visualstudio.com/) with [dev containers](https://code.visualstudio.com/docs/remote/containers) in [Zorin OS](https://zorinos.com/)

### Screenshot

![Home](https://res.cloudinary.com/jhordyess/image/upload/v1679608993/course-flowsheet-by-semester/jquery.png)

### Update 2022

Here is the project developed with React: <https://github.com/jhordyess/course-flowsheet-by-semester>, and online: <https://jhordyess.github.io/course-flowsheet-by-semester/>

### Demo

You can see the demo here: <https://jhordyess.github.io/course-flowsheet-by-semester-jquery>

## How to use

1. Clone the repository.

```bash
git clone git@github.com:jhordyess/course-flowsheet-by-semester-jquery.git
```

2. Open the project folder.

```bash
cd course-flowsheet-by-semester-jquery
```

3. Install the dependencies.

```bash
yarn
```

4. Run the project.

```bash
yarn dev
```

5. Open the browser on <http://localhost:5173/course-flowsheet-by-semester-jquery>.

## How to use with VSCode dev containers

You can use the VSCode dev containers to run the project in a containerized environment.

You need to have installed [Docker](https://www.docker.com/) and [VSCode](https://code.visualstudio.com/), and the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

1. Clone the repository.

```bash
git clone git@github.com:jhordyess/course-flowsheet-by-semester-jquery.git
```

2. Open the project with VSCode:

```bash
code course-flowsheet-by-semester-jquery
```

3. Open the command palette and select the option `Dev Containers: Reopen in Container`.

4. Wait for the container to be built and the project to be started.

5. Open the terminal in VSCode and run the project:

```bash
yarn dev
```

6. Open the browser at <http://localhost:5173/course-flowsheet-by-semester-jquery>

## License

© 2022 [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license. See the [LICENSE](./LICENSE) file for more details.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)
