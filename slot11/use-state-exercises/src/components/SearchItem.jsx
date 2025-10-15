import React, { useState } from "react";

const data = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];

function SearchItem() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-3 border rounded" style={{ maxWidth: 400, margin: "auto" }}>
      <h4 className="text-center">Tìm kiếm theo tên</h4>
      <input
        className="form-control mb-3"
        placeholder="Nhập tên..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-unstyled">
        {filtered.length > 0 ? (
          filtered.map((i) => (
            <li key={i.id} className="border p-2 mb-2 rounded bg-light">
              {i.name} <span className="text-muted">({i.category})</span>
            </li>
          ))
        ) : (
          <li className="text-center text-danger">Không tìm thấy kết quả</li>
        )}
      </ul>
    </div>
  );
}
export default SearchItem;
