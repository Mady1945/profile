
const Button = ({label , backgroundColor, textColor, }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4  font-montderrat text-lg leading-none rounded-lg shadow-lg font-bold hover:border 
    ${
      backgroundColor
    ? `${backgroundColor} ${textColor}  `
    : " bg-gradient-to-r from-cyan-300 to-indigo-800  text-white "
  }   ` }>
        {label}

        
    </button>
  )
}

export default Button