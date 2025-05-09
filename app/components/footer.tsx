function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <p className="mt-8 font-normal">
      Contact me:
      </p>
      <ul className="font-sm mt-2 flex flex-col space-x-0 space-y-2 font-normal md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:font-bold"
            rel="noopener noreferrer"
            target="_blank"
            href="https://wa.me/972559226888"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">WhatsApp</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:font-bold"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/artem.klibaner/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Instagram DM</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:font-bold"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/artem_pm/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:font-bold"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/artempm/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 font-normal">
        {new Date().getFullYear()} ArtemPM.com
      </p>
    </footer>
  )
}
