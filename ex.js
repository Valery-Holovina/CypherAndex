// ==========================

let text = "Сьогодні чудовий день! #happy #sunshine #2024";
let hashtags = text.match(/#[\w\d]+/g);
console.log("Завдання 1:", hashtags); 

// =========================

function extractDomain(url) {
    let match = url.match(/https?:\/\/(?:www\.)?([^\/]+)/);
    return match ? match[1] : null;
}
console.log("Завдання 2:", extractDomain("https://www.google.com/search?q=javascript"));
console.log("Завдання 2:", extractDomain("http://example.org/page/about")); 

// =========================
let ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
console.log("Завдання 3:", ipv4Regex.test("192.168.1.1")); 
console.log("Завдання 3:", ipv4Regex.test("256.100.50.25")); 

// =========================
let usernameRegex = /^[a-zA-Z][\w]{2,15}$/;
console.log("Завдання 4:", usernameRegex.test("user_123"));
console.log("Завдання 4:", usernameRegex.test("_username")); 

// ===========================

let htmlText = "Text <b>жирний</b> і <i>курсив</i>";
let htmlTags = htmlText.match(/<\/?[^>]+>/g);
console.log("Завдання 5:", htmlTags); 

// =========================
let hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
console.log("Завдання 6:", hexRegex.test("#ff5733")); 
console.log("Завдання 6:", hexRegex.test("#000")); 
console.log("Завдання 6:", hexRegex.test("#12345")); 

// =========================
let mentionText = "Привіт, @kazi і @jude! Як справи, @aaron?";
let mentions = mentionText.match(/@[\w\d_]+/g);
console.log("Завдання 7:", mentions); 

// ==========================
let cardRegex = /^(\d{4}\s?){4}$/;
console.log("Завдання 8:", cardRegex.test("1234 5678 9012 3466")); 
console.log("Завдання 8:", cardRegex.test("1234567890123156")); 
console.log("Завдання 8:", cardRegex.test("1234-5678-9012-3886")); 
