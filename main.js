// Get average
console.log(`The average is $${(items.map((e) => e.price).reduce((a,b) => a+b) / items.length).toFixed(2)}`);

// Filter all entries that are 14 - 18 (exclusive)
console.log(items.filter((e) => e.price > 14 && e.price < 18))

// Filter by currency
items.filter((e) => e.currency_code === "GBP").forEach((e) => console.log(`${e.title} costs £${e.price}`))

// Filter by material
items.filter((e) => e.materials.includes("wood")).forEach((e) => console.log(e.title))

// The materias of items with 8 or more materials
items.filter((e) => e.materials.length >= 8).forEach((e) => e.materials.forEach((m) => console.log(m)))

// Self made items
console.log(`${items.filter((e) => e.who_made === "i_did").length} were made by their sellers`)
