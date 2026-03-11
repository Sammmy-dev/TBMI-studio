import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp} from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      Icon: FaInstagram,
      url: "https://www.instagram.com/tbmi.studios",
    },
    {
      name: "YouTube",
      Icon: FaYoutube,
      url: "https://youtube.com/@tbmi.studios?si=uKyF59WfksURzOdg",
    },
    {
      name: "TikTok",
      Icon: FaTiktok,
      url: "https://www.tiktok.com/@thebrooksmediaint?_r=1&_d=ekkb8m067e61d0&sec_uid=MS4wLjABAAAAh4x0JY73KPbUAMbdhpeYEpwBSOeJLEZ4P2dDrjsIKXj5qMRcHTMdrz5dSq7RIHxw&share_author_id=7402923134170727430&sharer_language=en&source=h5_m&u_code=efid325lc5ei42&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=77986F97-034D-4EAF-9EB6-C148D868BE70&user_id=7402923134170727430&sec_user_id=MS4wLjABAAAAh4x0JY73KPbUAMbdhpeYEpwBSOeJLEZ4P2dDrjsIKXj5qMRcHTMdrz5dSq7RIHxw&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233",
    },
  ];

  return (
    <footer className="bg-background-dark pt-20 pb-10 border-t border-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center mb-8">
              <img
                alt="TBMI Logo"
                className="h-auto w-40"
                src="/tbmi-removebg-preview.png"
              />
            </div>
            <p className="text-slate-500 max-w-sm font-light leading-relaxed">
              Your complete creative studio offering professional training, content production, and studio solutions for creators and brands.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-400 hover:text-primary text-sm uppercase transition-colors cursor-pointer"
                  onClick={() => window.location.href = '/services'}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-primary text-sm uppercase transition-colors cursor-pointer"
                  onClick={() => window.location.href = '/about'}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-primary text-sm uppercase transition-colors cursor-pointer"
                  onClick={() => window.location.href = '/gallery'}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-primary text-sm uppercase transition-colors cursor-pointer"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                  href={link.url}
                  title={link.name}
                >
                  <link.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            © 2024 TBMI Studios. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a
              className="text-slate-600 hover:text-slate-400 text-[10px] uppercase tracking-widest transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-slate-600 hover:text-slate-400 text-[10px] uppercase tracking-widest transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
