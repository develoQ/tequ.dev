export const Footer = () => {
  return (
    <footer className='flex grow justify-center items-center'>
      <span className='text-xs text-gray-500'>©TeQu {`${new Date().getFullYear()}`}</span>
    </footer>
  )
}
