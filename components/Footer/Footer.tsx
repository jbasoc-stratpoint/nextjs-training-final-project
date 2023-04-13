import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer
      className="sticky top-[100vh] mt-5 w-full bg-slate-300 p-10 
      text-center text-sm text-slate-800"
    >
      <Logo width={100} height={100} />
      Footer Contents
    </footer>
  );
}

export default Footer;
