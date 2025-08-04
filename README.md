# 📘 Pocket Monster Encyclopedia

A responsive web-based Pokédex built with vanilla JavaScript, HTML, and Materialize CSS. This app allows users to explore Pokémon from a JSON data file, search by name, view detailed information, and enjoy a clean, modern user interface with type-based color coding.

---

## 🚀 Features

- 🔍 **Real-time Search** – Filter Pokémon by name as you type  
- 📇 **Dynamic Cards** – Responsive grid layout with hover effects  
- 🎨 **Type Color Chips** – Each type has a distinct color for clarity  
- 📖 **Detailed View** – Click a card to see stats: height, weight, candy, spawn chance, etc.  
- 📱 **Mobile-Friendly** – Layout adjusts for all screen sizes  

---

## 🖼️ Preview

![preview](preview.png) <!-- optional: add screenshot image if available -->

---

## 🛠️ Technologies

- HTML5
- CSS3 (Materialize)
- JavaScript (ES6)
- JSON Data

---

## 📁 Project Structure

oject-root/
├── index.html
├── pokedex.js
├── data/
│ └── pokedex.json
├── materialize.min.css
├── materialize.min.js
├── jquery-3.6.3.min.js
└── README.md

---

## 🧠 How It Works

1. Loads Pokémon data from `data/pokedex.json`
2. Dynamically generates Pokémon cards using JavaScript
3. Each card includes an image, name, number, and type chips
4. Clicking a card reveals a detailed info panel
5. Search input filters the grid in real time

---

## 📦 Setup & Run

1. Clone or download this repo  
2. Place in a local web server (or open `index.html` directly)  
3. Ensure `pokedex.json` and all JS/CSS files are in the correct paths  
4. Open `index.html` in your browser and enjoy!

---

## ✅ To Do / Future Enhancements

- Add pagination or lazy loading  
- Filter by type dropdown  
- Add Pokémon evolution chains  
- Fetch data via public API (like PokéAPI)  
- Save favorites to localStorage

---

## 📜 License

This project is open-source and free to use for educational or personal purposes.

---

## 👾 Credits

- Pokémon data sourced from community-maintained datasets  
- UI styled with [Materialize CSS](https://materializecss.com)  
- Built by Hassan Sesay
