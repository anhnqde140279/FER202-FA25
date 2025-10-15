import { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

export default function Filter({ onFilterChange }) {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleChange = (type, value) => {
    const newFilters = {
      search: type === "search" ? value : search,
      yearFilter: type === "year" ? value : yearFilter,
      sortOption: type === "sort" ? value : sortOption,
    };
    onFilterChange(newFilters);
  };

  return (
    <Card className="p-3 mb-4 shadow-sm">
      <h5 className="mb-3">🎯 Filter & Search</h5>

      <Row className="g-3">
        {/* Search Box */}
        <Col md={4}>
          <Form.Group>
            <Form.Label>Search Movies</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by title or description"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                handleChange("search", e.target.value);
              }}
            />
          </Form.Group>
        </Col>

        {/* Year Filter */}
        <Col md={4}>
          <Form.Group>
            <Form.Label>Filter by Year</Form.Label>
            <Form.Select
              value={yearFilter}
              onChange={(e) => {
                setYearFilter(e.target.value);
                handleChange("year", e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="<=2000">≤ 2000</option>
              <option value="2001-2015">2001–2015</option>
              <option value=">2015">> 2015</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Sorting */}
        <Col md={4}>
          <Form.Group>
            <Form.Label>Sort by</Form.Label>
            <Form.Select
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                handleChange("sort", e.target.value);
              }}
            >
              <option value="">None</option>
              <option value="year-asc">Year ↑</option>
              <option value="year-desc">Year ↓</option>
              <option value="title-asc">Title A→Z</option>
              <option value="title-desc">Title Z→A</option>
              <option value="duration-asc">Duration ↑</option>
              <option value="duration-desc">Duration ↓</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Card>
  );
}
