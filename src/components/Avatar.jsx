export default function Avatar({ name, imageUrl }) {
  // console.log(name[0]);
  return (
    <div className='border-[#806B77] border-2 rounded-full h-6 w-6 flex items-center justify-center mt-2'>
      {imageUrl ? (
        <img src={imageUrl} alt="User's Avatar" />
      ) : (
        <>{name ? name[0] : "A"}</>
      )}
    </div>
  );
}
