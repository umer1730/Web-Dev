function Image() {
  const showImage = true;

  return (
    <>
      {showImage && (
        <img
          src="https://via.placeholder.com/150"
          alt="Example"
        />
      )}
    </>
  );
}

export default Image