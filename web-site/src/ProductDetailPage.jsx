import { useParams, Link } from "react-router-dom";

// ================= FULL PRODUCT DATABASE =================
const productDB = {
  maggam: [
    {
      id: 1,
      name: "Simple Maggam Work",
      price: 1200,
      rating: 4.3,
      material: "Silk",
      designerPhone: "919876543210",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWNv3ITROYdV4CqQmKSdews3L95Wr4ttwi8cXjWaJ-Q&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCD0y67pnOPQG9b2U8jft4iL0PAVQ7QvJEdCtXEra1A&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKrlQF33crXnVkxs9DWa-ch695q-ADu6asvmc7CJVaA&s=10"
      ],
    },
    {
      id: 2,
      name: "Pattu Saree Maggam Work",
      price: 5000,
      rating: 4.7,
      material: "Pure Silk",
      designerPhone: "919876543210",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0e8gltnrbj7Eja6mf5Xs8jQU1kEauAZh1oIzGe9EVg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyL-gBiEOlSZhGReVllSDL-BFuGfgvvPC0bqjRbfAQA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVi_uCNXSNCBcvcnJgkH6OlfYim_K1uhx7hRxRkEfGhg&s=10"
      ],
    },
    {
      id: 3,
      name: "Bridal Maggam Work",
      price: 12000,
      rating: 4.9,
      material: "Heavy Silk",
      designerPhone: "919876543210",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZokQkT2JQkaIV6-iJ6VLKhObh1jgG95gsA9LFVmYgQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFtNx4O4ks_dYi-nd2iH9FSihmuszJZQ-DApkWpDawg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcWmQrKVtYbsrIec-diLolu_hxA6x1dTOPIpjU9-qvQ&s=10"
      ],
    },
  ],

  simple: [
    {
      id: 4,
      name: "Back Design Blouse",
      price: 900,
      rating: 4.2,
      material: "Cotton",
      designerPhone: "918888777666",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_wadUj-MKlp1oRyFTwZ5GOr66peIR43SifMjuAt-Sg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XSYA9Uo_eZkoKf10kqybqBhsJHGRkIzEJyLittHdvQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGeczwFRmTHBwm_XK56gMnkybhI-vN77sUVxseX92aA&s=10"
      ],
    },
    {
      id: 5,
      name: "Hand Design Blouse",
      price: 950,
      rating: 4.4,
      material: "Silk",
      designerPhone: "918888777666",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBPoKPqTEil8BWEdFh_AZz9Twu4yai4mIYMDG5IvgCP5dnELLtV7Dr7c&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6tH0laq2ftvLMDnoED5BWqm2S1w9ecwnWWzsSEnU8Q&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTX6ia7fWkCyamPhkAi5ZaDzhacH6WGWhJdd31vbRqcA&s=10"
      ],
    },
    {
      id: 6,
      name: "Front Design Blouse",
      price: 1000,
      rating: 4.5,
      material: "Cotton Silk",
      designerPhone: "918888777666",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXprcxsvQGguZvuvjOwWTfHXDEkY5BbF1mcfZhtG6lWQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkgZqgH4Tvr7g4eNDGxqx4JF9MULk4EWI29oPXyaSbw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4xg4OMABndwYSSFcQXkwtgaQ7DjrD8MtRzNnSpaDxQ&s"
      ],
    },
  ],

  womens: [
    {
      id: 7,
      name: "Chudidhar Set",
      price: 1200,
      rating: 4.3,
      material: "Cotton",
      designerPhone: "917111222333",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uI2D0Yk1YmJeGRWILKSpftuWnKIgKW6es6wP0xDBCw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqZYRDYIoGBHrZv8Ih6jLPVsNGnN_bbJPhZ79p5lp9g&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylP75D-9m9QitgbKJqwolkdm469JxHPfYZoxDc-KOOapn7hrLTMivdsGq&s=10"
      ],
    },
    {
      id: 8,
      name: "Frocks",
      price: 1200,
      rating: 4.3,
      material: "Cotton",
      designerPhone: "917111222333",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uI2D0Yk1YmJeGRWILKSpftuWnKIgKW6es6wP0xDBCw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqZYRDYIoGBHrZv8Ih6jLPVsNGnN_bbJPhZ79p5lp9g&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylP75D-9m9QitgbKJqwolkdm469JxHPfYZoxDc-KOOapn7hrLTMivdsGq&s=10"
      ],
    },
    {
      id: 9,
      name: "Lehanga",
      price: 1200,
      rating: 4.3,
      material: "Cotton",
      designerPhone: "9171122333",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uI2D0Yk1YmJeGRWILKSpftuWnKIgKW6es6wP0xDBCw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqZYRDYIoGBHrZv8Ih6jLPVsNGnN_bbJPhZ79p5lp9g&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylP75D-9m9QitgbKJqwolkdm469JxHPfYZoxDc-KOOapn7hrLTMivdsGq&s=10"
      ],
    },
  ],

  kids: [
    {
      id: 10,
      name: "Traditional Pattu Langa (Girls)",
      price: 900,
      rating: 4.4,
      material: "Silk",
      designerPhone: "916666777888",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DwQZbkrd4Cd2kBE5GZcx_O8W9wrxJ-yDOBDRLZxi5A&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gt2XIFGop5udy54_t9isBjl6f63TINTj7Wk76wOgqg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttW7Mptp8WOWXczry60T22t6StZxCHhz0Dguv3RXXlgs8MvQhX2NruHI&s=10"
      ],
    },
    {
      id: 11,
      name: "Kurtha Dhothi(Boys)",
      price: 900,
      rating: 4.4,
      material: "Silk",
      designerPhone: "9166677888",
      images: [
        "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/asets/images/2026/JANUARY/9/1LnQEprZ_759e49c8a3e4464a89dc71d779b4b61a.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gt2XIFGop5udy54_t9isBjl6f63TINTj7Wk76wOgqg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttW7Mptp8WOWXczry60T22t6StZxCHhz0Dguv3RXXlgs8MvQhX2NruHI&s=10"
      ],
    },
  ],

  uniform: [
    {
      id: 12,
      name: " Uniform",
      price: 700,
      rating: 4.1,
      material: "Polyester",
      designerPhone: "915555666777",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmR5GcW5ZwJbQvei6LEqnE42k5Ab7unb94EVVQZ1jNMA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeXOmuwlIA4Vb-jdjR3IS5ph7fGB0lqyWIQTKABeDzw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmJ8GAknd0_SN9FT-sRNQtIN-q6oT0o4XDj9Cno7k_w&s=10"
      ],
    },
  ],

  office: [
    {
      id: 13,
      name: "Formal Shirt Design",
      price: 1500,
      rating: 4.4,
      material: "Cotton Blend",
      designerPhone: "914444555666",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVFBu05YJ49FW8FN3ecOZAtuHVk83vON5SFK90ajr0Q&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjqChdLUCSSQpYIG1eSOyYCVWLxfCiScw4o5zmu068A&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpa15YaCWMpkt2tcp9m4qlf2QbtM9wkomxF9xnH7uug&s=10"
      ],
    },
    {
      id: 14,
      name: "Office Sarees",
      price: 1500,
      rating: 4.4,
      material: "Cotton Blend",
      designerPhone: "9144555666",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ywqRfI7QQRHsLe1uMVagsM9mQYA2F2QOvu9UzW7T9g&s=10",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HvKaNK_SiZuktvnKGzg3chEMJ4ufETy1_8dt51vOHw&s=10",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHArJNrb7TMfud27WpmJ3JxG1HWBy-ItbHu-GsGH8cTg&s=10"
     ],
    },
     {
      id: 15,
      name: "Blazer set",
      price: 1500,
      rating: 4.4,
      material: "Cotton Blend",
      designerPhone: "9144665666",
      images: [
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1bikwgSVB7la8Jx3I5_Rf6WXwku6iiDJ4YfZXkx7Rw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6rS0vfaVAfCvAX56-W3dRhf-A0tW_YGxWPLtZlzOdw&s",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexSzru6oKF7r_ZjY3NtHzh4EOBP41tNzGWaYviOFPXw&s=10"
         ],
    },
  ],
};

