const products = [
  { id:101, name:"Mixeur Compact Premium", price:99, oldPrice:129, category:"maison-cuisine", image:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&q=80", rating:4.7 },
  { id:102, name:"Set Couteaux Chef", price:149, oldPrice:189, category:"maison-cuisine", image:"https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&q=80", rating:4.8 },
  { id:103, name:"Boîte Repas Isotherme", price:39, oldPrice:49, category:"bien-etre", image:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80", rating:4.5 },
  { id:104, name:"Lampe Bureau LED Pro", price:79, oldPrice:99, category:"maison-cuisine", image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80", rating:4.6 },
  { id:105, name:"Organiseur Cuisine Élégance", price:59, oldPrice:79, category:"maison-cuisine", image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80", rating:4.6 },
  { id:106, name:"Chargeur Sans Fil Duo", price:69, oldPrice:89, category:"tech", image:"https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=600&q=80", rating:4.7 },
  { id:107, name:"Mini Projecteur Smart", price:229, oldPrice:299, category:"tech", image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80", rating:4.8 },
  { id:108, name:"Caméra Sécurité Wi-Fi", price:119, oldPrice:149, category:"tech", image:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80", rating:4.6 },
  { id:109, name:"Support Laptop Aluminium", price:49, oldPrice:69, category:"tech", image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600&q=80", rating:4.5 },
  { id:110, name:"Veilleuse Bébé Nuage", price:35, oldPrice:45, category:"bebe", image:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80", rating:4.8 },
  { id:111, name:"Tapis Éveil Douillet", price:89, oldPrice:119, category:"bebe", image:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80", rating:4.7 },
  { id:112, name:"Sac Organisateur Poussette", price:59, oldPrice:79, category:"bebe", image:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80", rating:4.6 },
  { id:113, name:"Kit Outils Maison 48 pcs", price:129, oldPrice:169, category:"bricolage", image:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80", rating:4.8 },
  { id:114, name:"Perceuse Compacte Pro", price:179, oldPrice:229, category:"bricolage", image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", rating:4.7 },
  { id:115, name:"Rangement Atelier Modulable", price:89, oldPrice:109, category:"bricolage", image:"https://images.unsplash.com/photo-1581147036324-c1c7d71ecce4?w=600&q=80", rating:4.5 },
  { id:116, name:"Masseur Cervical Chauffant", price:119, oldPrice:149, category:"bien-etre", image:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80", rating:4.8 },
  { id:117, name:"Diffuseur Huiles Zen", price:49, oldPrice:69, category:"bien-etre", image:"https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&q=80", rating:4.7 },
  { id:118, name:"Oreiller Mémoire Premium", price:79, oldPrice:99, category:"bien-etre", image:"https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80", rating:4.6 },
  { id:119, name:"Brosse Nettoyage Auto", price:29, oldPrice:39, category:"other", image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", rating:4.4 },
  { id:120, name:"Gourde Filtrante Voyage", price:44, oldPrice:59, category:"other", image:"https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80", rating:4.6 },
  { id:121, name:"Coffret Bureau Premium", price:89, oldPrice:119, category:"other", image:"https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=600&q=80", rating:4.7 },
  { id:122, name:"Casque Audio Premium Or", price:299, oldPrice:399, category:"tech", image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", rating:4.8 },
  { id:123, name:"Portefeuille Cuir Signature", price:139, oldPrice:179, category:"other", image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80", rating:4.8 },
  { id:124, name:"Lampe Designer Émeraude", price:159, oldPrice:199, category:"maison-cuisine", image:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80", rating:4.7 }
];

let cart = JSON.parse(localStorage.getItem("sks_cart")) || [];
const categoryCards = [
  { title:"Maison & cuisine", category:"maison-cuisine", image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80" },
  { title:"Gadgets & accessoires tech", category:"tech", image:"https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=80" },
  { title:"Bébé & enfants", category:"bebe", image:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&q=80" },
  { title:"Bricolage & outils", category:"bricolage", image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80" },
  { title:"Bien-être & quotidien", category:"bien-etre", image:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80" },
  { title:"Divers & trouvailles", category:"other", image:"https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=900&q=80" }
];
let filteredProducts = [...products];

function showPage(pageId){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const t = document.getElementById(pageId);
  if(t){ t.classList.add("active"); window.scrollTo({top:0,behavior:"smooth"}); window.location.hash = pageId; }
}
function formatCategory(c){
  const labels = {"maison-cuisine":"Maison & cuisine",tech:"Tech",bebe:"Bébé & enfants",bricolage:"Bricolage","bien-etre":"Bien-être",other:"Divers"};
  return labels[c] || c;
}
function renderProducts(id, items){
  const c = document.getElementById(id); if(!c) return;
  c.innerHTML = items.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" class="product-img">
      <div class="product-cat">${formatCategory(p.category)}</div>
      <h3 class="product-title">${p.name}</h3>
      <div>
        <span class="product-price">${p.price} €</span>
        ${p.oldPrice ? `<span class="product-old-price">${p.oldPrice} €</span>` : ""}
      </div>
      <button class="add-to-cart-btn" onclick="addToCart(${p.id})">Ajouter au panier</button>
    </div>`).join("");
}
function renderCategories(){
  const html = categoryCards.map(card => `
    <div class="product-card" onclick="filterByCategory('${card.category}')">
      <img src="${card.image}" alt="${card.title}" class="product-img">
      <h3 class="product-title">${card.title}</h3>
      <p style="color:var(--gris); font-size:14px;">Explorer la sélection</p>
    </div>`).join("");
  const a = document.getElementById("category-showcase");
  const b = document.getElementById("categories-page-grid");
  if(a) a.innerHTML = html;
  if(b) b.innerHTML = html;
}
function filterByCategory(cat){
  filteredProducts = products.filter(p => p.category === cat);
  renderProducts("all-products", filteredProducts);
  showPage("shop");
}
function applyShopFilters(){
  const search = (document.getElementById("shop-search")?.value || "").toLowerCase();
  const checked = [...document.querySelectorAll('.sidebar input[type="checkbox"]:checked')].map(el => el.value);
  let r = [...products];
  if(!checked.includes("all") && checked.length){ r = r.filter(p => checked.includes(p.category)); }
  if(search){ r = r.filter(p => p.name.toLowerCase().includes(search) || formatCategory(p.category).toLowerCase().includes(search)); }
  const sort = document.getElementById("shop-sort")?.value || "default";
  if(sort === "price-asc") r.sort((a,b) => a.price-b.price);
  if(sort === "price-desc") r.sort((a,b) => b.price-a.price);
  if(sort === "rating-desc") r.sort((a,b) => b.rating-a.rating);
  filteredProducts = r;
  renderProducts("all-products", filteredProducts);
}
function addToCart(id){
  const p = products.find(x => x.id === id);
  const e = cart.find(x => x.id === id);
  if(e){ e.qty++; } else { cart.push({...p, qty:1}); }
  updateCart();
  showToast(`${p.name} ajouté au panier`);
}
function removeFromCart(id){ cart = cart.filter(i => i.id !== id); updateCart(); }
function updateCart(){
  localStorage.setItem("sks_cart", JSON.stringify(cart));
  const count = cart.reduce((s,i) => s+i.qty, 0);
  const badge = document.getElementById("cart-badge");
  if(badge) badge.textContent = count;
  const tbody = document.getElementById("cart-tbody");
  if(tbody){
    tbody.innerHTML = cart.map(i => `
      <tr>
        <td><div style="display:flex;align-items:center;gap:15px;">
          <img src="${i.image}" width="50" height="50" style="object-fit:cover;border-radius:4px;"><span>${i.name}</span></div></td>
        <td>${i.price} €</td>
        <td>${i.qty}</td>
        <td>${(i.price*i.qty).toFixed(2)} €</td>
        <td><button onclick="removeFromCart(${i.id})" style="background:none;border:none;color:red;cursor:pointer;">✕</button></td>
      </tr>`).join("");
    if(cart.length === 0){ tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:20px;">Votre panier est vide</td></tr>'; }
    const total = cart.reduce((s,i) => s+i.price*i.qty, 0);
    document.getElementById("cart-subtotal").textContent = `${total.toFixed(2)} €`;
    document.getElementById("cart-total").textContent = `${total.toFixed(2)} €`;
  }
}
function showToast(m){
  const c = document.getElementById("toast-container");
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = m;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
window.addEventListener("scroll", () => {
  const h = document.getElementById("main-header");
  if(window.scrollY > 50) h.classList.add("scrolled"); else h.classList.remove("scrolled");
});
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#","") || "home";
  showPage(hash);
});
function initPayPalButton(){
  const c = document.getElementById("paypal-button-container");
  if(!c) return;
  c.innerHTML = `
    <button type="button" class="btn-gold" style="width:100%;">Payer avec PayPal</button>
    <p style="font-size:12px;color:var(--gris);margin-top:8px;">Active ensuite le vrai bouton en branchant ton backend léger.</p>`;
}
document.addEventListener("change", e => {
  if(e.target.closest(".sidebar")){
    if(e.target.value === "all" && e.target.checked){
      document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(b => { if(b.value !== "all") b.checked = false; });
    } else if(e.target.value !== "all" && e.target.checked){
      const a = document.querySelector('.sidebar input[value="all"]'); if(a) a.checked = false;
    }
    applyShopFilters();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts("featured-products", products.slice(0,8));
  renderProducts("all-products", products);
  updateCart();
  initPayPalButton();
  document.getElementById("shop-search")?.addEventListener("input", applyShopFilters);
  document.getElementById("shop-sort")?.addEventListener("change", applyShopFilters);
  document.getElementById("checkout-form")?.addEventListener("submit", e => {
    e.preventDefault();
    showToast("Commande enregistrée. Prochaine étape : connexion PayPal au backend.");
  });
  const initialHash = window.location.hash.replace("#","") || "home";
  showPage(initialHash);
});
