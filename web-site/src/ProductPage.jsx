import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function ProductPage() {
  const { category } = useParams();

  const subOptions = {
    maggam: ["Simple Work", "Pattu Saree", "Bridal Work"],
    simple: ["Back Design", "Hands", "Front Design"],
    womens: ["Chudidhar", "Frocks", "Lehenga"],
    kids: ["Traditional Pattu Langa (Girls)", "Kurtha Dhothi (Boys)"],
    uniform: ["School", "College"],
    office: ["Formal Shirts", "Office Sarees", "Blazers"],
  };

  return (
    <>
      <Header />

      <main className="products">
        <h2>{category.toUpperCase()} Options</h2>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {subOptions[category]?.map((opt, i) => (
            <Link
              key={i}
              to={`/products/${category}/${encodeURIComponent(opt)}`}
              style={{
                textDecoration: "none",
                color: "black",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <h4>{opt}</h4>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}