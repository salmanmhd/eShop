export default function PageComponent({
  text,
  onPageChange,
  currentPage,
  className = "",
}) {
  function handleClick() {
    if (text === "Prev") {
      onPageChange(currentPage - 1);
      return;
    }

    if (text === "Next") {
      onPageChange(currentPage + 1);
      return;
    }
    onPageChange(text);
  }
  return (
    <p
      onClick={handleClick}
      className={`${
        Number(text) === currentPage ? "font-bold text-blue-400" : ""
      } ${className} pagination-item cursor-pointer text-white hover:text-gray-300`}
    >
      {text}
    </p>
  );
}
