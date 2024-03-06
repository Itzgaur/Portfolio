export default function Button({
  children,
  color = "",
  border = "border-2 border-solid border-black",
  hoverColor = "bg-gray-200",
  textColor = "text-gray-950",
}) {
  const styles = `${color} w-40 rounded-[2rem]  p-4 font-semibold ${border} ${textColor}  hover:${hoverColor}`;

  return <button className={styles}>{children}</button>;
}
