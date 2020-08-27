export default function Heading({ children }) {
  return (
    <h2
      className="font-sans font-bold text-center text-gray-900"
      style={{ fontSize: '2vw', marginTop: '1vw' }}
    >
      {children}
    </h2>
  );
}
