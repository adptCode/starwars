# 🌌 StarWars - Angular Application

Welcome to **StarWars**, an Angular application that immerses you in the Star Wars universe! This project leverages the [Star Wars API (SWAPI)](https://swapi.py4e.com/) to fetch and display data about characters, planets, starships, and more. The application is styled using **Bootstrap** for a responsive and modern user interface.

---

## 🚀 Features
- **Angular 17+**: Built with the latest version of Angular for optimal performance.
- **Bootstrap**: Utilized for responsive and sleek UI design.
- **SWAPI Integration**: Fetches real-time data from the Star Wars API.
- **Reactive Forms**: Implements dynamic and efficient form handling.
- **Routing**: Navigates seamlessly between different components and views.
- **State Management**: Manages application state effectively for a smooth user experience.

---

## 📋 Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/adptCode/starwars.git
cd starwars
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Fake Backend 
This application requires a mock backend for authentication, you must set it up using `json-server-auth`. Ensure you have `json-server-auth` installed globally or install it in your project.

```bash
npx json-server-auth db.json --port 3000
```

This will start the fake backend server at `http://localhost:3000/`.

### 4️⃣ Start the Development Server
```bash
ng serve -o
```

This command will compile the application and automatically open it in your default browser at `http://localhost:4200/`. The application supports hot-reloading, so any changes you make to the source files will reflect in real-time.

---

## 🌐 Consuming the Star Wars API (SWAPI)

The application interacts with the [Star Wars API (SWAPI)](https://swapi.py4e.com/) to retrieve data about various entities in the Star Wars universe. SWAPI provides endpoints for different resources such as people, planets, films, species, vehicles, and starships.

**Example API Endpoints:**

- **People**: `https://swapi.py4e.com/api/people/`
- **Planets**: `https://swapi.py4e.com/api/planets/`
- **Starships**: `https://swapi.py4e.com/api/starships/`

For detailed documentation on the available endpoints and data structure, refer to the [SWAPI Documentation](https://swapi.py4e.com/documentation).

---

## 🛠️ Available Scripts

In the project directory, you can run the following scripts:

- **`ng serve`**: Compiles and serves the application, rebuilding on file changes.
- **`ng build`**: Compiles the application into an output directory.
- **`ng test`**: Executes unit tests via [Karma](https://karma-runner.github.io).
- **`ng lint`**: Runs linting tools to analyze code quality.

For a complete list of available scripts and their descriptions, refer to the `package.json` file.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, feel free to open an issue or submit a pull request. Please ensure that your contributions align with the project's coding standards and conventions.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

May the Force be with you as you explore and enhance this project! 🚀✨

