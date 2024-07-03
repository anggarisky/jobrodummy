export default function Navbar() {
    return(
        <nav className="container max-w-[1130px] mx-auto flex items-center justify-between pt-10">
          <a href="index.html" className="flex shrink-0">
            <img src="/assets/logos/Logo.svg" alt="Logo" />
          </a>
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-semibold text-[#FF6B2C]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-medium text-white"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-medium text-white"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-medium text-white"
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-medium text-white"
              >
                About
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="signin.html"
              className="rounded-full border border-white p-[14px_24px] font-semibold text-white"
            >
              Sign In
            </a>
            <a
              href="signup.html"
              className="rounded-full p-[14px_24px] bg-[#FF6B2C] font-semibold text-white hover:shadow-[0_10px_20px_0_#FF6B2C66] transition-all duration-300"
            >
              Sign up
            </a>
          </div>
        </nav>
    );
}