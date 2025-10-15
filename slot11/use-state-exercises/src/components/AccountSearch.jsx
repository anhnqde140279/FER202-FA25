import React, { useState } from "react";
import { Card } from "react-bootstrap";

const accounts = [
  { id: 1, username: "admin", password: "123", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, username: "traltb", password: "abc", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, username: "john", password: "xyz", avatar: "https://i.pravatar.cc/150?img=3" },
];

function AccountSearch() {
  const [search, setSearch] = useState("");
  const filtered = accounts.filter(a =>
    a.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-3 border rounded">
      <h4>Tìm kiếm tài khoản</h4>
      <input
        className="form-control mb-3"
        placeholder="Nhập username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex flex-wrap gap-3">
        {filtered.length > 0 ? (
          filtered.map(acc => (
            <Card key={acc.id} style={{ width: "12rem" }}>
              <Card.Img variant="top" src={acc.avatar} />
              <Card.Body>
                <Card.Title>{acc.username}</Card.Title>
                <Card.Text>Password: {acc.password}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-danger">Không tìm thấy kết quả</p>
        )}
      </div>
    </div>
  );
}
export default AccountSearch;
