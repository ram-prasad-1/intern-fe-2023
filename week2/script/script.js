// Load menu items from JSON file
fetch("data/menu.json")
  .then((response) => response.json())
  .then((data) => {
    const menuContainer = document.getElementById("menu");
    const categorySelect = document.getElementById("category");
    const allBtn = document.getElementById("all");
    // const breakfastBtn = document.getElementById("Breakfast");
    // const lnchBtn = document.getElementById("Lunch");
    // const shakesBtn = document.getElementById("Shakes");
    // const dinnerBtn = document.getElementById("Dinner");

    // Create menu items for each item in the JSON data
    function createMenuItems(items) {
      // Remove all existing menu items
      menuContainer.innerHTML = "";

      // Create new menu items based on the data

      items.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemImage = document.createElement("img");
        itemImage.src = `images/${item.image}`;
        itemImage.alt = item.name;
        menuItem.appendChild(itemImage);

        const itemName = document.createElement("h2");
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("price");
        itemPrice.textContent = `Rs.${item.price.toFixed(2)}`;
        menuItem.appendChild(itemPrice);

        menuContainer.appendChild(menuItem);
      });
    }

    // Filter items based on selected category
    function filterItems(category) {
      let filteredItems;
      if (category === "all") {
        filteredItems = data.items;
      } else {
        filteredItems = data.items.filter((item) => item.category === category);
      }
      // console.log(filteredItems);
      createMenuItems(filteredItems);
    }

    // Initialize menu with all items
    createMenuItems(data.items);
    // allBtn.addEventListener("click", function (e) {
    //   console.log("Hello1");
    // });
    // breakfastBtn.addEventListener("click", function (e) {
    //   console.log("Hello2");
    // });
    // lnchBtn.addEventListener("click", function (e) {
    //   console.log("Hello3");
    // });
    // shakesBtn.addEventListener("click", function (e) {
    //   console.log("Hello5");
    // });
    // dinnerBtn.addEventListener("click", function (e) {
    //   console.log("Hello4");
    // });

    // Add event listener to filter items based on category select
    categorySelect.addEventListener("click", (event) => {
      // console.log(event.target.value);
      if (!event.target.value) return;
      filterItems(event.target.value);
      // Add 'active' class to selected category
      const activeCategory = document.querySelector(".active");
      if (activeCategory) {
        activeCategory.classList.remove("active");
      }
      event.target.classList.add("active");
    });
  })
  .catch((error) => console.error("Error loading menu:", error));
