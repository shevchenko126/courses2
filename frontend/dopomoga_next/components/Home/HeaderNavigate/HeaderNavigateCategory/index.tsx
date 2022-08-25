const categoryArray = [
  "Mobile Phone",
  "Electronics",
  "Car",
  "Vehicle",
  "Property",
  "Home & Living",
  "Essentials",
  "Business & Industry",
  "Agriculture",
];
const HeaderNavigateCategory = () => {
  return (
    <div className="headerNavigate-category__links">
      {categoryArray.map((category) => (
        <a
          className="headerNavigate-category-links__link"
          key={category}
          href={category}
        >
          {category}
        </a>
      ))}
    </div>
  );
};

export default HeaderNavigateCategory;
