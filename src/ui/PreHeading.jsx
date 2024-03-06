export default function PreHeading({ children, className }) {
  return (
    <p
      className={
        className
          ? `${className} "text-gray-500 text-lg" lg:mb-3 `
          : "block text-lg text-gray-500 lg:mb-3"
      }
    >
      {children}
    </p>
  );
}
