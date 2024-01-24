export default function CarouselPagination({ slideNo, setSlideNo }) {
  return (
    <div className="w-fit absolute z-30 -right-5 sm:-right-7 xl:-right-[33px] top-12 sm:top-16 xl:top-32">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <svg
          key={i}
          viewBox="0 0 66 66"
          className={`${
            i === slideNo ? ' text-[#FFFCEA]' : 'text-transparent'
          } fill-current stroke-[#FFFCEA] w-10 sm:w-14 xl:w-[66px] transtion-all duration-700 ease-in-out lg:hover:scale-110 cursor-pointer`}
          onClick={() => setSlideNo(i)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.2546 38.9626L12.1273 56.7017L22.9176 63.0018L33.0449 45.2627L43.1722 63.0018L53.9624 56.7017L43.8351 38.9626H64.0898V26.3624H43.8351L53.9624 8.62325L43.1722 2.32315L33.0449 20.0623L22.9175 2.32315L12.1273 8.62325L22.2547 26.3624H2V38.9626H22.2546Z"
            strokeWidth="3"
            strokeLinecap="square"
          />
        </svg>
      ))}
    </div>
  );
}
