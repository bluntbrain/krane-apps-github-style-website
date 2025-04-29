import React from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Briefcase,
  Users,
  Mail,
  Calendar,
  FileText,
} from "lucide-react";
import { EXTERNAL_LINKS, CTA_TEXT } from "../../constants";

const Sidebar: React.FC = () => {
  const navItems = [
    { name: "About", path: "/about", icon: <BookOpen size={16} /> },
    { name: "Portfolio", path: "/portfolio", icon: <Briefcase size={16} /> },
    { name: "Team", path: "/team", icon: <Users size={16} /> },
    { name: "Blog", path: "/blog", icon: <FileText size={16} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={16} /> },
  ];

  return (
    <aside className="hidden md:block md:w-48 lg:w-52 border-r border-border">
      <div className="sticky top-20 px-2 py-3">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-nav-item py-1.5 ${isActive ? "active" : ""}`
              }
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-4 p-2.5 bg-bg-secondary border border-border rounded-md">
          <h3 className="text-xs font-medium mb-1.5">
            Ready to launch your MVP?
          </h3>
          <p className="text-text-secondary text-xs mb-2.5 leading-tight">
            In our 30-min intro call, we'll discuss your project needs and
            provide a roadmap for development.
          </p>
          <a
            href={EXTERNAL_LINKS.CALENDAR}
            target="_blank"
            rel="noreferrer"
            className="gh-btn gh-btn-primary w-full flex items-center justify-center text-xs py-1.5"
          >
            <Calendar size={12} className="mr-1" />
            {CTA_TEXT.BOOK_CALL}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