export default function ProductDetailPage() {
  const { category } = useParams();

  const products = productDB[category];

  if (!products) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Category not found</h2>
        <Link to="/categories">← Back</Link>
      </div>
    );
  }

  // 🔥 IMPORTANT: FLATTEN IMAGES INTO SEPARATE PRODUCTS
  const flatProducts = products.flatMap((p) =>
    p.images.map((img, index) => ({
      id: p.id + "-" + index,
      name: `${p.name} - Design ${index + 1}`,
      price: p.price,
      rating: p.rating,
      material: p.material,
      designerPhone: p.designerPhone,
      image: img,
    }))
  );

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/categories">← Back</Link>

      <h2 style={{ textTransform: "uppercase" }}>
        {category} COLLECTION
      </h2>

      {/* CATEGORY LINKS */}
      <div style={{ marginBottom: "15px" }}>
        <Link to="/products/maggam">Maggam</Link> |{" "}
        <Link to="/products/simple">Simple</Link> |{" "}
        <Link to="/products/womens">Women</Link> |{" "}
        <Link to="/products/kids">Kids</Link> |{" "}
        <Link to="/products/uniform">Uniform</Link> |{" "}
        <Link to="/products/office">Formal</Link>
      </div>

      {/* PRODUCTS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {flatProducts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "280px",
              borderRadius: "10px",
            }}
          >
            {/* SINGLE IMAGE ONLY */}
            <img
              src={p.image}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <p>⭐ {p.rating}</p>
            <p>{p.material}</p>
            <p>{p.designerPhone}</p>

            <button style={{ width: "100%" }}>Add to Cart</button>
            <button style={{ width: "100%", marginTop: "5px" }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}