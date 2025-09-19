// 1. Arrow function cơ bản – double & isEven
const double = n => n * 2;
const isEven = n => n % 2 === 0;

console.log("double(7):", double(7));
console.log("isEven(10):", isEven(10));
console.log("isEven(7):", isEven(7));

// 2. Rest parameter – tính tổng và trung bình
const sum = (...nums) =>
  nums
    .filter(x => typeof x === "number" && !isNaN(x))
    .reduce((acc, val) => acc + val, 0);

const avg = (...nums) => {
  const valid = nums.filter(x => typeof x === "number" && !isNaN(x));
  if (valid.length === 0) return 0;
  return (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(2);
};

console.log("sum(1,2,3):", sum(1, 2, 3));
console.log("sum(1,'x',4):", sum(1, "x", 4));
console.log("avg(1,2,3,4):", avg(1, 2, 3, 4));
console.log("avg():", avg());

// 3. Destructuring object lồng nhau – lấy địa chỉ
const person = {
  name: "John",
  address: {
    street: "123 Main St"
    // city: "New York"  // thử xóa để test default
  }
};

const {
  address: { street, city = "Unknown City" }
} = person;

console.log("Street:", street);
console.log("City:", city);

// 4. Destructuring array + skip + default
const ages = [33, 12, 20, 16];
const [first, , third = 0, ...restAges] = ages;

console.log("first:", first);
console.log("third:", third);
console.log("restAges:", restAges);

// 5. Map + filter – danh sách teen
const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 12 },
  { name: "Cindy", age: 15 },
  { name: "David", age: 22 }
];

people
  .filter(p => p.age >= 13 && p.age <= 19)
  .map(p => `${p.name} (${p.age})`)
  .forEach(line => console.log(line));

// 6. Sort + slice – doanh nghiệp theo năm kết thúc
const companies = [
  { name: "Company A", category: "Finance", start: 1981, end: 2003 },
  { name: "Company B", category: "Retail", start: 1992, end: 2008 },
  { name: "Company C", category: "Auto", start: 1999, end: 2007 },
  { name: "Company D", category: "Retail", start: 1989, end: 2010 }
];

const sorted = [...companies].sort((a, b) => a.end - b.end);
sorted.slice(0, 3).forEach(c => console.log(`${c.name} - ${c.end}`));

// 7. Spread vs. rest – bất biến & gộp mảng
const company0New = { ...companies[0], start: companies[0].start + 1 };
console.log("companies[0]:", companies[0]);
console.log("company0New:", company0New);

const concatAll = (...arrays) => [].concat(...arrays);
console.log("concatAll:", concatAll([1, 2], [3], [4, 5]));

// 8. Reduce nâng cao – thống kê tuổi
const stats = ages.reduce(
  (acc, age) => {
    acc.total += age;
    acc.min = Math.min(acc.min, age);
    acc.max = Math.max(acc.max, age);

    if (age >= 13 && age <= 19) acc.buckets.teen++;
    else if (age >= 20) acc.buckets.adult++;

    return acc;
  },
  { total: 0, min: Infinity, max: -Infinity, buckets: { teen: 0, adult: 0 } }
);

console.log(`Total: ${stats.total}, Min: ${stats.min}, Max: ${stats.max}`);
console.log("Buckets:", stats.buckets);