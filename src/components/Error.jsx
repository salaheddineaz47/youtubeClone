function Error({ message }) {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
      role="alert"
    >
      <span className="font-medium">{message} </span>
    </div>
  );
}

export default Error;
