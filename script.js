let link = document.getElementsByClassName("link");
let cart = document.getElementById("cart");
let menu = document.getElementById("menu");
let ul = document.getElementById("ul");
let nav = document.getElementById("nav");
let cat = document.getElementById("cat");
let catBtn = document.getElementsByClassName("cat-btn");
let products = document.getElementById("products");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let cart_main = document.getElementById("cart-main");
let card = document.getElementsByClassName("card");
let t_body = document.getElementById("t-body");
let mobile_nav = document.getElementById("mobile-nav");
let close = document.getElementById("close-menu");

close.addEventListener("click", () => {
  mobile_nav.style.display = "none";
});

menu.addEventListener("click", () => {
  mobile_nav.style.display = "flex";
});
// cancel.addEventListener("click", () => {
//   mobile_nav.nav.style.display = "none";
// });
let groceries = [
  {
    Image: "Images/Quaker Oats.jpg",
    title: "Quaker Oats",
    price: 1080,
    original_price: 1350,
    category: "Dry Fruits",
  },
  {
    Image: "https://m.media-amazon.com/images/I/716+Hb5aYhL._AC_UL320_.jpg",
    title: "Dry Fruits",
    price: 299,
    original_price: 599,
    category: "Dry Fruits",
  },
  {
    Image: "https://m.media-amazon.com/images/I/71O4OnjaHVL._AC_UL320_.jpg",
    title: "Honey",
    price: 369,
    original_price: 499,
    category: "Dry Fruits",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/10000266_30-fresho-orange-nagpur-regular.jpg?tr=w-1200,q=80",
    title: "Oranges",
    price: 69,
    original_price: 99,
    category: "Fruits",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/40134281_14-fresho-baby-apple-shimla.jpg?tr=w-1200,q=80",
    title: "Apples",
    price: 135,
    original_price: 207,
    category: "Fruits",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/40120006_6-fresho-pomegranate-small.jpg?tr=w-1200,q=80",
    title: "Pomegranate-Regular",
    price: 272,
    original_price: 375,
    category: "Fruits",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/20000911_31-fresho-kiwi-green.jpg?tr=w-1200,q=80",
    title: "Kiwi",
    price: 78,
    original_price: 107,
    category: "Fruits",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/1202322_1-fresho-pear-green-imported.jpg?tr=w-1200,q=80",
    title: "Pear-Green,Imported",
    price: 308,
    original_price: 440,
    category: "Fruits",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-1200,q=80",
    title: "Guava",
    price: 58,
    original_price: 80,
    category: "Fruits",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/40008982_15-fresho-dragon-fruit.jpg?tr=w-1200,q=80",
    title: "Dragon-Fruit",
    price: 90,
    original_price: 135,
    category: "Fruits",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/10000071_14-fresho-carrot-orange.jpg?tr=w-1200,q=80",
    title: "Carrot",
    price: 11,
    original_price: 28,
    category: "Vegetables",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-1200,q=80",
    title: "Coriander Leaves",
    price: 213,
    original_price: 305,
    category: "Vegetables",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/10000066_25-fresho-cabbage.jpg?tr=w-1200,q=80",
    title: "Cabbage",
    price: 19,
    original_price: 31,
    category: "Vegetables",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/10000068_22-fresho-capsicum-green.jpg?tr=w-1200,q=80",
    title: "Capsicum",
    price: 17,
    original_price: 35,
    category: "Vegetables",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/10000203_16-fresho-tomato-local.jpg?tr=w-1200,q=80",
    title: "Tomato-Local",
    price: 36,
    original_price: 50,
    category: "Vegetables",
  },
  {
    Image:
      "https://www.bigbasket.com/media/uploads/p/m/1201414_1-fresho-onion.jpg?tr=w-1200,q=80",
    title: "Onion",
    price: 75,
    original_price: 130,
    category: "Vegetables",
  },
];

cart_main.style.display = "none";
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", (e) => {
    cart.style.color = "white";
    for (let i = 0; i < link.length; i++) {
      if (link[i].classList.contains("active")) {
        link[i].classList.remove("active");
      }
    }
    if (e.target.classList.contains("cart")) {
    } else {
      e.target.classList.add("active");
      cart_main.style.display = "none";
    }
  });
}
cart.addEventListener("click", (e) => {
  for (let i = 0; i < link.length; i++) {
    link[i].classList.remove("active");
  }
  cart.style.color = "black";
});

function appendCats() {
  let cats = Array.from(
    new Set(
      groceries.map((e) => {
        return e.category;
      })
    )
  );
  cats.forEach((e) => {
    let cat_btn = document.createElement("button");
    cat_btn.className = "cat-btn";
    cat_btn.innerText = e;
    cat.appendChild(cat_btn);
  });
}

function setData(items) {
  let data = "";
  for (let i = 0; i < items.length; i++) {
    let item = `  <div class="card">
      <div class="img">
        <img src=${items[i].Image} alt="almongs" />
      </div>
      <div class="card-data">
        <div class="card-text">
          <h3>${items[i].title}</h3>
          <h3>₹ ${items[i].price}</h3>
          <h3><s>₹ ${items[i].original_price}</s></h3>
        </div>
        <div class="add-cart">
          <button class="add-to-cart ${items[i].title}" id="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>`;
    data += item;
  }
  products.innerHTML = data;
}
appendCats();
setData(groceries);

for (let i = 0; i < catBtn.length; i++) {
  catBtn[i].addEventListener("click", (e) => {
    for (let i = 0; i < catBtn.length; i++) {
      if (catBtn[i].classList.contains("cat-btn-active")) {
        catBtn[i].classList.remove("cat-btn-active");
      }
    }
    e.target.classList.add("cat-btn-active");
    console.log(e.target.classList);
    let text = event.target.innerText.toLowerCase();
    if (text == "all") {
      setData(groceries);
    } else {
      let data = groceries.filter((e) => {
        return e.category.toLowerCase() == text;
      });
      setData(data);
    }
  });
}

btn.addEventListener("click", (e) => {
  if (input.value !== "") {
    let text = input.value.toLowerCase();
    let data = groceries.filter((e) => {
      return (
        e.title.toLowerCase().includes(text) ||
        e.category.toLowerCase().includes(text)
      );
    });
    setData(data);
  } else {
    setData(groceries);
  }
});
cart.addEventListener("click", () => {
  cart_main.style.display = "block";
});

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      let title = e.target.classList[1].toLowerCase();
      for (let i = 0; i < groceries.length; i++) {
        let gro = groceries[i];
        if (gro.title.toLowerCase().includes(title)) {
          let data = t_body.innerHTML;
          let add = `  <tr>
          <th scope="row">${gro.title}</th>
          <td>${gro.original_price}</td>
          <td>${gro.price}</td>
        </tr>`;
          t_body.innerHTML = data + add;
        }
      }
    }
  });
}
