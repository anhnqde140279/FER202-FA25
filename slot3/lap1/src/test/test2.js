function sum(...nums) {
  return nums
    .filter(n => typeof n === "number" && !isNaN(n)) // chỉ giữ số hợp lệ
    .reduce((acc, val) => acc + val, 0); // cộng dồn
}

// Hàm tính trung bình
function avg(...nums) {
  const validNums = nums.filter(n => typeof n === "number" && !isNaN(n));
  if (validNums.length === 0) return 0; // nếu rỗng trả về 0
  const total = validNums.reduce((acc, val) => acc + val, 0);
  return (total / validNums.length).toFixed(2); // làm tròn 2 chữ số thập phân
}

// Test
console.log("sum(1,2,3):", sum(1, 2, 3));           // 6
console.log("sum(1,'x',4):", sum(1, "x", 4));       // 5
console.log("avg(1,2,3,4):", avg(1, 2, 3, 4));      // 2.50
console.log("avg():", avg());                       // 0